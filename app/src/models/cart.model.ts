import {
  belongsTo,
  Entity,
  hasMany,
  model,
  property,
} from '@loopback/repository';
import {Customer} from './customer.model';
import {CartItem} from './cart-item.model';

@model({settings: {strict: false}})
export class Cart extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  cartID?: number;

  @property({
    type: 'date',
    required: true,
  })
  createdAt: string;

  @property({
    type: 'date',
    required: true,
  })
  updateAt: string;

  @belongsTo(() => Customer)
  customerId: number;

  @hasMany(() => CartItem)
  cartItems: CartItem[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Cart>) {
    super(data);
  }
}

export interface CartRelations {
  // describe navigational properties here
}

export type CartWithRelations = Cart & CartRelations;
