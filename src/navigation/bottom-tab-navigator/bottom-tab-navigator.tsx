import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../screens/Home';
import Chat from '../../screens/Chat';
import Favourites from '../../screens/Favourites';

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
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Favourites" component={FavouritesScreen} />
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
