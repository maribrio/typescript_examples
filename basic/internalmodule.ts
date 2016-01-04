// example to export internal modules the calling module must use reference /// <reference path="./internalmodule.ts" /> 
// must be compiled tsc --out using the calling module or add it as a script



// Validators array to be exported as internal modules

module InternalValidation {
        
    export class demo {}

}



