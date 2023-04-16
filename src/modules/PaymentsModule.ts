import {HttpClient} from "../HttpClient";
import {ProductEntity} from "../entities/ProductEntity";
import {Transaction} from "../dto/TransactionBuilder";
import {PaymentEntity} from "../entities/PaymentEntity";
import {TransactionEntity} from "../entities/TransactionEntity";

export class PaymentsModule {
  private httpClient: HttpClient

  constructor(httpClient: HttpClient) {
	this.httpClient = httpClient
  }

  public async init(transaction: Transaction): Promise<PaymentEntity> {
	return await this.httpClient.doRequest<PaymentEntity>('/payments/init', 'POST', transaction)
  }
  public async find(transactionId: string): Promise<TransactionEntity> {
	return await this.httpClient.doRequest<TransactionEntity>(`/payments/transaction/${transactionId}`)
  }
}
