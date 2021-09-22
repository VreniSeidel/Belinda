import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import Title from './Title';
import Center from './Center';


export default function App() {

  	return (

    	<View style={styles.container}>    

			{/* Title component*/}
      		<Title />

			{/* Center component*/}
      		<Center />

    	</View>
  	);
}

const styles = StyleSheet.create({
  	container: {
    	flex: 1,
    	backgroundColor: '#00FFFF',
  	},
});