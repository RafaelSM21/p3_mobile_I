import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { fetchHealthData } from '../services/healthService';
import { styles, colors } from '../styles/global';
import IndicatorCard from '../components/IndicatorCard';
import { HealthData } from '../types/healthTypes';

const DashboardScreen: React.FC = () => {
  const [healthData, setHealthData] = useState<HealthData | null>(null);

  useEffect(() => {
    const loadData = () => {
      setHealthData(fetchHealthData());
    };

    loadData();
    const interval = setInterval(loadData, 15000);
    return () => clearInterval(interval);
  }, []);

  if (!healthData) return null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Minha Saúde Hoje</Text>

      <IndicatorCard
        label="Passos"
        value={healthData.steps}
        unit=""
        iconName="walk"
        color={colors.green}
      />
      <IndicatorCard
        label="Sono"
        value={healthData.sleep}
        unit="h"
        iconName="sleep"
        color={colors.blue}
      />
      <IndicatorCard
        label="Hidratação"
        value={healthData.hydration}
        unit="L"
        iconName="cup-water"
        color={colors.lightBlue}
      />
      <IndicatorCard
        label="Frequência Cardíaca"
        value={healthData.heartRate}
        unit="bpm"
        iconName="heart-pulse"
        color={colors.pink}
      />

      <TouchableOpacity
        style={styles.infoButton}
        onPress={() => Linking.openURL('https://www.tuasaude.com/')}
      >
        <MaterialCommunityIcons name="information-outline" size={20} color={colors.white} />
        <Text style={styles.infoButtonText}>Ver mais informações</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DashboardScreen;