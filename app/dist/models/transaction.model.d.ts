import { Entity } from '@loopback/repository';
import { TransactionItem } from './transaction-item.model';
import { Billing } from './billing.model';
export declare class Transaction extends Entity {
    transactionId?: number;
    customerId: number;
    agencyId: number;
    transactionItems: TransactionItem[];
    billing: Billing;
    transactionDate: string;
    status: string;
    [prop: string]: any;
    constructor(data?: Partial<Transaction>);
}
export interface TransactionRelations {
}
export type TransactionWithRelations = Transaction & TransactionRelations;
