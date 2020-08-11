import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';
import Teacheritems from '../../components/TeacherItems';

function Favorites() {
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
                <Teacheritems />
                <Teacheritems />
                <Teacheritems />
                <Teacheritems />
                <Teacheritems />
            </ScrollView>
        </View>
    );
}

export default Favorites;