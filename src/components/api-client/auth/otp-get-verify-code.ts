import { request } from '../request'
import { type HttpError, type TypeParamAPIClient } from '../types'

export type TypeGetVerifyCodeInput = {
	email: string
}

export type TypeGetVerifyCodeResponse = {
	ok: boolean
	status: number
}

export const getVerifyCode = async (
	props: TypeParamAPIClient,
): Promise<TypeGetVerifyCodeResponse> => {
	try {
		const { email } = props.body as TypeGetVerifyCodeInput
		console.info('email - getVerifyCode: ', email)
		const response: TypeGetVerifyCodeResponse = await request({
			url: '/api/v1/auth/otp/code',
			method: 'POST',
			body: { email },
		})
		console.info('response - getVerifyCode: ', response)
		if (!response) {
			throw new Error('Invalid response')
		}
		return {
			ok: response.ok,
			status: response.status,
		}
	} catch (err) {
		const error = err as HttpError
		console.info(`Auth getVerifyCode error ${error.status} : ${error.message}`)
		throw error
	}
}
