import {ShopModule} from "./modules/ShopModule";
import {HttpClient} from "./HttpClient";

export class YShopSdk {
    public shopModule: ShopModule

    constructor(shopId: number, apiVersion: string = 'v4') {
        const client = new HttpClient(`https://api-${apiVersion}.yshop.pl/shops/${shopId}`)
        this.shopModule = new ShopModule(client);
    }
}
