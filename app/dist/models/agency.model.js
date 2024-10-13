"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agency = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const product_model_1 = require("./product.model");
const transaction_model_1 = require("./transaction.model");
let Agency = class Agency extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Agency = Agency;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Agency.prototype, "agencyID", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Agency.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => product_model_1.Product),
    tslib_1.__metadata("design:type", Array)
], Agency.prototype, "products", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => transaction_model_1.Transaction),
    tslib_1.__metadata("design:type", Array)
], Agency.prototype, "transactionId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Agency.prototype, "email", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Agency.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Agency.prototype, "address", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Agency.prototype, "gender", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Agency.prototype, "username", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Agency.prototype, "password", void 0);
exports.Agency = Agency = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Agency);
//# sourceMappingURL=agency.model.js.map