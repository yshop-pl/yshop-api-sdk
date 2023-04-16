import {HttpClient} from "../HttpClient";
import {ShopEntity} from "../entities/ShopEntity";
import {ProductEntity} from "../entities/ProductEntity";

export class ProductsModule {
    private httpClient: HttpClient

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient
    }

    public async find(): Promise<ProductEntity[]>{
        return await this.httpClient.doRequest<ProductEntity[]>('/products')
    }
    public async findById(productId: number) {
        return await this.httpClient.doRequest(`/products/${productId}`)
    }
}
