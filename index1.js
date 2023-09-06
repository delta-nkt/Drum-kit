// to check button press
for(var i=0; i<document.querySelectorAll(".drum").length ;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        // 
        var buttonName = this.innerHTML;
        makeSound(buttonName);
        // for adding animation in button
        buttonAnimation(buttonName);
    });
}

// to check keypress
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "f":
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
            break;
        
        case "r":
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
            break;
        
        case "n":
            var audio= new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        
        case "t":
            var audio= new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        
        case "e":
            var audio= new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        
        case "n":
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "d":
            var audio= new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
}




/*objects and methods
var bellBoy={
    name="hela",
    age=17,
    language=["french","english"]
}
instead make one class and use its object;
use of constructor always use BellBoy kind of notations;
function BellBoy(name,age,language){
    this.name=name;
    this.age=age;
    this.language=language;
}

now use the objecct in initialised form
var bellBoy1= new BellBoy("hella",12,["french","english"]);

methods:
if we want our object to have a function then
var bellBoy1={
    name="hella";
    age=12;
    language=["english","french"],
    moveSuitcase= function(){
        alert("may i take your suitcase!");
        pickUpSuitcase();
        move();
    }
}
calling method
bellBoy1.moveSuitcase();

constructor function
function BellBoy(name,age,language){
    this.name=name;
    this.age=age;
    this.language=language;
    this.moveSuitcase= function(){
        alert("may i take your suitcase!");
        pickUpSuitcase();
        move();
    } 
}
wrong approach
function beats(part,sound){
    this.part=part;
    this.sound=sound;
    this.audio=function(){
        var music=new Audio(sound);
        music.play();
    }
}
/*function Audio(filelocation){
    this.filelocation=this.filelocation;
    this.play(){

    }
}

for keyboard events we add keypress instead of adding eventlistners
and replace the click event of mouse events

// adding keypress to drums
for(var i=0; i<document.querySelectorAll(".drum").length ;i++){
    document.querySelectorAll(".drum")[i].addEventListener("keypress",function(){
        alert("key was pressed");
    });
}

// adding key press event listner to whole document to detect key press
document.addEventListener("keypress",function(){
    alert("hello");
});

once the event happens the elments will trigger the function in the 2nd params,
we can give params to the function by passing the paraments and call it "event"
which helps us to tap in the events that triggered the function

to check the avobe use this:(to know which key is pressed!!)
document.addEventListener("keypress",function(event){
    console.log(event);
});

the func that takes func as input are called higer order func.
the function that are passed as input are called callback functions, it allows us to wait
before something is yet to happen(like waiting for a click event then a callback function
is called)

callback func is not called by us but is called by the object that experienced the click
when that happens it send us info that will only known when the events happend 
*/

