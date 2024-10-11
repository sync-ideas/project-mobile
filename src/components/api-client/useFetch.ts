import { useState, useEffect } from 'react'

import { type ErrorState, type TypeUsefetch } from './types'

export function useFetch<Input, Output>(
	props: TypeUsefetch,
): [boolean, ErrorState, (body?: Input) => Promise<void>, Output | undefined] {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<ErrorState>({ error: false, message: '' })
	const [data, setData] = useState<Output | undefined>()

	const { clientAPI, query, instant } = props

	async function fetch(body?: Input) {
		try {
			setError({
				error: false,
				message: '',
			})
			setLoading(true)
			setData(undefined)
			const result = await clientAPI({ body, query })
			setData(result as Output)
		} catch (err) {
			setError({ error: true, message: String(err) })
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		if (instant) {
			fetch()
		}
	}, [instant])

	return [loading, error, fetch, data]
}
