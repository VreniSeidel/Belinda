import React, { useState, Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  
  const onPress = () => {
    console.log("Function")
  }

  return (

    <View style={styles.container}>    

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Belinda</Text>
        <TouchableOpacity onPress={onPress} style={styles.bob}>
          <Text style={styles.wrapperSecondText}>⚙️</Text>
      </TouchableOpacity>
      </View>      

      <TouchableOpacity onPress={onPress} style={styles.wrapperFirst}>
          <Text style={styles.wrapperFirstText}>Text{"\n\n"}</Text>
          <Text style={styles.wrapperFirstText}>Text</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={onPress} style={styles.wrapperSecond}>
          <Text style={styles.wrapperSecondText}>&#10140;</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  sectionTitle: {
    fontFamily: 'monospace',
    fontSize: 25,
    fontWeight: 'bold',
  },
  wrapperFirst: {
    width: 335,
    height: 500,
    backgroundColor: '#00FFFA',
    margin: 20,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 0.5,
    borderRadius: 15,
  },
  wrapperSecond: {
    width: 335,
    height: 100,
    backgroundColor: '#00FFFA',
    marginTop: 0,
    margin: 20,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 0.5,
    borderRadius: 15,
  },
  wrapperFirstText: {
    fontFamily: 'monospace',
    fontSize: 20,
    fontWeight: 'bold',
  },
  wrapperSecondText: {
    fontFamily: 'monospace',
    fontSize: 24,
    fontWeight: 'bold',
  },
  bob: {
    height: 50,
    paddingLeft: 145
  }
});
