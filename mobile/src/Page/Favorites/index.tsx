import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from "@react-navigation/native";

import PageHeader from '../../components/PageHeader';
import Teacheritems, { Teacher } from '../../components/TeacherItems';

import styles from './styles';

function Favorites() {
    const [favorites, setFavorites] = useState([]);
    
    function loadFavorite() {
        AsyncStorage.getItem('favorites').then(response =>{
            if(response) {
                const favoritesTeacher = JSON.parse(response);
               
                setFavorites(favoritesTeacher);
            }
        });
    }

    useFocusEffect(()=>{
        loadFavorite();
    });

    return (
        <View style={styles.container}>
            <PageHeader title='Meus Proffs Favoritos' />
            
            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16, 
                    paddingBottom: 16
                }}
            >
                {favorites.map((teacher: Teacher)  => {
                    return (
                        <Teacheritems 
                            key={teacher.id} 
                            teacher={teacher} 
                            favorited={true}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
}

export default Favorites;