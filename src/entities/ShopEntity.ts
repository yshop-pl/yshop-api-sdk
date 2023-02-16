 export class ShopEntity {
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
    settings: Settings
}

class Settings {
    id: number
}
