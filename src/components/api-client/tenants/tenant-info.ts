import { request } from '../request'
import { type HttpError, type TypeParamAPIClient } from '../types'

export type TypeTenantInformationInput = {
	gender: string
	age: string
	school: string
	job: string
	marriedStatus: string
	live: string
	languages: string[]
	budgetRange: string
	pets: string
	aboutYou: string
	interests: string[]
	sports: string[]
	pastAccommodations: boolean
}

export type TypeTenantInformationResponse = {
	ok: boolean
	status: number
}

export const tenantInfoUpdate = async (
	props: TypeParamAPIClient,
): Promise<TypeTenantInformationResponse> => {
	try {
		const tenantInfo = props.body as TypeTenantInformationInput
		console.info('Tenant data - tenantInfoUpdate: ', tenantInfo)
		const response: TypeTenantInformationResponse = await request({
			url: '/api/v1/tenants',
			method: 'PATCH',
			body: tenantInfo,
		})
		console.info('response - tenantInfoUpdate: ', response)
		if (!response) {
			throw new Error('Invalid response')
		}
		return {
			ok: response.ok,
			status: response.status,
		}
	} catch (err) {
		const error = err as HttpError
		console.info(`Error in tenantInfoUpdate ${error.status} : ${error.message}`)
		throw error
	}
}
