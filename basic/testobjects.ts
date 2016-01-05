import * as funsporty from './interfaces-classes'
import {funsportyFactory} from './interfaces-classes'

function Testobjects() {
    var smp:funsporty.Sportmanprofile;
    var s:funsporty.Sport;
    var sm:funsporty.Sportman;
    
    let d:Date=new Date(1985,1,12);
    sm=funsportyFactory.CreateSportman('ALEXIS',funsporty.gender.male,d);
    sm.PreferedSports = ['soccer','tennis'];
    sm.zone= new funsporty.ZoneConfig(new funsporty.Zone('providencia','Chile'),new funsporty.Calendar());
   
     
    console.log(' Sportman object:' + JSON.stringify(sm));  
    console.log(' años ' + sm.age);
    s= funsportyFactory.CreateSport('soccer');
    s.iconname="icon";
    s.numbertype= funsporty.sportnumbertypes.individual;
    s.status=funsporty.sportstatus.active;
    s.type=funsporty.sporttypes.faceoff;
    console.log(' Sport object:' + JSON.stringify(s));
    smp=funsportyFactory.CreateSportProfile("ALEXIS","SOCCER")
    
    console.log(' Sportmanprofile object:' + JSON.stringify(smp));
    
    console.log(sm.name + sm.getAgelevelname()+ sm.getGendername())
    console.log(sm instanceof funsporty.Sportman); // operator to check prototype   
    console.log('age' in sm); //operator check property in a instantiated object

}

import {testValidation} from './externalmodule'; // use ECMA6
testValidation();
Testobjects();