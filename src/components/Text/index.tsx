import { Text as TextComponent, type TextStyle } from 'react-native'

type TypeText = {
	children: React.ReactNode
	variant?:
		| 'h1'
		| 'h2'
		| 'h3'
		| 'text'
		| 'small'
		| 'underline'
		| 'label'
		| 'error'
		| 'price'
		| 'title'
	style?: TextStyle
	center?: boolean
	mt?: number
	mb?: number
	right?: boolean
	onPress?: () => void
}

export function Text({
	children,
	variant = 'text',
	center,
	mt,
	mb,
	style,
	right,
	onPress,
}: TypeText) {
	const localStyle: TextStyle = {
		color: '#222',
		fontFamily: 'Urbanist-Regular',
	}

	if (variant === 'text') {
		localStyle.fontSize = 16
	}

	if (variant === 'h1') {
		localStyle.fontSize = 22
		localStyle.fontFamily = 'Urbanist-SemiBold'
	}

	if (variant === 'h2') {
		localStyle.fontSize = 20
		localStyle.fontFamily = 'Urbanist-SemiBold'
	}

	if (variant === 'h3') {
		localStyle.fontSize = 16
		localStyle.fontFamily = 'Urbanist-SemiBold'
		localStyle.color = '#ccc'
	}

	if (variant === 'error') {
		localStyle.fontSize = 14
		localStyle.fontFamily = 'Urbanist-SemiBold'
		localStyle.color = '#cc0000'
	}

	if (variant === 'price') {
		localStyle.color = '#3251A0'
		localStyle.fontFamily = 'Urbanist-SemiBold'
		localStyle.fontSize = 24
		localStyle.fontWeight = 800
	}
	if (variant === 'label') {
		localStyle.fontSize = 18
		localStyle.fontFamily = 'Urbanist-SemiBold'
		localStyle.color = '#f58931'
		localStyle.marginLeft = 4
	}

	if (variant === 'title') {
		localStyle.fontSize = 18
		localStyle.fontFamily = 'Urbanist-SemiBold'
		localStyle.color = '#1E232C'
		localStyle.fontWeight = 800
		localStyle.marginLeft = 4
	}

	if (center) {
		localStyle.textAlign = 'center'
	}

	if (right) {
		localStyle.textAlign = 'right'
	}

	if (mt) {
		localStyle.marginTop = mt
	}

	if (mb) {
		localStyle.marginBottom = mb
	}

	return (
		<TextComponent
			onPress={onPress}
			style={[localStyle, style]}
		>
			{children}
		</TextComponent>
	)
}
