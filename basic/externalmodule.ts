// example to export external modules
// must be compiled using tsc --module commonjs or tsc --module amd

//export various members of the module


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


/* export only one member of the module
export = function suma(a: number, b: number): number {
    return a + b
}
*/