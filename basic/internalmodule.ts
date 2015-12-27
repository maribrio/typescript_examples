// example to export internal modules
// must be compiled tsc --out using the calling module or add it as a script
module InternalFileValidation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}

module InternalFileValidation {
    var lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}

module InternalFileValidation {
    var numberRegexp = /^[0-9]+$/;
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}

