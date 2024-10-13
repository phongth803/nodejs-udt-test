"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const customer_model_1 = require("./customer.model");
const cart_item_model_1 = require("./cart-item.model");
let Cart = class Cart extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Cart = Cart;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Cart.prototype, "cartID", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Cart.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Cart.prototype, "updateAt", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => customer_model_1.Customer),
    tslib_1.__metadata("design:type", Number)
], Cart.prototype, "customerId", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => cart_item_model_1.CartItem),
    tslib_1.__metadata("design:type", Array)
], Cart.prototype, "cartItems", void 0);
exports.Cart = Cart = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Cart);
//# sourceMappingURL=cart.model.js.map