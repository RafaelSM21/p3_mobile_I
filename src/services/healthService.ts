import { HealthData } from '../types/healthTypes';

export const fetchHealthData = (): HealthData => {
  return {
    steps: Math.floor(Math.random() * 10000),
    sleep: parseFloat((Math.random() * 4 + 4).toFixed(1)),
    hydration: parseFloat((Math.random() * 2 + 1).toFixed(1)),
    heartRate: Math.floor(60 + Math.random() * 40),
  };
};