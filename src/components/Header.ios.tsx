import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Switch } from 'react-native';

import { dark, light } from '../themes';

interface HeaderProps {
  isDarkTheme: boolean;
  handleTheme: () => void;
}

export function Header({ isDarkTheme, handleTheme }: HeaderProps) {
  return (
    <SafeAreaView style={[
      styles.container,
      { backgroundColor: isDarkTheme ?
        dark.headerBackgroundColor : 
        light.headerBackgroundColor 
      }
    ]}>
      <View style={[
        styles.header,
        {
          backgroundColor: isDarkTheme ?
            dark.headerBackgroundColor :
            light.headerBackgroundColor
        }
      ]}>
        <View style={styles.logoContainer}>
          <Text style={[
            styles.headerText,
            {
              color: isDarkTheme ?
                dark.headerText :
                light.headerText
            }
          ]}>to.</Text>
          <Text style={[
            styles.headerText,
            { 
              color: isDarkTheme ?
                dark.headerText :
                light.headerText,
              fontFamily: 'Poppins-SemiBold' 
            }
          ]}>do</Text>
        </View>
        
        <Switch 
          value={isDarkTheme}
          onValueChange={handleTheme}
          trackColor={{ false: dark.headerText, true: dark.addButtonColor }}
          ios_backgroundColor={dark.headerText}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {},
  header: {
    paddingHorizontal: 36,
    paddingBottom: 44,
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
    fontFamily: 'Poppins-Regular',
  }
});
