import { Entity } from '@loopback/repository';
export declare class Billing extends Entity {
    billingId?: number;
    amount: number;
    transactionId: number;
    billingDate: string;
    paymentStatus: string;
    [prop: string]: any;
    constructor(data?: Partial<Billing>);
}
export interface BillingRelations {
}
export type BillingWithRelations = Billing & BillingRelations;
