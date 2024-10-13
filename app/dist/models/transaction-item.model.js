"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionItem = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const transaction_model_1 = require("./transaction.model");
const product_model_1 = require("./product.model");
let TransactionItem = class TransactionItem extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.TransactionItem = TransactionItem;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionItem.prototype, "transactionItemId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionItem.prototype, "quantity", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => transaction_model_1.Transaction),
    tslib_1.__metadata("design:type", Number)
], TransactionItem.prototype, "transactionId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => product_model_1.Product),
    tslib_1.__metadata("design:type", Number)
], TransactionItem.prototype, "productId", void 0);
exports.TransactionItem = TransactionItem = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], TransactionItem);
//# sourceMappingURL=transaction-item.model.js.map