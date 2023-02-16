import {HttpClient} from "../HttpClient";
import {ShopEntity} from "../entities/ShopEntity";

export class ShopModule {
    private httpClient: HttpClient

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient
    }

    public async find() {
        return await this.httpClient.doRequest<ShopEntity>('/')
    }
}
