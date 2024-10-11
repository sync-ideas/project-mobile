import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, ScrollView, RefreshControl } from 'react-native'

//import { useColorScheme } from '@/hooks/useColorScheme'

import { styles } from './styles'

export type TypeScreenProps = {
	children: React.ReactNode
	scroll?: boolean
	paddingHorizontal?: number
	paddingVertical?: number
	style?: object
	OnRefreshControl?: () => void
	refreshing?: boolean
}

type TypeLocalStyles = {
	paddingHorizontal?: number
	paddingVertical?: number
}

export function Screen(props: TypeScreenProps) {
	//const colorScheme = useColorScheme()

	const { children, scroll = true, style, OnRefreshControl, refreshing } = props

	const localStyles: TypeLocalStyles = {}

	return (
		<>
			{scroll ?
				<ScrollView
					style={[styles.container]}
					refreshControl={
						OnRefreshControl ?
							<RefreshControl
								refreshing={!!refreshing}
								onRefresh={OnRefreshControl}
							/>
						:	undefined
					}
				>
					<View style={[styles.containerSecondary, { ...style }]}>{children}</View>
				</ScrollView>
			:	<View style={[styles.container, localStyles]}>{props.children}</View>}
			{/*
				<StatusBar style={colorScheme === 'dark' ? 'dark' : 'dark'} />
			*/}
		</>
	)
}
