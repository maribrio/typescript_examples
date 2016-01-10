var funsporty = require('./interfaces-classes');
var interfaces_classes_1 = require('./interfaces-classes');
function buildQuery(smpId, filtercriteria) {
    var zonecriteria;
    var sportcriteria;
    var gendercriteria;
    var agelevelcriteria;
    var sportmanlevelcriteria;
    if (filtercriteria.zones) {
        zonecriteria = { 'zoneconfig.zones': { $elemMatch: filtercriteria.zones } };
    }
    else {
        zonecriteria = { 'zoneconfig.zones': { $exists: true } };
    }
    if (filtercriteria.sport) {
        sportcriteria = { preferedsports: filtercriteria.sport };
    }
    else {
        sportcriteria = { sport: { $exists: true } };
    }
    if (filtercriteria.gender) {
        gendercriteria = { gender: filtercriteria.gender };
    }
    else {
        gendercriteria = { gender: { $exists: true } };
    }
    if (filtercriteria.agelevel) {
        agelevelcriteria = { agelevel: '' };
    }
    else {
        agelevelcriteria = { agelevel: { $exists: true } };
    }
    if (filtercriteria.level) {
        sportmanlevelcriteria = { profiles: { $elemMatch: { sport: filtercriteria.sport, level: filtercriteria.level } } };
    }
    else {
        sportmanlevelcriteria = { profiles: { $exists: true } };
    }
    var smcriteria = { $and: [zonecriteria, sportcriteria, gendercriteria, sportmanlevelcriteria] };
    if (smpId) {
        return { $and: [{ _id: smpId }, smcriteria] };
    }
    return { smcriteria: smcriteria };
}
function Testobjects() {
    var smp;
    var s;
    var sm;
    var sm2;
    var a;
    var b;
    a = { gender: 1, sport: 'tennis', level: 10 };
    b = buildQuery(null, a);
    console.log(JSON.stringify(b));
    if (a) {
        console.log("jk");
    }
    else {
        console.log("klk");
    }
    // show sport object creation
    s = interfaces_classes_1.funsportyFactory.CreateSport('tennis');
    s.iconname = "icon";
    s.numbertype = funsporty.sportnumbertypes.individual;
    s.status = funsporty.sportstatus.active;
    s.type = funsporty.sporttypes.faceoff;
    console.log(' Sport object:' + JSON.stringify(s));
    // show sportman object creation
    sm = interfaces_classes_1.funsportyFactory.CreateSportman('ALEXIS', funsporty.gender.male, new Date(1985, 1, 12));
    sm.preferedsports = ['soccer', 'tennis'];
    sm.zoneconfig = new funsporty.ZoneConfig(new funsporty.Zone('providencia', 'Chile'), new funsporty.Calendar());
    sm2 = interfaces_classes_1.funsportyFactory.CreateSportman('JORGE', funsporty.gender.male, new Date(1983, 4, 4));
    sm2.preferedsports = ['bike', 'tennis'];
    sm.Matches[0] = new funsporty.Match(new Date(), sm2, s);
    sm.Matches[0].from = "19:30";
    sm.Matches[0].to = "21:30";
    sm.Matches[1] = { date: new Date(), rival: sm2, sport: s, status: 0, from: '21:30', to: '22:30' };
    sm.Matches.length;
    console.log(' Sportman object:' + JSON.stringify(sm));
    console.log(' años ' + sm.age);
    //  show sportprofile object creation
    smp = interfaces_classes_1.funsportyFactory.CreateSportProfile("ALEXIS", "SOCCER");
    console.log(' Sportmanprofile object:' + JSON.stringify(smp));
    console.log(sm.username + sm.getAgelevelname() + sm.getGendername());
    console.log(sm instanceof funsporty.Sportman); // operator to check prototype   
    console.log('age' in sm); //operator check property in a instantiated object
}
var externalmodule_1 = require('./externalmodule'); // use ECMA6
externalmodule_1.testValidation();
Testobjects();
//# sourceMappingURL=testobjects.js.map