import React, { useState, useEffect }  from 'react'
import {
	Image,
	Platform,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native'
import {
	Appbar,
	Button,
	DataTable,
	Dialog,
	IconButton,
	Paragraph,
	Text
} from 'react-native-paper'
// import { Camera } from 'expo-camera'
import * as FileSystem from 'expo-file-system'
import io from 'socket.io-client'

import { MORE_ICON, WEBDAV_URL, SOCKET_IO_URL } from '../statics'

const socket = io(SOCKET_IO_URL)

const ProjectManagementScreen = ({ navigation }) => {

	const [projects, setProjects] = useState([])
	const [currentRow, setCurrentRow] = useState(null)

	const [hasPermission, setHasPermission] = useState(null)
	// const [type, setType] = useState(Camera.Constants.Type.back)
	let camera = null

	const [visible, setVisible] = React.useState(false)



	useEffect(() => {
		// (async () => {
		// 	const { status } = await Camera.requestPermissionsAsync()
		// 	setHasPermission(status === 'granted')
		// })()

		socket.emit('/db/projects')
		socket.on('/db/projects', rows => setProjects(rows))

	}, []) //only re-run the effect if new data comes in

	// * * * * *
	const showDialog = () => setVisible(true)
	const hideDialog = () => setVisible(false)

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

	const rowOnPress = obj => {
		setCurrentRow(obj)
		showDialog()
		//alert(id)
		// socket.emit('/dav/put/file', {project_id:id})
	}

	const takePicture = async () => {
		let photo = null
		let photo_base64 = null
		photo = await camera.takePictureAsync()
		photo_base64 = await FileSystem.readAsStringAsync(photo.uri, { encoding: FileSystem.EncodingType.Base64 })
		socket.emit('/dav/put/image', photo_base64)
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
								<DataTable.Row
									key={i}
									onPress={ ()=>rowOnPress({id:v.id,project_name:v.project_name}) }
								>
									<DataTable.Cell style={{flex:5}}><Text>{v.project_name}</Text></DataTable.Cell>
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
			
    		<Dialog visible={visible} onDismiss={hideDialog}>
				<Dialog.Title>
					<View>
						<Text>TAKE PHOTO</Text>
						<Text style={{ color:'rgb(98, 0, 238)' }}>{ currentRow?currentRow.project_name:'Untitled' }</Text>
					</View>
				</Dialog.Title>
				<Dialog.Content style={{ width:'100%', height:300, paddingBottom:0, paddingLeft:0, paddingRight:0 }}>
					<Text>Camera come here!</Text>
				</Dialog.Content>
				<Dialog.Actions>
					<Button onPress={hideDialog}>Done</Button>
				</Dialog.Actions>
    		</Dialog>
        	
		</View>
	)
}

// const styles = StyleSheet.create({
// 	project_status: {
// 		color: 
// 	}
// })

/*
<Camera style={{ flex: 1, justifyContent:'flex-end' }} type={type} ref={ref=>{ camera=ref }} >
						<TouchableOpacity style={{ alignSelf: 'center' }}>
							<IconButton icon="camera" size={36} color={'whitesmoke'} onPress={ ()=>takePicture() }/>
						</TouchableOpacity>
					</Camera>
*/

export default ProjectManagementScreen