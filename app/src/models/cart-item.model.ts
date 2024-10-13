import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Cart} from './cart.model';
import {Product} from './product.model';

@model({settings: {strict: false}})
export class CartItem extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  cartItemID?: number;

  @property({
    type: 'number',
    required: true,
  })
  quantity: number;

  @belongsTo(() => Cart)
  cartId: number;

  @belongsTo(() => Product)
  productId: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CartItem>) {
    super(data);
  }
}

export interface CartItemRelations {
  // describe navigational properties here
}

export type CartItemWithRelations = CartItem & CartItemRelations;
