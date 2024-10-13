import { Entity } from '@loopback/repository';
import { CartItem } from './cart-item.model';
export declare class Cart extends Entity {
    cartID?: number;
    createdAt: string;
    updateAt: string;
    customerId: number;
    cartItems: CartItem[];
    [prop: string]: any;
    constructor(data?: Partial<Cart>);
}
export interface CartRelations {
}
export type CartWithRelations = Cart & CartRelations;
