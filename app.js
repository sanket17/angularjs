/*
What problem Angularjs 
-> Update/manage html and javascript, logic and variable simultaneoulsy 

*/

$(document).ready(function(){
    
    var currentStep = 0;
    
    $("#step1").hide();
    $("#step2").hide();
    
    $("#btnStep1").click(function(){
        $("#step1").show();
        $("#step2").hide();
        
        currentStep = 1;
        // update the database code logic
    });
    
    $("#btnStep2").click(function(){
        $("#step1").hide();
        $("#step2").show();
        
        currentStep = 2;
        // update the database code logic
    });
    
    
});

/*
Model, View , Whatever

Model - DATA or thing that defines data or variables i.e Js file
View - Whatever user see's/interact i.e html file

Controllers, ViewModels, Whatever are the things that bind Model and View.

MVC -  Model View Controller
MVV - Model View ViewModel

AnguluarJS has a thing that bind variable and object in model to the view in htmk or DOM.
So angularjs has MV* - Model View Whatever

*/

/*
HTML Aside




*/