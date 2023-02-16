import { YShopSdk} from "./src";

// @ts-ignore
(async() => {
    try {
        const sdk = new YShopSdk(4)
        const shop = await sdk.shopModule.find()
        console.log(shop)
    }catch (error){
        console.log(error)
    }
})()
