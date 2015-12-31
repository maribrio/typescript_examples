// example to export external modules
// must be compiled using tsc --module commonjs or tsc --module amd

//export various members of the module to allow data validation


export interface StringValidator {
    isAcceptable(s: string): boolean;
}


var lettersRegexp = /^[A-Za-z]+$/;
export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
        return lettersRegexp.test(s);
    }
}

var numberRegexp = /^[0-9]+$/;
export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

var AgeRegexp = /^[0-9][0-9]$/;
export class AgeValidator implements StringValidator {
    isAcceptable(s: string) {
        return AgeRegexp.test(s);
    }
}

/* the following expression export only one member of the module
export = function suma(a: number, b: number): number {
    return a + b
}
*/

    export var validators: { [s: string]: StringValidator; } = {};
    validators['ZIP code'] = new ZipCodeValidator();
    validators['Letters only'] = new LettersOnlyValidator();
    validators['age'] = new AgeValidator();
    export function testValidation()
    {
        // Some samples to try
        var strings = ['Hello', '98052', '101','20','02','f4'];
        // Show whether each string passed each validator
        strings.forEach(s => {
            for (var name in validators) {
                console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
            }
        });
    }
    