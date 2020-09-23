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
					<Card.Title title="Abandoned Ship" />
					<Card.Content>
						<Paragraph>
							The Abandoned Ship is a wrecked ship located on Route 108 in Hoenn,
							originally being a ship named the S.S. Cactus. The second part of
							the ship can only be accessed by using Dive and contains the
							Scanner.
						</Paragraph>
					</Card.Content>
				</Card>

				<Card style={styles.card}>
					<Card.Cover source={require('../../assets/undraw_Scrum_board_re_wk7v.png')} />
					<Card.Title title="Project Listing" />
					<Card.Content>
						<Paragraph>
							Description here!
						</Paragraph>
					</Card.Content>
					<Card.Actions>
						<Button>GO</Button>
					</Card.Actions>
				</Card>

				<Card style={styles.card}>
					<Card.Title title="Long Pressable City" />
					<Card.Content>
						<Paragraph>
							This is a long press only city. If you long press me, I will alert.
						</Paragraph>
					</Card.Content>
				</Card>

				<Card style={styles.card}>
					<Card.Title title="Abandoned Ship" />
					<Card.Content>
						<Paragraph>
							The Abandoned Ship is a wrecked ship located on Route 108 in Hoenn,
							originally being a ship named the S.S. Cactus. The second part of
							the ship can only be accessed by using Dive and contains the
							Scanner.
						</Paragraph>
					</Card.Content>
				</Card>

				<Card style={styles.card}>
					<Card.Title title="Berries that are trimmed at the end" />
					<Card.Content>
						<Paragraph>
							Dotted around the Hoenn region, you will find loamy soil, many of
							which are housing berries. Once you have picked the berries, then
							you have the ability to use that loamy soil to grow your own
							berries. These can be any berry and will require attention to get
							the best crop.
						</Paragraph>
					</Card.Content>
				</Card>

				<Card>
					<Card.Title title="Long Pressable City" />
					<Card.Content>
						<Paragraph>
							This is a long press only city. If you long press me, I will alert.
						</Paragraph>
					</Card.Content>
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