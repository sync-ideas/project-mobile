import { request } from '../request'
import { type HttpError, type TypeParamAPIClient } from '../types'

export type TypeVerifyCodeInput = {
	email: string
	code: string
}

export type TypeRole = 'tenant' | 'landlord'

export type TypeVerifyCodeResponse = {
	text(): string
	userId: string
	email: string
	roles: TypeRole[]
	accessToken: string
	refreshToken: string
}

export const verifyCode = async (
	props: TypeParamAPIClient,
): Promise<TypeVerifyCodeResponse> => {
	console.info('verifyCode called!!!')
	try {
		const { email, code } = props.body as TypeVerifyCodeInput
		console.info('email - verifyCode: ', code)
		const response: TypeVerifyCodeResponse = await request({
			url: '/api/v1/auth/otp/verify-code',
			method: 'POST',
			body: {
				code,
				email,
			},
		})
		console.info('response - verifyCode: ', response)
		if (!response) {
			throw new Error('Invalid response')
		}
		const responseText = await response.text()
		console.log('Texto bruto de la respuesta:', responseText)
		const responseData = JSON.parse(responseText)
		return responseData
	} catch (err) {
		const error = err as HttpError
		console.info(`Auth verifyCode error ${error.status} : ${error.message}`)
		throw error
	}
}
