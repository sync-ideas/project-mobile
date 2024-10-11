import { request } from '../request'
import { type HttpError, type TypeParamAPIClient } from '../types'

export type TypePropertyInformationInput = {
	flat: boolean
	house: boolean
	entireHome: boolean
	room: boolean
	sharedRoom: boolean
	countryRegion: string
	flatNo: string
	areaVillage: string
	street: string
	landmark: string
	cityTown: string
	postalCode: string
	state: string
	typeOfHouse: string
	furnishing: string
	parking: string
	preferredTenant: string
	titleOfListing: string
	description: string
	price: number
	maintenance: number
	miscCharges: number
	currency: string
	paymentConcurrency: string
	ownerName: string
	contactNumber: string
	images: string[]
	coordinates: [number, number]
}

export type TypePropertyInformationResponse = {
	ok: boolean
	status: number
}

export const propertyCreate = async (
	props: TypeParamAPIClient,
): Promise<TypePropertyInformationResponse> => {
	try {
		const propertyData = props.body as TypePropertyInformationInput
		console.info('Property data - PropertyCreate: ', propertyData)
		const response: TypePropertyInformationResponse = await request({
			url: '/api/v1/properties',
			method: 'POST',
			body: propertyData,
		})
		console.info('response - PropertyCreate: ', response)
		if (!response) {
			throw new Error('Invalid response')
		}
		return {
			ok: response.ok,
			status: response.status,
		}
	} catch (err) {
		const error = err as HttpError
		console.info(`Error in PropertyCreate ${error.status} : ${error.message}`)
		throw error
	}
}
