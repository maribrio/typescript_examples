/*
this is typescript code as an example of different syntax to show the
use of the language.

JAVASCRIPT: there are Six data types that are primitives, they are not objects, don't have methods and they are inmutable:
Boolean
Null
Undefined
Number (64 bits)
String
Symbol (new in ECMAScript 6)

*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var externalmodule_1 = require('./externalmodule'); // use ECMA6
//example to import ambient declare files
///<reference path="./declare.dt.ts"/>
var url = require("url");
var myUrl = url.parse("http://www.typescriptlang.org");
//declare variables
var isdone = false; //boolean type variable with assignment
var maxageallowed = 80; //number type variable with assignment
var minageallowed = 8; // number type constant
var defaultName = 'Anonymous'; // string type constant
var title = 'type script example for basic types'; //string type
var sportnames = ['tennis', 'soccer', 'basketball']; //string array type
// sport interfaces & classes.
//enum type
(function (gender) {
    gender[gender["male"] = 1] = "male";
    gender[gender["female"] = 2] = "female";
})(exports.gender || (exports.gender = {}));
var gender = exports.gender;
; // set of numeric values with names, beginning with 1
(function (agelevel) {
    agelevel[agelevel["child"] = 10] = "child";
    agelevel[agelevel["adult"] = 20] = "adult";
    agelevel[agelevel["noespecified"] = 50] = "noespecified";
})(exports.agelevel || (exports.agelevel = {}));
var agelevel = exports.agelevel;
;
var defaultgender = gender.male; //assign default value from gender enum
var anyvalue; //any type variable (anyvalue = '' or anyvalue = 10,etc)
function warnmsg() { alert('data not allowed'); }
; // void type for non-return functions
(function (evaluationvalues) {
    evaluationvalues[evaluationvalues["notdefined"] = 0] = "notdefined";
    evaluationvalues[evaluationvalues["low"] = 1] = "low";
    evaluationvalues[evaluationvalues["medium"] = 2] = "medium";
    evaluationvalues[evaluationvalues["high"] = 3] = "high";
    evaluationvalues[evaluationvalues["excellent"] = 4] = "excellent";
})(exports.evaluationvalues || (exports.evaluationvalues = {}));
var evaluationvalues = exports.evaluationvalues;
;
(function (calendarstatus) {
    calendarstatus[calendarstatus["available"] = 0] = "available";
    calendarstatus[calendarstatus["busy"] = 1] = "busy";
    calendarstatus[calendarstatus["engaged"] = 2] = "engaged";
    calendarstatus[calendarstatus["notdefined"] = 3] = "notdefined";
})(exports.calendarstatus || (exports.calendarstatus = {}));
var calendarstatus = exports.calendarstatus;
;
var daystatus = (function () {
    function daystatus() {
        this.status = calendarstatus.available;
        this.from = '09:00';
        this.to = '21:00';
    }
    return daystatus;
})();
exports.daystatus = daystatus;
;
var Match = (function (_super) {
    __extends(Match, _super);
    function Match(date, rival, sport) {
        _super.call(this);
        this.date = date;
        this.rival = rival;
        this.sport = sport;
        this.status = calendarstatus.engaged;
    }
    return Match;
})(daystatus);
exports.Match = Match;
var Zone = (function () {
    function Zone(city, country) {
        this.sector = "";
        this.loc = "";
        this.city = city;
        this.country = country;
    }
    return Zone;
})();
exports.Zone = Zone;
;
var weekdayrange = (function () {
    function weekdayrange() {
        this.mon = new daystatus;
        this.tue = new daystatus;
        this.wen = new daystatus;
        this.thu = new daystatus;
        this.fri = new daystatus;
        this.sat = new daystatus;
        this.sun = new daystatus;
    }
    return weekdayrange;
})();
exports.weekdayrange = weekdayrange;
var Calendar = (function () {
    function Calendar() {
        this.since = new Date();
        this.to = new Date(2099, 12, 31);
        this.weekdays = new weekdayrange;
        this.status = calendarstatus.available;
    }
    return Calendar;
})();
exports.Calendar = Calendar;
;
var ZoneConfig = (function () {
    function ZoneConfig(zone, calendar) {
        this.zones = [];
        this.zones[0] = zone;
        this.calendar = calendar;
    }
    return ZoneConfig;
})();
exports.ZoneConfig = ZoneConfig;
var Sportman = (function () {
    function Sportman(username, gender, birthdate) {
        // public mandatory property 'name' define in the constructor
        // gender property with default value define in the constructor
        if (gender === void 0) { gender = defaultgender; }
        this.username = username;
        this._id = -1; //private property (unique number id)
        this.user_id = -1; // user id property
        this.preferedsports = []; // public property (array)
        this.sportprofiles = [];
        this.evaluation = { reliability: 0, punctuality: 0 };
        this.status = SportStatus.active;
        this.Matches = [];
        this.img = "";
        this.names = { firstname: '', surname: '' };
        this.alias = '';
        this.email = '';
        if (username == "") {
            this.username = defaultName;
        }
        else {
            if (externalmodule_1.validators['Letters only'].isAcceptable(username)) {
                this.alias = username;
            }
            else {
                throw 'value name not allowed';
            }
        }
        this.gender = gender;
        //ways to check optional parameters
        if (typeof birthdate === 'undefined') {
            return;
        } //use typeof operator to check type, return string type
        if (!(birthdate === undefined)) {
            this.birthdate = birthdate;
        }
        if (birthdate === void 0) {
        }
    }
    Sportman.prototype.AddSports = function (Sportname) {
        var restOfName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfName[_i - 1] = arguments[_i];
        }
        return Sportname + " " + restOfName.join(" ");
    };
    Object.defineProperty(Sportman.prototype, "id", {
        get: function () { return this._id; } // get property
        ,
        //use accessor
        set: function (newid) { if (newid >= 0) {
            this._id = newid;
        } } //set property
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sportman.prototype, "birthdate", {
        set: function (birthdate) {
            if (birthdate === undefined) {
                return;
            }
            ;
            this._birthdate = birthdate;
            var age = this.age;
            if (!(age >= Sportman.minage && age <= Sportman.maxage)) {
                warnmsg();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sportman.prototype, "age", {
        get: function () {
            var today = new Date();
            var birthday = this._birthdate;
            var years = today.getFullYear() - this._birthdate.getFullYear();
            // Reset birthday to the current year.
            var y1 = birthday.getFullYear();
            var y2 = today.getFullYear();
            // If the user's birthday has not occurred yet this year, subtract 1.
            if (y2 < y1) {
                years--;
            }
            return years;
        },
        enumerable: true,
        configurable: true
    });
    Sportman.prototype.getAgelevelname = function () {
        return agelevel[this.getAgelevel()];
    };
    Sportman.prototype.getGendername = function () {
        return gender[this.gender];
    };
    Sportman.prototype.getAgelevel = function () {
        var result;
        var age = this.age;
        if (age) {
            result = this.gender == gender.male ?
                (age <= 15 ? agelevel.child : agelevel.adult)
                : (age <= 18 ? agelevel.child : agelevel.adult);
        }
        else {
            result = agelevel.noespecified;
        }
        return result;
    };
    Sportman.minage = minageallowed; //static property only class visible
    Sportman.maxage = maxageallowed; //static property only class visible
    return Sportman;
})();
exports.Sportman = Sportman;
;
// sport interfaces & classes.
(function (SportTypes) {
    SportTypes[SportTypes["faceoff"] = 1] = "faceoff";
    SportTypes[SportTypes["share"] = 2] = "share";
})(exports.SportTypes || (exports.SportTypes = {}));
var SportTypes = exports.SportTypes;
;
(function (SportStatus) {
    SportStatus[SportStatus["active"] = 1] = "active";
    SportStatus[SportStatus["inactive"] = 2] = "inactive";
    SportStatus[SportStatus["blocked"] = 3] = "blocked";
    SportStatus[SportStatus["future"] = 4] = "future";
})(exports.SportStatus || (exports.SportStatus = {}));
var SportStatus = exports.SportStatus;
;
var Sport = (function () {
    function Sport(sport) {
        this.type = SportTypes.faceoff;
        this.status = SportStatus.active;
        this.images = { mobileicon: "", webicon: "", banner: "" };
        this.allocation = { single: true, group: false, collective: false };
        this.participants = { min: 1, max: 1 };
        this.name = sport.name;
        this.type = sport.type || this.type;
        this.status = sport.status || this.status;
        this.images = sport.images || this.images;
        this.allocation = sport.allocation || this.allocation;
        this.participants = sport.participants || this.participants;
    }
    Object.defineProperty(Sport.prototype, "statusname", {
        get: function () {
            return SportStatus[this.status];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sport.prototype, "typename", {
        get: function () {
            return SportTypes[this.type];
        },
        enumerable: true,
        configurable: true
    });
    return Sport;
})();
exports.Sport = Sport;
;
// sportprofiles interfaces & classes.
(function (sportmanlevel) {
    sportmanlevel[sportmanlevel["beginner"] = 10] = "beginner";
    sportmanlevel[sportmanlevel["basic"] = 20] = "basic";
    sportmanlevel[sportmanlevel["intermediate"] = 30] = "intermediate";
    sportmanlevel[sportmanlevel["advance"] = 40] = "advance";
    sportmanlevel[sportmanlevel["expert"] = 50] = "expert";
})(exports.sportmanlevel || (exports.sportmanlevel = {}));
var sportmanlevel = exports.sportmanlevel;
; // set of numeric values with names for each value, set all values
var Sportmanprofile = (function () {
    function Sportmanprofile(sportman, sport) {
        this.level = sportmanlevel.basic;
        this.ranking = 0;
        this.sportman = sportman;
        this.sport = sport;
        this.rankedperformance = { points: 0, games: 0, won: 0, lost: 0, drawn: 0 };
        this.friendlyperformance = { points: 0, games: 0, won: 0, lost: 0, drawn: 0 };
    }
    Sportmanprofile.prototype.getlevelname = function () {
        return sportmanlevel[this.level];
    };
    return Sportmanprofile;
})();
exports.Sportmanprofile = Sportmanprofile;
var Factory = (function () {
    function Factory() {
    }
    Factory.prototype.CreateSportman = function (sportmanName, newgender, birthdate) {
        var sportguy = new Sportman(sportmanName, newgender, birthdate);
        return sportguy;
    };
    Factory.prototype.CreateSport = function (sport) {
        var sportobject = new Sport(sport);
        return sportobject;
    };
    Factory.prototype.CreateSportProfile = function (sportmanName, sport) {
        var sportman;
        var sportobject;
        sportman = new Sportman(sportmanName);
        sportobject = new Sport(sport);
        var sportprofile = new Sportmanprofile(sportman, sportobject);
        return sportprofile;
    };
    return Factory;
})();
exports.funsportyFactory = new Factory();
//# sourceMappingURL=interfaces-classes.js.map