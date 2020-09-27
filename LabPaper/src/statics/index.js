import { Platform } from 'react-native'

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical'
const WEBDAV_URL = 'http://192.168.1.234:5005'
const SOCKET_IO_URL = ''

export
{
	MORE_ICON,
	SOCKET_IO_URL,
	WEBDAV_URL
}