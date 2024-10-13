import { Entity } from '@loopback/repository';
import { CartItem } from './cart-item.model';
import { TransactionItem } from './transaction-item.model';
export declare class Product extends Entity {
    productId?: number;
    name: string;
    description?: string;
    price: number;
    stockQuantity: number;
    agencyId: number;
    cartItems: CartItem[];
    transactionItems: TransactionItem[];
    [prop: string]: any;
    constructor(data?: Partial<Product>);
}
export interface ProductRelations {
}
export type ProductWithRelations = Product & ProductRelations;
