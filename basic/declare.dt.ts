
//Ambient Internal Modules
declare module ExternalAmbientExample {
    export interface Class1 {
        
        };
    }

    
}

declare var d1: ExternalAmbientExample.Class1;

//Ambient External Modules
declare module "url" {
    export interface Url {
        protocol?: string;
        hostname?: string;
        pathname?: string;
    }

    export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
}

declare module "path" {
    export function normalize(p: string): string;
    export function join(...paths: any[]): string;
    export var sep: string;
}
