import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';


const Title = () => {

    const infoBox = () =>
    Alert.alert(
        "ℹ️ Info",
        "Language learning app, made with ❤️, without ads and tracking. GitHub: vreniseidel492",
        [
            { 
                text: "OK",
            }
        ]
    );


    return (
      	<View style={ styles.titleWrapper }>

            {/* Name of Title */}
        	<Text style={ styles.titleText }>Belinda</Text>

            {/* Info box */}
        	<TouchableOpacity onPress={ infoBox } style={ styles.spaceBetween }>
          		<Text style={ styles.secondTitleText }>&#x2139;</Text>
        	</TouchableOpacity>

      	</View>
    );
}

const styles = StyleSheet.create({
    titleWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
        flexDirection: 'row',
    },
    titleText: {
        fontFamily: 'monospace',
        fontSize: 26,
        fontWeight: 'bold',
    },
    secondTitleText: {
        fontFamily: 'monospace',
        fontSize: 24,
        fontWeight: 'bold',
    },
    spaceBetween: {
        height: 50,
        paddingLeft: 165
    }
});

export default Title