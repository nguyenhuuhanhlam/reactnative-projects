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
import { Camera } from 'expo-camera'
import * as FileSystem from 'expo-file-system'
import io from 'socket.io-client'

import { MORE_ICON, WEBDAV_URL, SOCKET_IO_URL } from '../statics'

const socket = io(SOCKET_IO_URL)

const ProjectAssetScreen = ({ navigation }) => {

}

export default ProjectAssetScreen