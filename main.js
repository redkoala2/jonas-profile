//Music by <a href="https://pixabay.com/users/watermello-54449748/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=496890">Dan</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=496890">Pixabay</a>
//Sound Effect by <a href="https://pixabay.com/users/denielcz-50993549/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=463065">DenielCZ</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=463065">Pixabay</a>


var theme = 'todo';

const elementThemeButton = document.getElementById("theme-button");
const styleLink = document.getElementById("style");

//elementThemeButton.innerHTML = "Cute mode!";

function styleButton(){
    const elementThemeButton = document.getElementById("theme-button");
    const styleLink = document.getElementById("style");
    console.log("style link value:" + styleLink.getAttribute("href"))
    if(styleLink.getAttribute("href") == 'cute.css'){
        console.log("style = cute.css")
        styleLink.setAttribute("href", "normal.css");
    } else {
        console.log("style = normal.css")
        styleLink.setAttribute("href", "cute.css");
    }
    buttonClick()
}

function buttonClick(){
    let audio = new Audio('click.mp3');
    audio.play();
}
function button1(){
    buttonClick()
}
function button2(){
    buttonClick()
}
function button3(){
    buttonClick()
}
