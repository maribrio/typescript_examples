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
var AgeRegexp = /^[0-9][0-9]$/;
var AgeValidator = (function () {
    function AgeValidator() {
    }
    AgeValidator.prototype.isAcceptable = function (s) {
        return AgeRegexp.test(s);
    };
    return AgeValidator;
})();
exports.AgeValidator = AgeValidator;
/* the following expression export only one member of the module
export = function suma(a: number, b: number): number {
    return a + b
}
*/
exports.validators = {};
exports.validators['ZIP code'] = new ZipCodeValidator();
exports.validators['Letters only'] = new LettersOnlyValidator();
exports.validators['age'] = new AgeValidator();
function testValidation() {
    // Some samples to try
    var strings = ['Hello', '98052', '101', '20', '02', 'f4'];
    // Show whether each string passed each validator
    strings.forEach(function (s) {
        for (var name in exports.validators) {
            console.log('"' + s + '" ' + (exports.validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
        }
    });
}
exports.testValidation = testValidation;
//# sourceMappingURL=externalmodule.js.map