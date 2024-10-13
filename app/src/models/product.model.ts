import {
  belongsTo,
  Entity,
  hasMany,
  model,
  property,
} from '@loopback/repository';
import {Agency} from './agency.model';
import {CartItem} from './cart-item.model';
import {TransactionItem} from './transaction-item.model';

@model({settings: {strict: false}})
export class Product extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  productId?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'number',
    required: true,
  })
  stockQuantity: number;

  @belongsTo(() => Agency)
  agencyId: number;

  @hasMany(() => CartItem)
  cartItems: CartItem[];

  @hasMany(() => TransactionItem)
  transactionItems: TransactionItem[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  // describe navigational properties here
}

export type ProductWithRelations = Product & ProductRelations;
