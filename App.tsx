import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import DashboardScreen from './src/pages/DashboardScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <DashboardScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});