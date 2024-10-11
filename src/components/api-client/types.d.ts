export interface HttpError extends Error {
	status: number
	message: string
}

export interface ErrorState {
	error: boolean
	message: string
}

export type TypeParamAPIClient<BodyRequest = unknown, QueryParams = unknown> = {
	body?: BodyRequest
	query?: QueryParams
}

export type TypeUsefetch = {
	clientAPI: (props: TypeParamAPIClient) => Promise<object>
	body?: object
	query?: object
	instant?: boolean
}
