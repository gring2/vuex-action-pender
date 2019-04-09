"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pender_1 = require("../src/pender");
var vuex_1 = __importStar(require("vuex"));
var vue_1 = __importDefault(require("vue"));
describe('createPender Test', function () {
    var storeOpion = {};
    var store;
    beforeEach(function () {
        vue_1.default.use(vuex_1.default);
        store = new vuex_1.Store(storeOpion);
    });
    it('navie test', function () {
        var a = function () {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('foo');
                }, 1);
            });
        };
        var pender = pender_1.createPender({
            'action': a
        });
        expect(typeof pender).toBe("function");
    });
    it('pending function is called', function () {
        var a = function () {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('foo');
                }, 1);
            });
        };
        var inner_mock = jest.fn();
        var p = jest.fn(function () {
            inner_mock();
        });
        var pender = pender_1.createPender({
            'action': a,
            'pending': p
        });
        var payload = null;
        var t = pender(store, payload);
        expect(inner_mock).toBeCalled();
    }),
        it('success function is called when action does not return promise', function () {
            var a = function () {
            };
            var inner_mock = jest.fn();
            var p = jest.fn(function () {
                inner_mock();
            });
            var pender = pender_1.createPender({
                'action': a,
                'success': p
            });
            var payload = null;
            var t = pender(store, payload);
            expect(inner_mock).not.toBeCalled();
        });
});
