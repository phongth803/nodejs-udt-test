"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AdminController = class AdminController {
    constructor(agencyRepository) {
        this.agencyRepository = agencyRepository;
    }
    async create(agency) {
        return this.agencyRepository.create(agency);
    }
    async count(where) {
        return this.agencyRepository.count(where);
    }
    async find(filter) {
        return this.agencyRepository.find(filter);
    }
    async updateAll(agency, where) {
        return this.agencyRepository.updateAll(agency, where);
    }
    async findById(id, filter) {
        return this.agencyRepository.findById(id, filter);
    }
    async updateById(id, agency) {
        await this.agencyRepository.updateById(id, agency);
    }
    async replaceById(id, agency) {
        await this.agencyRepository.replaceById(id, agency);
    }
    async deleteById(id) {
        await this.agencyRepository.deleteById(id);
    }
};
exports.AdminController = AdminController;
tslib_1.__decorate([
    (0, rest_1.post)('/admin/agencies'),
    (0, rest_1.response)(200, {
        description: 'Agency model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Agency) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Agency, {
                    title: 'NewAgency',
                    exclude: ['agencyID'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/admin/agencies/count'),
    (0, rest_1.response)(200, {
        description: 'Agency model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Agency)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/admin/agencies'),
    (0, rest_1.response)(200, {
        description: 'Array of Agency model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Agency, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Agency)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/admin/agencies'),
    (0, rest_1.response)(200, {
        description: 'Agency PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Agency, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Agency)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Agency, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/admin/agencies/{id}'),
    (0, rest_1.response)(200, {
        description: 'Agency model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Agency, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Agency, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/admin/agencies/{id}'),
    (0, rest_1.response)(204, {
        description: 'Agency PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Agency, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Agency]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/admin/agencies/{id}'),
    (0, rest_1.response)(204, {
        description: 'Agency PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Agency]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/admin/agencies/{id}'),
    (0, rest_1.response)(204, {
        description: 'Agency DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "deleteById", null);
exports.AdminController = AdminController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AgencyRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AgencyRepository])
], AdminController);
//# sourceMappingURL=admin.controller.js.map