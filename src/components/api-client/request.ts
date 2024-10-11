import { getData } from '@/src/helpers/StorageData'

const HOST = 'https://api.accommodategroup.com'

type RequestParams = {
	url: string
	host?: string
	domain?: string
	body?: object
	queryParams?: Record<string, string>
	headers?: Record<string, string>
	method?: string
}

export async function request<ResponseModel>({
	host = HOST,
	url = '/',
	body,
	queryParams,
	headers,
	method = 'GET',
}: RequestParams): Promise<ResponseModel> {
	const queryString = queryParams ? '?' + new URLSearchParams(queryParams).toString() : ''
	const fullUrl = `${host}${url}${queryString}`

	const jwt = await getData<{ jwt: string }>('jwt')
	console.info('jwt - request: ', jwt)

	const _headers: HeadersInit = {
		'Content-Type': 'application/json',
		...headers,
	}

	if (jwt) {
		_headers.authorization = `Bearer: ${jwt.jwt}`
	}

	console.info('fullUrl - request: ', fullUrl, _headers)
	console.info('body - request: ', body)
	const fetchOptions: RequestInit = {
		method,
		headers: { ..._headers },
		body: body ? JSON.stringify(body) : undefined,
	}

	const response = await fetch(fullUrl, fetchOptions)
	console.info('response - request: ', response.ok)

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}

	return response as ResponseModel
}
