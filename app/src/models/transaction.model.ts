import {belongsTo, Entity, hasMany, hasOne, model, property} from '@loopback/repository';
import { Customer } from './customer.model';
import { Agency } from './agency.model';
import { TransactionItem } from './transaction-item.model';
import { Billing } from './billing.model';

@model({settings: {strict: false}})
export class Transaction extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  transactionId?: number;

  @belongsTo(() => Customer)
  customerId: number;

  @belongsTo(() => Agency)
  agencyId: number;

  @hasMany(() => TransactionItem)
  transactionItems: TransactionItem[];

  @hasOne(() => Billing)
  billing: Billing;

  @property({
    type: 'date',
    required: true,
  })
  transactionDate: string;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Transaction>) {
    super(data);
  }
}

export interface TransactionRelations {
  // describe navigational properties here
}

export type TransactionWithRelations = Transaction & TransactionRelations;
