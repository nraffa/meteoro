import React from 'react';
import { View, Text } from 'react-native';
import Map from '../components/map/home-map';

const Home = () => {
    return (
        <View style={styles.map}>
            <Map />
        </View>
    );
};

// define a min height for the map

const styles = {
    map: {
        flex: 1,
        height: 'auto',
        width: 'auto',
    },
};

export default Home;
