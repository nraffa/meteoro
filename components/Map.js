import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";

const initialRegion = {
  latitude: 48.13509195381473,
  longitude: 11.582336679201934,
  latitudeDelta: 0.25,
  longitudeDelta: 0.25,
};

export default function Map() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
