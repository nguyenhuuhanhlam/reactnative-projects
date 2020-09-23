import 'react-native-gesture-handler' // make sure it's at the top and there's nothing else before it

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SplashScreen from './src/screens/SplashScreen'
import HomeScreen from './src/screens/HomeScreen'

const Stack = createStackNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="splash"
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="splash" component={SplashScreen} />
				<Stack.Screen name="home" component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App