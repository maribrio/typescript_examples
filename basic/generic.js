// generic function use
function generictypefunction(arg) {
    return arg;
}
/*
getgenerictype('fdf');getgenerictype<string>('fdf');
getgenerictype(44);getgenerictype<number>(44);
*/
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
var myIdentity = loggingIdentity; // function type declaration
var myIdentity1 = loggingIdentity; // literal object declaration
var myIdentity2 = loggingIdentity; // literal object interface declaration
var myIdentity3 = loggingIdentity; // use another type parameter reference
var myIdentity4 = generictypefunction;
// generic class
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
})();
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) { return x + y; };
alert(stringNumeric.add(stringNumeric.zeroValue, "test"));
function create(c) {
    return new c();
}
create(GenericNumber);
function loggingIdentity3(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
//# sourceMappingURL=generic.js.map