import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BottomNavigation from './src/navigation/bottom-tab-navigator/bottom-tab-navigator';

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="auto" />
            <BottomNavigation />
        </View>
    );
}
