import { Entity } from '@loopback/repository';
export declare class CartItem extends Entity {
    cartItemID?: number;
    quantity: number;
    cartId: number;
    productId: number;
    [prop: string]: any;
    constructor(data?: Partial<CartItem>);
}
export interface CartItemRelations {
}
export type CartItemWithRelations = CartItem & CartItemRelations;
