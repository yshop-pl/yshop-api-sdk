export class DiscountCodeEntity {
  id: number
  discount: number
  code: string
  product: Product
  server: Server
}

class Product {
  id: number
}
class Server {
  id: number
}
