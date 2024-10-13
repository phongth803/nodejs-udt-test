import { Entity } from '@loopback/repository';
export declare class TransactionItem extends Entity {
    transactionItemId?: number;
    quantity: number;
    transactionId: number;
    productId: number;
    [prop: string]: any;
    constructor(data?: Partial<TransactionItem>);
}
export interface TransactionItemRelations {
}
export type TransactionItemWithRelations = TransactionItem & TransactionItemRelations;
