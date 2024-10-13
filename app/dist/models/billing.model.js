"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Billing = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const transaction_model_1 = require("./transaction.model");
let Billing = class Billing extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Billing = Billing;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Billing.prototype, "billingId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Billing.prototype, "amount", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => transaction_model_1.Transaction),
    tslib_1.__metadata("design:type", Number)
], Billing.prototype, "transactionId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Billing.prototype, "billingDate", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Billing.prototype, "paymentStatus", void 0);
exports.Billing = Billing = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Billing);
//# sourceMappingURL=billing.model.js.map