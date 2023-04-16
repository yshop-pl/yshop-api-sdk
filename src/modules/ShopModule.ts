import {HttpClient} from "../HttpClient";
import {ShopEntity} from "../entities/ShopEntity";
import {ServerEntity} from "../entities/ServerEntity";
import {LastBuyerEntity} from "../entities/LastBuyerEntity";
import {DiscountCodeEntity} from "../entities/DiscountCodeEntity";
import {WidgetEntity} from "../entities/WidgetEntity";

export class ShopModule {
    private httpClient: HttpClient

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient
    }

    public async find() {
        return await this.httpClient.doRequest<ShopEntity>('/')
    }
    public async findServers(): Promise<ServerEntity[]> {
        return await this.httpClient.doRequest<ServerEntity[]>('/servers')
    }
    public async getLastBuyers(serverId: number): Promise<LastBuyerEntity[]> {
        return await this.httpClient.doRequest<LastBuyerEntity[]>(`/servers/${serverId}/last_buyers`)
    }
    public async useVoucher(code: string, nickname: string) {
        return await this.httpClient.doRequest('/vouchers/use', 'POST', {
            code: code,
            nickname: nickname
        })
    }
    public async getDiscountCode(code: string, serverId?: number, productId?: number): Promise<DiscountCodeEntity> {
        return await this.httpClient.doRequest<DiscountCodeEntity>(`/discount-codes/${code}?server=${serverId}&product=${productId}`)
    }
    public async getWidgets() {
        const widgets = await this.httpClient.doRequest<WidgetEntity[]>('/widgets')
        widgets.forEach(widget => widget.config = JSON.parse(widget.config))
        return widgets;
    }
}
