import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import DashboardScreen from './src/pages/DashboardScreen';
import { styles } from './src/styles/global';

const App: React.FC = () => {
  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <DashboardScreen />
      </View>
  );
};

export default App;