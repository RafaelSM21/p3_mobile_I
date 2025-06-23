import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import IndicatorCard from '../components/IndicatorCard';

interface HealthData {
  steps: number;
  sleep: number;
  hydration: number;
  heartRate: number;
}

export default function DashboardScreen() {
  const [healthData, setHealthData] = useState<HealthData>({
    steps: 0,
    sleep: 0,
    hydration: 0,
    heartRate: 0
  });

  useEffect(() => {
    const loadData = () => {
      setHealthData({
        steps: Math.floor(Math.random() * 10000),
        sleep: parseFloat((Math.random() * 4 + 4).toFixed(1)),
        hydration: parseFloat((Math.random() * 2 + 1).toFixed(1)),
        heartRate: Math.floor(60 + Math.random() * 40)
      });
    };

    loadData();
    const interval = setInterval(loadData, 15000);
    return () => clearInterval(interval);
  }, []);

  const openMoreInfo = () => {
    Linking.openURL('https://www.tuasaude.com/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Minha Saúde Hoje</Text>

      <IndicatorCard 
        label="Passos" 
        value={healthData.steps} 
        unit="" 
        iconName="walk" 
        color="#4CAF50" 
      />
      <IndicatorCard 
        label="Sono" 
        value={healthData.sleep} 
        unit="h" 
        iconName="sleep" 
        color="#3F51B5" 
      />
      <IndicatorCard 
        label="Hidratação" 
        value={healthData.hydration} 
        unit="L" 
        iconName="cup-water" 
        color="#03A9F4" 
      />
      <IndicatorCard 
        label="Frequência Cardíaca" 
        value={healthData.heartRate} 
        unit="bpm" 
        iconName="heart-pulse" 
        color="#E91E63" 
      />

      <TouchableOpacity 
        style={styles.infoButton}
        onPress={openMoreInfo}
      >
        <MaterialCommunityIcons name="information-outline" size={20} color="#fff" />
        <Text style={styles.infoButtonText}>Ver mais informações</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: '#333',
  },
  infoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4285F4',
    padding: 15,
    borderRadius: 8,
    marginTop: 24,
  },
  infoButtonText: {
    color: '#fff',
    marginLeft: 10,
    fontWeight: 'bold',
  },
});