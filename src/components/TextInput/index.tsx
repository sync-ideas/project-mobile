import { useState, useEffect } from 'react'

import { TextInput as NativeTextInput } from 'react-native'

import { styles } from './styles'

type TypeTextInputProps = {
	defaultValue?: string
	maxLength?: number
	multiline?: boolean
	numberOfLines?: number
	placeholder?: string
	autoFocus?: boolean
	inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'
	textAlign?: 'left' | 'center' | 'right'
}

export function TextInput(props: TypeTextInputProps) {
	const [value, setValue] = useState('')

	const {
		defaultValue,
		maxLength,
		multiline,
		numberOfLines,
		placeholder,
		autoFocus,
		inputMode,
		textAlign,
	} = props

	useEffect(() => {
		if (defaultValue) {
			setValue(defaultValue)
		}
	}, [defaultValue])

	return (
		<NativeTextInput
			value={value}
			maxLength={maxLength}
			multiline={multiline}
			numberOfLines={numberOfLines}
			placeholder={placeholder}
			autoFocus={autoFocus}
			inputMode={inputMode}
			textAlign={textAlign}
			onChangeText={val => setValue(val)}
			style={styles.input}
		/>
	)
}
