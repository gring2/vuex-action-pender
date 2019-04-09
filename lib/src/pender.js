"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPender = function (_a) {
    var action = _a.action, pending = _a.pending, success = _a.success, fail = _a.fail;
    var successF = success || defaultF;
    var failF = fail || defaultF;
    var pendingF = pending || defaultF;
    return function (store, payload) {
        try {
            var promist = action(store, payload);
            pendingF(store, payload);
            if (promist instanceof Promise) {
                promist.then(successF.bind(null, store)).catch(failF.bind(null, store));
            }
        }
        catch (e) {
            console.error(e);
        }
    };
};
var defaultF = function () {
    return null;
};
