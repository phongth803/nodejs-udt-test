"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Admin = class Admin extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Admin = Admin;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Admin.prototype, "adminId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Admin.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Admin.prototype, "email", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Admin.prototype, "username", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Admin.prototype, "password", void 0);
exports.Admin = Admin = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Admin);
//# sourceMappingURL=admin.model.js.map