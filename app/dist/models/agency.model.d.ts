import { Entity } from '@loopback/repository';
import { Product } from './product.model';
import { Transaction } from './transaction.model';
export declare class Agency extends Entity {
    agencyID?: number;
    name: string;
    products: Product[];
    transactionId: Transaction[];
    email: string;
    phoneNumber: string;
    address: string;
    gender?: string;
    username: string;
    password: string;
    [prop: string]: any;
    constructor(data?: Partial<Agency>);
}
export interface AgencyRelations {
}
export type AgencyWithRelations = Agency & AgencyRelations;
