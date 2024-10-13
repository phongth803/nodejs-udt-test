"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const cart_model_1 = require("./cart.model");
const transaction_model_1 = require("./transaction.model");
let Customer = class Customer extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Customer = Customer;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Customer.prototype, "CustomerID", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "email", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "address", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "gender", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "username", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "password", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => cart_model_1.Cart),
    tslib_1.__metadata("design:type", cart_model_1.Cart)
], Customer.prototype, "cart", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => transaction_model_1.Transaction),
    tslib_1.__metadata("design:type", Array)
], Customer.prototype, "transactions", void 0);
exports.Customer = Customer = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Customer);
//# sourceMappingURL=customer.model.js.map