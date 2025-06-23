import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
  label: string;
  value: number;
  unit: string;
  iconName: string;
  color: string;
}

export default function IndicatorCard({ label, value, unit, iconName, color }: Props) {
  return (
    <View style={[styles.card, { borderLeftWidth: 4, borderLeftColor: color }]}>
      <View style={styles.header}>
        <MaterialCommunityIcons name={iconName} size={24} color={color} />
        <Text style={styles.label}>{label}</Text>
      </View>
      <Text style={styles.value}>
        {value}
        {unit && <Text style={styles.unit}> {unit}</Text>}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginLeft: 8,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  unit: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#666',
  },
});