import React from 'react'
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	View
} from 'react-native'
import {
	Appbar,
	Button,
	Card,
	Paragraph,
	Text
} from 'react-native-paper'

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical'

const HomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1 }}>
			<Appbar.Header>
				<Appbar.Content title="Home" subtitle={'MienTay Ecosystem'} />
				<Appbar.Action icon={MORE_ICON} onPress={() => {}} />
			</Appbar.Header>

			<ScrollView>
				<Card style={styles.card}>
					<Card.Cover source={require('../../assets/undraw_Scrum_board_re_wk7v.png')} style={{margin:20}} />
					<Card.Title title="Projects Management" />
					<Card.Content>
						<Paragraph>
							Description here!
						</Paragraph>
					</Card.Content>
					<Card.Actions>
						<Button onPress={()=>navigation.navigate('project_management')}>GO</Button>
					</Card.Actions>
				</Card>
				<Card style={styles.card}>
					<Card.Cover source={require('../../assets/undraw_Data_points_re_vkpq.png')} style={{margin:20}} />
					<Card.Title title="Projects Assets" />
					<Card.Content>
						<Paragraph>
							Description here!
						</Paragraph>
					</Card.Content>
					<Card.Actions>
						<Button onPress={()=>navigation.navigate('project_management')}>GO</Button>
					</Card.Actions>
				</Card>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		margin: 8
	}
})

export default HomeScreen