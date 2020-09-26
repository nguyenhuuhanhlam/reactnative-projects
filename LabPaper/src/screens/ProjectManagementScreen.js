import React, {useState, useEffect}  from 'react'
import { Image, Platform , StyleSheet, View } from 'react-native'
import { Appbar, Button, Text } from 'react-native-paper'
import { DataTable } from 'react-native-paper'

import io from 'socket.io-client'

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical'

const ProjectManagementScreen = ({ navigation }) => {

	const [projects, setProjects] = useState([])

	useEffect(()=>{
		let socket = io('http://localhost:3000')
		socket.emit('/db/projects')
		socket.on('/db/projects', rows=>setProjects(rows))
	}, []) //only re-run the effect if new data comes in

	return (
		<View style={{ flex: 1 }}>
			<Appbar.Header>
				<Appbar.Content title="Projects Management" subtitle={'MienTay Ecosystem'} />
				<Appbar.Action icon={MORE_ICON} onPress={() => {}} />
			</Appbar.Header>
			<View>
				<DataTable>
					<DataTable.Header>
						<DataTable.Title>Project</DataTable.Title>
						<DataTable.Title>Status</DataTable.Title>
						<DataTable.Title>Act</DataTable.Title>
					</DataTable.Header>
					{
						projects!=null ? projects.map((v,i) => 
							<DataTable.Row key={i}>
								<DataTable.Cell>{v.project_name}</DataTable.Cell>
								<DataTable.Cell>-</DataTable.Cell>
								<DataTable.Cell>
									<Button icon="camera"/>
								</DataTable.Cell>
							</DataTable.Row>
						) : null
					}
				 	<DataTable.Pagination
						page={1}
						numberOfPages={3}
						onPageChange={page => {
						console.log(page);
						}}
						label="m-n of z"
					/>
				</DataTable>
			</View>
		</View>
	)
}

// const styles = StyleSheet.create({
// 	logo: {
// 		width: 256,
// 		height: 256,
// 	}
// })

export default ProjectManagementScreen