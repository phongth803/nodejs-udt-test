import {Entity, hasMany, hasOne, model, property} from '@loopback/repository';
import {Cart} from './cart.model';
import {Transaction} from './transaction.model';

@model({settings: {strict: false}})
export class Customer extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  CustomerID?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  phoneNumber: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'string',
  })
  gender?: string;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;
  @hasOne(() => Cart)
  cart: Cart;
  @hasMany(() => Transaction)
  transactions: Transaction[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}

export interface CustomerRelations {
  // describe navigational properties here
}

export type CustomerWithRelations = Customer & CustomerRelations;
