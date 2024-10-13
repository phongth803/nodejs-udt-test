import {Entity, hasMany, model, property} from '@loopback/repository';
import {Product} from './product.model';
import {Transaction} from './transaction.model';

@model({settings: {strict: false}})
export class Agency extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  agencyID?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @hasMany(() => Product)
  products: Product[];

  @hasMany(() => Transaction)
  transactionId: Transaction[];

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
    required: true,
  })
  address: string;

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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Agency>) {
    super(data);
  }
}

export interface AgencyRelations {
  // describe navigational properties here
}

export type AgencyWithRelations = Agency & AgencyRelations;
