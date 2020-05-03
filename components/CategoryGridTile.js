import React from 'react';
import {
	TouchableOpacity,
	View,
	Text,
	StyleSheet,
	Platform,
	TouchableNativeFeedback,
	ImageBackground
} from 'react-native';

const CategoryGridTile = props => {
	let TouchableCmp = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version >= 21) {
		TouchableCmp = TouchableNativeFeedback;
	}
	return (
		<View style={styles.gridItem}>
			<TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
				<View
				style={styles.container}
				>
					<ImageBackground
						source={{ uri: props.color }}
						style={styles.bgImage}
					>
						<Text style={styles.title} numberOfLines={2}>
							{props.title}
						</Text>

					</ImageBackground>
				</View>
			</TouchableCmp>
		</View>
	);
};

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
		borderRadius: 10,
		overflow: Platform.OS === 'android' && Platform.version >= 21 ? 'hidden' : 'visible',
		elevation: 5,
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		textAlign: 'right',
		backgroundColor: 'rgba(250, 250, 250, 0.7)',
	},
	bgImage: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
		flex: 1,
		borderRadius: 10,
		overflow: 'hidden'
	},
	container:{
		flex:1,
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		elevation:5		
	}
});

export default CategoryGridTile;