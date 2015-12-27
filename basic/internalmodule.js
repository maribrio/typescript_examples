var InternalFileValidation;
(function (InternalFileValidation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator = (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    })();
    InternalFileValidation.LettersOnlyValidator = LettersOnlyValidator;
})(InternalFileValidation || (InternalFileValidation = {}));
var InternalFileValidation;
(function (InternalFileValidation) {
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    })();
    InternalFileValidation.ZipCodeValidator = ZipCodeValidator;
})(InternalFileValidation || (InternalFileValidation = {}));
//# sourceMappingURL=internalmodule.js.map