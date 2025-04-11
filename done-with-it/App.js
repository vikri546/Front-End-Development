import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
  return (
    <ViewImageScreen />
  );
}