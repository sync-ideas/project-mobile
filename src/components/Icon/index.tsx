import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Ionicons from '@expo/vector-icons/Ionicons'
import Feather from '@expo/vector-icons/Feather'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

export type TypeIconProps = {
	family:
		| 'Ionicons'
		| 'AntDesign'
		| 'Entypo'
		| 'FontAwesome'
		| 'Feather'
		| 'FontAwesome6'
		| 'MaterialIcons'
		| 'MaterialCommunityIcons'
		| 'FontAwesome5'
	name: string
	size?: number
	color?: string
	onPress?: () => void
}

export function Icon(props: TypeIconProps) {
	const { family, name, size = 32, color = 'black', onPress } = props
	if (family === 'Ionicons') {
		return (
			<Ionicons
				name={name}
				size={size}
				color={color}
				onPress={onPress}
			/>
		)
	}

	if (family === 'AntDesign') {
		return (
			<AntDesign
				name={name}
				size={size}
				color={color}
			/>
		)
	}

	if (family === 'Entypo') {
		return (
			<Entypo
				name={name}
				size={size}
				color={color}
			/>
		)
	}

	if (family === 'FontAwesome') {
		return (
			<FontAwesome
				name={name}
				size={size}
				color={color}
			/>
		)
	}

	if (family === 'Feather') {
		return (
			<Feather
				name={name}
				size={size}
				color={color}
			/>
		)
	}

	if (family === 'FontAwesome6') {
		return (
			<FontAwesome6
				name={name}
				size={size}
				color={color}
			/>
		)
	}

	if (family === 'MaterialIcons') {
		return (
			<MaterialIcons
				name={name}
				size={size}
				color={color}
			/>
		)
	}

	if (family === 'FontAwesome5') {
		return (
			<FontAwesome5
				name={name}
				size={size}
				color={color}
			/>
		)
	}

	if (family === 'MaterialCommunityIcons') {
		return (
			<MaterialCommunityIcons
				name={name}
				size={size}
				color={color}
			/>
		)
	}
}
