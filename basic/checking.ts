module Validation {
export function CheckPropertObject(p:string,o:Object):boolean {
    return p in o
}
}