import * as funsporty from './interfaces-classes'
import {funsportyFactory} from './interfaces-classes'

function Testobjects() {
    var smp:funsporty.Sportmanprofile;
    var s:funsporty.Sport;
    var sm:funsporty.Sportman;
    
    
    sm=funsportyFactory.CreateSportman('ALEXIS',funsporty.gender.male,25);
    console.log(' Sportman object:' + JSON.stringify(sm));       
    s= funsportyFactory.CreateSport('soccer');
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