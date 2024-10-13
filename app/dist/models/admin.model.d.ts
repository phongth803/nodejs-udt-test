import { Entity } from '@loopback/repository';
export declare class Admin extends Entity {
    adminId?: number;
    name: string;
    email: string;
    username: string;
    password: string;
    [prop: string]: any;
    constructor(data?: Partial<Admin>);
}
export interface AdminRelations {
}
export type AdminWithRelations = Admin & AdminRelations;
