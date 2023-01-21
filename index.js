var x = document.querySelectorAll(".drum");

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    x[i].addEventListener("click",function(){
        var btnInn = this.innerHTML;
        sound(btnInn);
        animate(btnInn);
}
);
}

document.addEventListener("keydown",function(event){
    var keyVal = event.key;
    sound(keyVal);
    animate(keyVal);

})

function sound(value){
    switch(value){
        case "q":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "w":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "e":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "r":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "b":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "n":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "m":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    }
}

function animate(keyIn){
    var anim = document.querySelector("."+keyIn);
    anim.classList.add("pressed");
    setTimeout(function(){anim.classList.remove("pressed")},300);
}