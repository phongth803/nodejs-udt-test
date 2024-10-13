import { Entity } from '@loopback/repository';
import { Cart } from './cart.model';
import { Transaction } from './transaction.model';
export declare class Customer extends Entity {
    CustomerID?: number;
    name: string;
    email: string;
    phoneNumber: string;
    address?: string;
    gender?: string;
    username: string;
    password: string;
    cart: Cart;
    transactions: Transaction[];
    [prop: string]: any;
    constructor(data?: Partial<Customer>);
}
export interface CustomerRelations {
}
export type CustomerWithRelations = Customer & CustomerRelations;
