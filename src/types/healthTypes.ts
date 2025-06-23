export interface HealthData {
  steps: number;
  sleep: number;
  hydration: number;
  heartRate: number;
}

export interface IndicatorCardProps {
  label: string;
  value: number;
  unit: string;
  iconName: string;
  color: string;
}