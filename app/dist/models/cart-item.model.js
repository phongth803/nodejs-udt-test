"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItem = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const cart_model_1 = require("./cart.model");
const product_model_1 = require("./product.model");
let CartItem = class CartItem extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.CartItem = CartItem;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], CartItem.prototype, "cartItemID", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], CartItem.prototype, "quantity", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => cart_model_1.Cart),
    tslib_1.__metadata("design:type", Number)
], CartItem.prototype, "cartId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => product_model_1.Product),
    tslib_1.__metadata("design:type", Number)
], CartItem.prototype, "productId", void 0);
exports.CartItem = CartItem = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], CartItem);
//# sourceMappingURL=cart-item.model.js.map