# Yshop api sdk

## Contents
- [Initialize sdk](#initialize-sdk)
- [Installation via npm](#installation-via-npm)
- [Shop Module](#shop-module)
	- [Get info about current shop](#get-info-about-current-shop)
	- [List all servers](#list-all-servers)
	- [Get last buyers from server](#get-last-buyers-from-server)
	- [Use Voucher](#use-voucher)
	- [Get discount code](#get-discount-code)
	- [Get widgets](#get-widgets)
- [Products Module](#products-module)
	- [Get every product in shop](#get-every-product-in-shop)
	- [Get only one product in shop](#get-only-one-product-in-shop)
- [Payments Module](#payments-module)
	- [Initialize transaction](#initialize-transaction)
	- [Get transaction](#get-transaction)

### Installation via npm
```bash
npm i yshop-api-sdk
```
### Initialize sdk
```ts
// ApiVersion is optional and defaults to v4
const sdk = new YShopSdk(shopId: number, apiVersion?: string);
```

## Shop Module

### Get info about current shop
```ts
await sdk.shopModule.find();
// returns

ShopEntity {
  id: number
  name: string
  slug: string
  imageUrl: string
  isActive: boolean
  domain: string
  domainIsActive: boolean
  isPremium: boolean
  created_at: string
  updated_at: string
  settings: Settings {
	  id: number
  }
}
```

### List all servers
```ts
await sdk.shopModule.findServers();

// returns
ServerEntity[] {
  id: number
  name: string
  imageUrl: string
  isOnline: boolean
  online: number
  maxOnline: number
  game: string
  created_at: string
  updated_at: string
}
```

### Get last buyers from server
```ts
await sdk.shopModule.getLastBuyeres(serverId: number);

// returns
LastBuyerEntity {
  nickname: string
  count: number
}
```

### Use Voucher
```ts
await sdk.shopModule.useVoucher(code: string, nickname: string);
```

### Get discount code
```ts
await sdk.shopModule.getDiscountCode(code: string, serverId?: number, productId?: number);

// returns
DiscountCodeEntity {
  id: number
  discount: number
  code: string
  product: Product {
    id: number
  }
  server: Server {
    id: number
  }
}
```

### Get widgets
```ts
await sdk.shopModule.getWidgets();

// returns
WidgetEntity[] {
  id: number
  type: string
  config: any
  created_at: string
  updated_at: string
  name: string
}
```

## Products Module

### Get every product in shop
```ts
await sdk.productsModule.find();

// returns
ProductEntity[] {
  id: number
  name: string
  imageUrl: string
  description: string
  commands: string
  purchases: number
  displayPrice: string
  requireOnline: boolean
  order: number
  created_at: string
  updated_at: string
  slider: Slider {
    id: number
    enable: boolean
    min: number
    max: number
    name: string
  }
  server: Server {
    id: number
    name: string
  }
}
```

### Get only one product in shop
```ts
await sdk.productsModule.findById(productId: number);

// returns
ProductEntity {
  id: number
  name: string
  imageUrl: string
  description: string
  commands: string
  purchases: number
  displayPrice: string
  requireOnline: boolean
  order: number
  created_at: string
  updated_at: string
  slider: Slider {
    id: number
    enable: boolean
    min: number
    max: number
    name: string
  }
  server: Server {
    id: number
    name: string
  }
}
```

## Payments Module

### Initialize transaction
```ts
Transaction {
  productId: number
  nickname: string
  email: string
  method: string
  count: number
  redirectUrl?: string
  discountCodeId?: number
}

await sdk.paymentsModule.init(transaction: Transaction);

// returns
PaymentEntity {
  url: string
  provider_id: string
  transaction_id: string
}
```

### Get transaction
```ts
await sdk.paymentsModule.find(transactionId: string);

// returns
TransactionEntity {
  id: string
  status: string
  nickname: string
  email: string
  count: number
  control: string
  gateway: string
  price: number
  finalPrice: number
}
```
