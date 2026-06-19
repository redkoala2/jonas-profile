//Music by <a href="https://pixabay.com/users/watermello-54449748/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=496890">Dan</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=496890">Pixabay</a>
//Sound Effect by <a href="https://pixabay.com/users/denielcz-50993549/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=463065">DenielCZ</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=463065">Pixabay</a>

const elementThemeButton = document.getElementById("theme-button");
const styleLink = document.getElementById("style");
const main1 = document.getElementById("main1");
const main2 = document.getElementById("main2");
const main3 = document.getElementById("main3");

main2.style.display = "none";
main3.style.display = "none";

console.log(window.innerWidth, window.innerHeight);
//elementThemeButton.innerHTML = "Cute mode!";

var jokeNumber = 0;

document.getElementById('all').style.display='none';
document.getElementById('noscript').style.display='none';
document.getElementById('popup').style.display='block';
let params = new URLSearchParams(location.search);

function initialize(){
let params = new URLSearchParams(location.search);
if(params.get('audio') != null){
    document.getElementById('popup').style.display='none';
    document.getElementById('all').style.display='flex';
}
console.log(params.get('audio'))
}
initialize()

function soundOn(){
    if(params.get('audio') == 'true'){
        return true;
    }
    if(params.get('audio') == 'false'){
        return false;
    }
}
const Discription = document.getElementById("discription");
var age = new Date().getFullYear() - 2012;
Discription.innerHTML = "Hii, I am Jonas. A " + age + " year old student from the Netherlands.";
console.log(new Date().getFullYear())
function styleButton(){
    const elementThemeButton = document.getElementById("theme-button");
    const styleLink = document.getElementById("style");
    const faviconLink = document.getElementById("favicon");
    console.log("style link value:" + styleLink.getAttribute("href"))
    if(styleLink.getAttribute("href") == 'cute.css'){
        console.log("style = cute.css")
        styleLink.setAttribute("href", "normal.css");
        if(soundOn() == true){audio("normal")}
        faviconLink.setAttribute("href", "favicon.png")
        document.cookie = 'theme=normal; path=/*';
        elementThemeButton.innerHTML = "Cute mode!";
    } else {
        console.log("style = normal.css")
        styleLink.setAttribute("href", "cute.css");
        if(soundOn() == true){audio('cute')}
        faviconLink.setAttribute("href", "favicon-cute.png")
        document.cookie = 'theme=cute; path=/*';
        elementThemeButton.innerHTML = "Normal";
    }
    buttonClick()
}

let cuteAudio = new Audio('cute.mp3');
let normalAudio = new Audio('normal.mp3');

function audio(type){
    cuteAudio.pause()
    cuteAudio.currentTime = 0;
    normalAudio.pause()
    normalAudio.currentTime = 0;

    if(type == "cute"){
    cuteAudio.play();
    cuteAudio.loop = true;
    console.log("cute audio start")
    } else {
    normalAudio.play();
    normalAudio.loop = true;
    normalAudio.volume = 0.4;
    console.log("normal audio start")
    }
}

function buttonClick(){
    let audio = new Audio('click.mp3');
    if(soundOn() == true){audio.play();}
}

function audioYes(){
    audio('normal');

    document.getElementById('popup').style.display='none';
    document.getElementById('all').style.display='flex';

    document.location.href = 'http://127.0.0.1:5500/index.html?audio=true';
}

function audioNo(){
    document.getElementById('popup').style.display='none';
    document.getElementById('all').style.display='flex';

    document.location.href = 'http://127.0.0.1:5500/index.html?audio=false';
}

const sidebarItem1 = document.getElementById('active1');
const sidebarItem2 = document.getElementById('none2');
const sidebarItem3 = document.getElementById('none3');

function button1(){
    sidebarItem1.setAttribute('id', 'active1')
    sidebarItem2.setAttribute('id', 'none2')
    sidebarItem3.setAttribute('id', 'none3')

    buttonClick()
    main1.style.display = "block";
    main2.style.display = "none";
    main3.style.display = "none";
}
function button2(){
    sidebarItem1.setAttribute('id', 'none1')
    sidebarItem2.setAttribute('id', 'active2')
    sidebarItem3.setAttribute('id', 'none3')

    buttonClick()
    main1.style.display = "none";
    main2.style.display = "block";
    main3.style.display = "none";
}
function button3(){
    sidebarItem1.setAttribute('id', 'none1')
    sidebarItem2.setAttribute('id', 'none2')
    sidebarItem3.setAttribute('id', 'active3')

    buttonClick()
    main1.style.display = "none";
    main2.style.display = "none";
    main3.style.display = "block";
}

function joke(){

// jokes (array)
const jokes =[]
jokes[0] = `I accidentally set my terminal font to Comic Sans. Now every error message looks like it's about to cry.`;
jokes[1] = `My cybersecurity threat model: hackers and also people who don't appreciate my desktop icons arranged by color.`;
jokes[2] = `My commit message: "Fixed it"; my future self: "Lies."`;
jokes[6] = `My code is like a femboy: soft, cute and occasionally breaks for no reason. Then I cry, fix it, and pretent it never happend. >~<`;
jokes[4] = `Why was the math book sad? Too many problems!`;
jokes[5] = `Parallel lines have so much in common… too bad they'll never meet.`;
jokes[3] = `How do you know the moon is broke? It's down to its last quarter.`;
jokes[7] = `Why did the student eat the math homework? Teacher said it was a piece of cake`;

    const jokeElement = document.getElementById("joke-text");
    jokeElement.innerHTML = jokes[jokeNumber];
    jokeNumber = jokeNumber + 1;
    if(jokeNumber > 7){
        jokeNumber = 0;
    }
}
