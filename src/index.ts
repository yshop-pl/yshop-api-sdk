import {ShopModule} from "./modules/ShopModule";
import {HttpClient} from "./HttpClient";
import {ProductsModule} from "./modules/ProductsModule";
import {PaymentsModule} from "./modules/PaymentsModule";

export class YShopSdk {
    public shopModule: ShopModule
    public productsModule: ProductsModule
    public paymentsModule: PaymentsModule

    constructor(shopId: number, apiVersion: string = 'v4') {
        const client = new HttpClient(`https://api-${apiVersion}.yshop.pl/shops/${shopId}`)
        this.shopModule = new ShopModule(client);
        this.productsModule = new ProductsModule(client);
        this.paymentsModule = new PaymentsModule(client)
    }
}
