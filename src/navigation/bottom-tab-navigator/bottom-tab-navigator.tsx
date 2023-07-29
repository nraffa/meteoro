import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../screens/Home';
import Chat from '../../screens/Chat';
import Favourites from '../../screens/Favourites';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return <Home />;
};

const ChatScreen = () => {
    return <Chat />;
};

const FavouritesScreen = () => {
    return <Favourites />;
};

const App = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#323431',
                tabBarInactiveTintColor: '#ccc',
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="chatbubble-outline"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Favourites"
                component={FavouritesScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const BottomNavigation = () => {
    return (
        <NavigationContainer>
            <App />
        </NavigationContainer>
    );
};

export default BottomNavigation;
