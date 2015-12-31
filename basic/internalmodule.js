// example to export internal modules the calling module must use reference /// <reference path="./internalmodule.ts" /> 
// must be compiled tsc --out using the calling module or add it as a script
// Validators array to be exported as internal modules
var InternalValidation;
(function (InternalValidation) {
    var demo = (function () {
        function demo() {
        }
        return demo;
    })();
    InternalValidation.demo = demo;
})(InternalValidation || (InternalValidation = {}));
//# sourceMappingURL=internalmodule.js.map