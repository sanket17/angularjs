 
var person = 'Steve';

function logPerson(){
    console.log(person);
}

// code after modification

var statusPerson = {};
statusPerson.person = 'Steve';

statusPerson.logFunction = function(){
    console.log(statusPerson.person);
}

/*
var your_order;

function reverse(s){
    return s.split("").reverse().join("");
}

var bartender = {
    str1: "ers",
    str2: reverse("rap"),
    str3: "amet",
    request: function(preference){
        return preference+".Secret word: "+this.str2 + this.str3 + this.str1;
    }
}

console.log(bartender.request(your_order));
*/