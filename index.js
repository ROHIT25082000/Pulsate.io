var arr = document.getElementsByClassName("drum");
for(var i = 0; i < arr.length; i++){
    arr[i].addEventListener("click",function(){
        var name = this.textContent;
        console.log(name);
        makesound(name);
        addAnimation(name);
    });
}

var arr = document.getElementsByClassName("drum");
for(var i = 0; i < arr.length; i++){
    arr[i].addEventListener("keypress",function(e){
        console.log(e.key);
        makesound(e.key);
       addAnimation(e.key);
    });
}

function addAnimation(key){
    var element = document.querySelector("."+key);
    element.classList.add("pressed");
    setInterval(function(){
        element.classList.remove("pressed");
    },100);
}

function makesound(char_pressed){
    switch (char_pressed) {
        case "w":
            var value = new Audio("sounds/tom-1.mp3");
            value.play();
            break;
        case "a":
            var value = new  Audio("sounds/tom-2.mp3");
            value.play();
            break;
        case "s":
            var value =  new Audio("sounds/tom-3.mp3");
            value.play();
            break;
        case "d":
            var value = new Audio("sounds/tom-4.mp3");
            value.play();
            break;
        case "j":
            var value = new Audio("sounds/crash.mp3");
            value.play();
            break;
        case "k":
            var value =new Audio("sounds/kick-bass.mp3");
            value.play();
            break;
        case "l":
            var value = new Audio("sounds/snare.mp3");
            value.play();
            break;
        default:
            break;
    }
}