import React from 'react'
import { Image, Platform , StyleSheet, View } from 'react-native'
import { Appbar, Button, Text } from 'react-native-paper'

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical'

const SplashScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1 }}>
			<Appbar.Header>
				<Appbar.Content title="Welcome" subtitle={'MienTay Ecosystem'} />
				<Appbar.Action icon={MORE_ICON} onPress={() => {}} />
			</Appbar.Header>
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Image source={require("../../assets/splash.png")} style={styles.logo} />
				<Button mode="contained" onPress={()=>navigation.navigate('home')} style={{margin:32}}>Next</Button>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	logo: {
		width: 256,
		height: 256,
	}
})

export default SplashScreen