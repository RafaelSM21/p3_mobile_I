import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#4285F4',
  green: '#4CAF50',
  blue: '#3F51B5',
  lightBlue: '#03A9F4',
  pink: '#E91E63',
  white: '#FFFFFF',
  background: '#F5F5F5',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
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
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    marginTop: 24,
  },
  infoButtonText: {
    color: colors.white,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});