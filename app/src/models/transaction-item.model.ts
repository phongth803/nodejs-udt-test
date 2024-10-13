import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Transaction} from './transaction.model';
import {Product} from './product.model';

@model({settings: {strict: false}})
export class TransactionItem extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  transactionItemId?: number;

  @property({
    type: 'number',
    required: true,
  })
  quantity: number;

  @belongsTo(() => Transaction)
  transactionId: number;

  @belongsTo(() => Product)
  productId: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TransactionItem>) {
    super(data);
  }
}

export interface TransactionItemRelations {
  // describe navigational properties here
}

export type TransactionItemWithRelations = TransactionItem &
  TransactionItemRelations;
