import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import dictionary from './Dictionary.json'

{/* Wait function for refreshing screen */}
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const Center = () => {

	{/* State for refreshing screen */}
	const [refreshing, setRefreshing] = React.useState(false);

	{/* Refresh */}
	const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(10).then(() => setRefreshing(false));
    }, []);

	{/* Random number from Dictionary */}
    const value = () => Math.floor(Math.random() * dictionary.list.length)
	const index = value()

    return (
        <View >

			<TouchableOpacity onPress={ onRefresh } style={ styles.wrapperCenter }>
                {/* Text from Dictionary */}
            	<Text style={ styles.wrapperTextFirst }>{dictionary.list[index]['word']}{"\n"}</Text>
				<Text style={ styles.wrapperTextSecond }>{dictionary.list[index]['transcript']}{"\n"}</Text>
				<Text style={ styles.wrapperTextThird }>{dictionary.list[index]['translation']}</Text>
				<Text style={ styles.buttonContent }>&#10140;</Text>
            </TouchableOpacity>
			
        </View>
    )
}

const styles = StyleSheet.create({
	wrapperCenter: {
    	width: 335,
    	height: 600,
    	margin: 20,
    	elevation: 10,
    	justifyContent: 'flex-start',
		backgroundColor: '#00FFFA',
    	alignItems: 'center',
    	borderColor: '#C0C0C0',
    	borderWidth: 0.1,
   		borderRadius: 10,
  	},
  	wrapperTextFirst: {
		marginTop: 140,
    	fontFamily: 'monospace',
    	fontSize: 20,
    	fontWeight: 'bold',
  	},
	wrapperTextSecond: {
    	fontFamily: 'monospace',
    	fontSize: 14,
    	fontWeight: 'bold',
  	},
	wrapperTextThird: {
    	fontFamily: 'monospace',
    	fontSize: 16,
    	fontWeight: 'bold',
  	},
	buttonContent: {
		fontSize: 30,
		marginTop: 170,
	},
});

export default Center