"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const agency_model_1 = require("./agency.model");
const cart_item_model_1 = require("./cart-item.model");
const transaction_item_model_1 = require("./transaction-item.model");
let Product = class Product extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Product = Product;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "productId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "price", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "stockQuantity", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => agency_model_1.Agency),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "agencyId", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => cart_item_model_1.CartItem),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "cartItems", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => transaction_item_model_1.TransactionItem),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "transactionItems", void 0);
exports.Product = Product = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Product);
//# sourceMappingURL=product.model.js.map