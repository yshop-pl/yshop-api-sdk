import { YShopSdk} from "./src";
import {TransactionBuilder} from "./src/dto/TransactionBuilder";

// @ts-ignore
(async() => {
    try {
        const sdk = new YShopSdk(1)
        // const shop = await sdk.shopModule.find()
        // console.log(shop)
        //const products = await sdk.productsModule.findById(91)
        //console.log(products)
        // const servers = await sdk.shopModule.getLastBuyers(10)
        // console.log(servers[0].count)
        // try {
        //     console.log(await sdk.shopModule.useVoucher("ee", "ee"))
        // } catch (e: any) {
        //     console.log(e.message)
        // }
        try {
            // const payment = await sdk.paymentsModule.init(TransactionBuilder
            //     .productId(91)
            //     .nickname("zqr12")
            //     .email("w@w.pl")
            //     .method('paybylink_transfer')
            //     .count(1)
            //     .build())
            const payment = await sdk.paymentsModule.find('c0dd678d-c262-4b5b-9b2b-fe9e15819a40')
            console.log(payment.price)
        } catch (e: any) {
            console.log(e.message)
        }
    }catch (error){
        console.log(error)
    }
})()
