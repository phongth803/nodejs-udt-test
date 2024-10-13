"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const customer_model_1 = require("./customer.model");
const agency_model_1 = require("./agency.model");
const transaction_item_model_1 = require("./transaction-item.model");
const billing_model_1 = require("./billing.model");
let Transaction = class Transaction extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Transaction = Transaction;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Transaction.prototype, "transactionId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => customer_model_1.Customer),
    tslib_1.__metadata("design:type", Number)
], Transaction.prototype, "customerId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => agency_model_1.Agency),
    tslib_1.__metadata("design:type", Number)
], Transaction.prototype, "agencyId", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => transaction_item_model_1.TransactionItem),
    tslib_1.__metadata("design:type", Array)
], Transaction.prototype, "transactionItems", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => billing_model_1.Billing),
    tslib_1.__metadata("design:type", billing_model_1.Billing)
], Transaction.prototype, "billing", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Transaction.prototype, "transactionDate", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Transaction.prototype, "status", void 0);
exports.Transaction = Transaction = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Transaction);
//# sourceMappingURL=transaction.model.js.map