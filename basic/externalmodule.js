// example to export external modules
// must be compiled using tsc --module commonjs or tsc --module amd
var lettersRegexp = /^[A-Za-z]+$/;
var LettersOnlyValidator = (function () {
    function LettersOnlyValidator() {
    }
    LettersOnlyValidator.prototype.isAcceptable = function (s) {
        return lettersRegexp.test(s);
    };
    return LettersOnlyValidator;
})();
exports.LettersOnlyValidator = LettersOnlyValidator;
var numberRegexp = /^[0-9]+$/;
var ZipCodeValidator = (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && numberRegexp.test(s);
    };
    return ZipCodeValidator;
})();
exports.ZipCodeValidator = ZipCodeValidator;
/* export only one member of the module
export = function suma(a: number, b: number): number {
    return a + b
}
*/ 
//# sourceMappingURL=externalmodule.js.map