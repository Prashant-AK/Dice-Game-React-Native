import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native';
import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () => {
	const [uri1, setUri1] = useState(DiceFive);
	const [uri2, setUri2] = useState(DiceFive);

	const dice1Tap = () => {
		let randomNumber = Math.floor(Math.random() * 6) + 1;

		switch (randomNumber) {
			case 1:
				setUri1(DiceOne);
				break;
			case 2:
				setUri1(DiceTwo);
				break;
			case 3:
				setUri1(DiceThree);
				break;
			case 4:
				setUri1(DiceFour);
				break;
			case 5:
				setUri1(DiceFive);
				break;
			case 6:
				setUri1(DiceSix);
				break;
		}
	};
	const dice2Tap = () => {
		let randomNumber = Math.floor(Math.random() * 6) + 1;

		switch (randomNumber) {
			case 1:
				setUri2(DiceOne);
				break;
			case 2:
				setUri2(DiceTwo);
				break;
			case 3:
				setUri2(DiceThree);
				break;
			case 4:
				setUri2(DiceFour);
				break;
			case 5:
				setUri2(DiceFive);
				break;
			case 6:
				setUri2(DiceSix);
				break;
		}
	};
	const playButtonTap = () => {
		let randomNumber = Math.floor(Math.random() * 6) + 1;

		switch (randomNumber) {
			case 1:
				setUri1(DiceOne);
				setUri2(DiceOne);
				break;
			case 2:
				setUri1(DiceTwo);
				setUri2(DiceTwo);
				break;
			case 3:
				setUri1(DiceThree);
				setUri2(DiceThree);
				break;
			case 4:
				setUri1(DiceFour);
				setUri2(DiceFour);
				break;
			case 5:
				setUri1(DiceFive);
				setUri2(DiceFive);
				break;
			case 6:
				setUri1(DiceSix);
				setUri2(DiceSix);
				break;
		}
	};

	return (
		<>
			<View style={styles.Container}>
				<View
					style={{
						// borderWidth:2,borderColor:'white',
						flex: 1,
						flexDirection: 'row',
						justifyContent: 'center',
						alignContent: 'center',
						margin: 40,
						padding: 20,
					}}
				>
					<Text style={{  fontSize: 40, color: 'white' }}>Let's Play with Dice	 </Text>
				</View>

				<View style={{ flexDirection: 'row', flex: 2 }}>
					<TouchableOpacity onPress={dice1Tap}>
						<Image source={uri1} style={styles.image} />
					</TouchableOpacity>

					<TouchableOpacity onPress={dice2Tap}>
						<Image source={uri2} style={styles.image} />
					</TouchableOpacity>
				</View>

				<View >
					<Pressable onPress={playButtonTap}>
						<Text style={styles.gameplayButton}>Play Game</Text>
					</Pressable>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		// flexDirection:"row",
		backgroundColor: '#222831',
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		height: 150,
		width: 150,
	},
	gameplayButton: {
		color: '#fff',
		fontSize: 20,
		margin: 30,
		paddingHorizontal: 40,
		paddingVertical: 10,
		borderColor: '#30475E',
		borderWidth: 3,
		borderRadius: 20,
		backgroundColor: '#FFA500',
	},
});

export default App;
