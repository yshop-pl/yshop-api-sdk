import axios, {AxiosBasicCredentials, AxiosRequestConfig, AxiosResponse} from "axios";
import {YShopSdk} from "./index";
import {NotFoundException} from "./exceptions/NotFoundException";
import {UnexpectedException} from "./exceptions/UnexpectedException";
import {BadRequestException} from "./exceptions/BadRequestException";

export type HTTP_METHODS = "GET"|"POST"|"PUT"|"DELETE"

export class HttpClient {
    constructor(
        private baseUrl: string
    ) {}

    // @ts-ignore
    public async doRequest<T>(uri: string, method:HTTP_METHODS='GET', data?:any): Promise<T>{
        const requestConfiguration: AxiosRequestConfig = {
            method: method,
            url: `${this.baseUrl}${uri}`,
            headers: {
                'User-Agent': 'yshop-api-sdk/3.0'
            },
            data: data
        }

        try {
            const response = await axios(requestConfiguration)
            return response.data
        }catch (error: any){
            const errorData = error.response['data']
            switch (errorData['statusCode']) {
                case 404:
                    throw new NotFoundException(errorData['message'])
                case 400:
                    throw new BadRequestException(Array.isArray(errorData['message']) ? errorData['message'][0] : errorData['message'])
                default:
                    console.log(errorData)
                    throw new UnexpectedException()
            }
        }
    }
}
