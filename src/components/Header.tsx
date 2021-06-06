import React from 'react';
import { View, Text, StatusBar, StyleSheet, Switch } from 'react-native';

interface HeaderProps {
  isDarkTheme: boolean;
  handleTheme: () => void;
}

export function Header({ isDarkTheme, handleTheme }: HeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>

      <Switch 
        value={isDarkTheme}
        onValueChange={handleTheme}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 36,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  logoContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  }
});
