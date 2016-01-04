var funsporty = require('./interfaces-classes');
var interfaces_classes_1 = require('./interfaces-classes');
function Testobjects() {
    var smp;
    var s;
    var sm;
    sm = interfaces_classes_1.funsportyFactory.CreateSportman('ALEXIS', funsporty.gender.male, 25);
    console.log(' Sportman object:' + JSON.stringify(sm));
    s = interfaces_classes_1.funsportyFactory.CreateSport('soccer');
    console.log(' Sport object:' + JSON.stringify(s));
    smp = interfaces_classes_1.funsportyFactory.CreateSportProfile("ALEXIS", "SOCCER");
    console.log(' Sportmanprofile object:' + JSON.stringify(smp));
    console.log(sm.name + sm.getAgelevelname() + sm.getGendername());
    console.log(sm instanceof funsporty.Sportman); // operator to check prototype   
    console.log('age' in sm); //operator check property in a instantiated object
}
var externalmodule_1 = require('./externalmodule'); // use ECMA6
externalmodule_1.testValidation();
Testobjects();
//# sourceMappingURL=testobjects.js.map