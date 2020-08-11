import React, {useState} from 'react';
import { View, Text, ScrollView,TextInput, Alert } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons'

import PageHeader from '../../components/PageHeader';
import Teacheritems, { Teacher } from '../../components/TeacherItems';
import api from '../../services/api';

import styles from './styles';

function TeacherList() {
    const [favorites, setFavorites] = useState<number[]>([]);
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [subject, setSubject] =useState('');
    const [week_day, setWeek_day] =useState('');
    const [time, setTime] =useState('');
    const [teachers, setTeachers] = useState([]);

    function loadFavorite() {
        AsyncStorage.getItem('favorites').then(response =>{
            if(response) {
                const favoritesTeacher = JSON.parse(response);
                const favoritesTeacherId = favoritesTeacher.map((teacher: Teacher) =>{
                    return teacher.id
                });
                setFavorites(favoritesTeacherId);
            }
        });
    }

    function handleTogglefiltersVisible() {
        setIsFilterVisible(!isFilterVisible);
    }

    async function handleFilterSubmit() {
        loadFavorite();
       const response =  await api.get('classes', {
           params: {
               subject,
               week_day,
               time
           }
       });
       setTeachers(response.data);
       setIsFilterVisible(false);
    }

    return (
        <View style={styles.container}>
            <PageHeader title='Proffs disponíveis'
                    headerRight={(
                            <BorderlessButton onPress={handleTogglefiltersVisible}>
                                <Feather name='filter' size={20} color='#fff' />
                            </BorderlessButton>
                    )}
            >
                {isFilterVisible && (<View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                    
                        <TextInput placeholderTextColor='#c1bccc'
                            style={styles.input}
                            value={subject}
                            onChangeText={setSubject}
                            placeholder='Qual a matéria' />
                        
                        <View style={styles.inputGroup}>
                            
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da Semana</Text>
                                <TextInput placeholderTextColor='#c1bccc'
                                    style={styles.input}
                                    value={week_day}
                                    onChangeText={setWeek_day}
                                    placeholder='Qual o dia' />
                            </View>
                            
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput placeholderTextColor='#c1bccc'
                                    style={styles.input}
                                    value={time}
                                    onChangeText={setTime}
                                    placeholder='Qual horário' />
                            </View>
                        </View>

                        <RectButton onPress={handleFilterSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>  
                )}
            </PageHeader>

            <ScrollView style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16, 
                    paddingBottom: 16}}
            >
                {teachers.map((teacher: Teacher)  => {
                    return (
                        <Teacheritems 
                            key={teacher.id} 
                            teacher={teacher} 
                            favorited={favorites.includes(Number(teacher.id))}
                        />
                    );
                })}
                
            </ScrollView>
        </View>
    );
}

export default TeacherList;