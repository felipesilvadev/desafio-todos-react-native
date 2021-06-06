import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

import { dark, light } from '../themes';

type FlatListHeaderProps = Pick<MyTasksListProps, 'isDarkTheme'>;

function FlatListHeaderComponent({ isDarkTheme }: FlatListHeaderProps) {
  return (
    <View>
      <Text style={[
        styles.header,
        {
          color: isDarkTheme ?
            dark.titleColor :
            light.titleColor
        }
      ]}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  isDarkTheme: boolean;
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ isDarkTheme, tasks, onLongPress, onPress }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            style={item.done ? [
              styles.taskButtonDone,
              {
                backgroundColor: isDarkTheme ?
                  dark.taskButtonDoneBackgroundColor :
                  light.taskButtonDoneBackgroundColor,
              }
            ] : styles.taskButton}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
          >
            <View 
              testID={`marker-${index}`}
              style={item.done ? [
                  styles.taskMarkerDone,
                  {
                    backgroundColor: isDarkTheme ?
                      dark.taskMarkerDoneBackgroundColor :
                      light.taskMarkerDoneBackgroundColor,
                  }
                ] : [
                  styles.taskMarker,
                  {
                    borderColor: isDarkTheme ?
                      dark.taskMarkerBorderColor :
                      light.taskMarkerBorderColor
                  }
                ]} 
            />
            <Text 
              style={item.done ? [
                styles.taskTextDone,
                {
                  color: isDarkTheme ?
                    dark.taskTextDoneColor :
                    light.taskTextDoneColor,
                }
              ] : [
                styles.taskText,
                {
                  color: isDarkTheme ?
                    dark.taskTextColor :
                    light.taskTextColor,
                }
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent isDarkTheme={isDarkTheme} />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 10
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    marginRight: 10
  },
  taskText: {},
  taskTextDone: {
    textDecorationLine: 'line-through'
  }
})