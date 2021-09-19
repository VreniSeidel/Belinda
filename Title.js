import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Title = () => {

    return (

      	<View style={styles.tasksWrapper}>

            {/* Name of Title */}
        	<Text style={styles.sectionTitle}>Belinda</Text>

            {/* Info box */}
        	<TouchableOpacity style={styles.space}>
          		<Text style={styles.secondTitleText}>&#x2139;</Text>
        	</TouchableOpacity>

      	</View>

    );
}

const styles = StyleSheet.create({
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
    secondTitleText: {
        fontFamily: 'monospace',
        fontSize: 24,
        fontWeight: 'bold',
    },
    space: {
        height: 50,
        paddingLeft: 165
    }
});

export default Title