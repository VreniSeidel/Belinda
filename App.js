import React from 'react';
import { StyleSheet, View } from 'react-native';

import Title from './Title';
import Center from './Center'

export default function App() {

  	return (

    	<View style={styles.container}>    

      		<Title />

      		<Center />


    	</View>
  	);
}

const styles = StyleSheet.create({
  	container: {
    	flex: 1,
    	backgroundColor: '#00FFFF',
  	}
});