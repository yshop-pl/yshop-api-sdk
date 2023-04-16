export class ProductEntity {
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
    slider: Slider
    server: Server
}

class Slider {
    id: number
    enable: boolean
    min: number
    max: number
    name: string
}

class Server {
    id: number
    name: string
}
