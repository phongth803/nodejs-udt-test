import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Transaction} from './transaction.model';

@model({settings: {strict: false}})
export class Billing extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  billingId?: number;

  @property({
    type: 'number',
    required: true,
  })
  amount: number;

  @belongsTo(() => Transaction)
  transactionId: number;

  @property({
    type: 'date',
    required: true,
  })
  billingDate: string;

  @property({
    type: 'string',
    required: true,
  })
  paymentStatus: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Billing>) {
    super(data);
  }
}

export interface BillingRelations {
  // describe navigational properties here
}

export type BillingWithRelations = Billing & BillingRelations;
