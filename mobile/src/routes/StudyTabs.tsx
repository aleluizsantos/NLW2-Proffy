import React from 'react';
import { Ionicons } from '@expo/vector-icons'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import TeacherList from '../Page/TeacherList';
import Favorites from '../Page/Favorites';

const {Navigator, Screen} = createBottomTabNavigator();

function StudyTabs() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebedf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d',

            }}
        >
            <Screen name='TeacherList' 
                    component={TeacherList} 
                    options={{
                        tabBarLabel: 'Proffs',
                        tabBarIcon: ({color, size, focused}) => {
                            return (
                            <Ionicons name='ios-easel' 
                                    color={focused ? '#8257e5' : color} 
                                    size={focused ? 28 : size} 
                            />)
                        }
                    }}
            />
            <Screen name='Favorites' 
                    component={Favorites} 
                    options={{
                        tabBarLabel: 'Favoritos',
                        tabBarIcon: ({color, size, focused}) => {
                            return (
                                <Ionicons name='ios-heart' 
                                    color={focused ? '#8257e5' : color} 
                                    size={focused ? 28 : size} 
                                />)
                        }
                    }}
            />
        </Navigator>
    );
}

export default StudyTabs;