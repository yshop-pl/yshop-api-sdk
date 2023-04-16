export class Transaction {
  productId: number
  nickname: string
  email: string
  method: string
  count: number
  redirectUrl?: string
  discountCodeId?: number
}

export class TransactionBuilder {
  private static transaction: Transaction = new Transaction()

  public static productId(productId: number) {
	this.transaction.productId = productId
	return this;
  }

  public static nickname(nickname: string) {
	this.transaction.nickname = nickname;
	return this;
  }

  public static email(email: string) {
	this.transaction.email = email
	return this;
  }

  public static method(method: string) {
	this.transaction.method = method;
	return this;
  }

  public static count(count: number) {
	this.transaction.count = count
	return this;
  }

  public static redirectUrl(redirectUrl: string) {
	this.transaction.redirectUrl = redirectUrl
	return this
  }

  public static discountCodeId(discountCodeId: number) {
	this.transaction.discountCodeId = discountCodeId;
	return this
  }

  public static build(): Transaction {
	return this.transaction
  }
}
