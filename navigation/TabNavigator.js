import {createBottomNavigator} from "react-navigation/bottom-tabs";
import createPost from ".createPost";
import Feed from "./screens/Feed.js";
import Ionicons from "react-native-vector-icons/Ionicons";

import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator 
        screenOptions={({route}) => ({
            tabBarIcon: ({ focused, color, size}) => {
                let iconName;
                if (route.name === 'Feed') {
                    iconName=focussed
                    ? 'book'
                    : 'book-outline'
                } else if (route.name === 'CreatePost') {
                    iconName = fpcused ? 'create' : 'create-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} >
            }
        })}
        tabBarOptions={{
            activateTintColor: 'tomato',
            inactivateTintColor: 'gray',
        }}

        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="CreatePost" component={CreatePost} />
    </Tab.Navigator>

    )
}

export default BottomTabNavigator