import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import json from './Dictionary.json'


{/* Wait function for refreshing screen */}
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}


const Center = ({ reload }) => {
	{/* Random number from Dictionary */}
    let value = () => Math.floor(Math.random() * json.list.length)
	let index = value()
	
	{/* State for refreshing screen */}
	const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(10).then(() => setRefreshing(false));
    }, []);

    return (
        <View>
			
			{/* Text from Dictionary */}
          	<TouchableOpacity style={styles.wrapperFirst}>
                <Text style={styles.wrapperFirstText}>{json.list[index]['word']}{"\n\n"}</Text>
                <Text style={styles.wrapperFirstText}>{json.list[index]['translation']}</Text>
            </TouchableOpacity>

			{/* Refresh button */}
			<TouchableOpacity onPress={onRefresh} style={styles.wrapperSecond}>
                <Text style={styles.wrapperSecondText}>&#10140;</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
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
});

export default Center