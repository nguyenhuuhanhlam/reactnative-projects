import React, { useState, useEffect }  from 'react'
import { Image, Platform , StyleSheet, View } from 'react-native'
import { Appbar, Button, Text } from 'react-native-paper'
import { DataTable } from 'react-native-paper'
import io from 'socket.io-client'
// import { Connection } from 'webdav-client'

import { MORE_ICON, WEBDAV_URL } from '../statics'

const socket = io('http://192.168.1.2:3000')

const ProjectManagementScreen = ({ navigation }) => {

	const [projects, setProjects] = useState([])
	// const [connection, setConnection] = useState(null)
	// const connection = new Connection(WEBDAV_URL,{username:'nguyenhuuhanhlam',password:'@un1ock@'})

	useEffect(() => {
		// setConnection(new Connection(WEBDAV_URL))
		// connection = new Connection(WEBDAV_URL,{username:'nguyenhuuhanhlam',password:'@un1ock@'})
		
		socket.emit('/db/projects')
		socket.on('/db/projects', rows => setProjects(rows))
	}, []) //only re-run the effect if new data comes in

	//
	const projectStatusColor = val => {
		switch(val)
		{
			case 5:
				return 'azure'
			break

			case 3:
				return 'orange'
			break 

			default:
				return 'limegreen'
		}
	}

	const rowOnPress = id => {
		// connection.get('/mientay_public', (err,content) => {
		// 	console.log(content)
		// })
		socket.emit('/dav', {project_id:100})
	}

	return (
		<View style={{ flex: 1 }}>
			<Appbar.Header>
				<Appbar.Content title="Projects Management" subtitle={'MienTay Ecosystem'} />
				<Appbar.Action icon={MORE_ICON} onPress={() => {}} />
			</Appbar.Header>
			<View>
				<DataTable>
					<DataTable.Header>
						<DataTable.Title style={{flex:5}}>Project</DataTable.Title>
						<DataTable.Title sortDirection='descending'>Status</DataTable.Title>
					</DataTable.Header>
					{
						projects!=null
						?	projects.map((v,i) => 
								<DataTable.Row key={i} onPress={()=>rowOnPress(v.id)}>
									<DataTable.Cell style={{flex:5}}>{v.project_name}</DataTable.Cell>
									<DataTable.Cell>
										<Button icon="circle" color={ projectStatusColor(v.status) } />
									</DataTable.Cell>
								</DataTable.Row>
							)
						: <DataTable.Row><DataTable.Cell><Text>Loading...</Text></DataTable.Cell></DataTable.Row>
					}
					{
						projects!=null
						? 	<DataTable.Pagination
								page={1}
								numberOfPages={3}
								onPageChange={page => {
									console.log(page)
								}}
								label="m-n of z"
							/>
						: null
					}
				</DataTable>
			</View>
		</View>
	)
}

// const styles = StyleSheet.create({
// 	project_status: {
// 		color: 
// 	}
// })

export default ProjectManagementScreen