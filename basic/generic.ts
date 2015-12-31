// generic function use
function generictypefunction<T>(arg: T): T { //generic type function
    return arg;
}

/*
getgenerictype('fdf');getgenerictype<string>('fdf');
getgenerictype(44);getgenerictype<number>(44);
*/

function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
interface GenericIdentityFn {
    <T>(arg: T): T;
}

interface GenericIdentityFn2<T> {
    (arg: T): T;
}
var myIdentity: <T>(arg: T)=>T = loggingIdentity;// function type declaration
var myIdentity1: {<T>(arg: T): T} = loggingIdentity; // literal object declaration
var myIdentity2: GenericIdentityFn = loggingIdentity; // literal object interface declaration
var myIdentity3: <U>(arg: U)=>U = loggingIdentity;// use another type parameter reference
var myIdentity4: GenericIdentityFn2<number> = generictypefunction;


// generic class
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

var myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };


var stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };

alert(stringNumeric.add(stringNumeric.zeroValue, "test"));

function create<T>(c: {new(): T; }): T { // class factory function
    return new c();
}

create<GenericNumber<number>>(GenericNumber);

// generic constraint using extends
interface Lengthwise {
    length: number;
}

function loggingIdentity3<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}