import React from 'react'
import { Picker as PickerComponent } from '@react-native-picker/picker'

type TypePickerProps = {
	value: string
	onChange: (v: string) => void
	mode?: 'dialog' | 'dropdown'
	options?: {
		label: string
		value: string
	}[]
	style?: object
}

export function Picker({ value, mode = 'dropdown', options, onChange }: TypePickerProps) {
	return (
		<PickerComponent
			selectedValue={value}
			onValueChange={(itemValue: string) => onChange(itemValue)}
			mode={mode}
			style={{
				color: '#1E232C',
			}}
			prompt="Seleccione un valor"
		>
			{options?.map(opt => (
				<PickerComponent.Item
					label={opt.label}
					value={opt.value}
					key={opt.value}
				/>
			))}
		</PickerComponent>
	)
}
