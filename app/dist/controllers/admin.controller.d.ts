import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Agency } from '../models';
import { AgencyRepository } from '../repositories';
export declare class AdminController {
    agencyRepository: AgencyRepository;
    constructor(agencyRepository: AgencyRepository);
    create(agency: Omit<Agency, 'agencyID'>): Promise<Agency>;
    count(where?: Where<Agency>): Promise<Count>;
    find(filter?: Filter<Agency>): Promise<Agency[]>;
    updateAll(agency: Agency, where?: Where<Agency>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Agency>): Promise<Agency>;
    updateById(id: number, agency: Agency): Promise<void>;
    replaceById(id: number, agency: Agency): Promise<void>;
    deleteById(id: number): Promise<void>;
}
