import axios, {AxiosBasicCredentials, AxiosRequestConfig, AxiosResponse} from "axios";
import {YShopSdk} from "./index";

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
        }catch (error){
            // @ts-ignore
            return error.response
        }
    }
}
