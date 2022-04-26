//Header 
const langEl = document.querySelector('.langwrap');
const langLink = document.querySelectorAll('.lang-anchor');
const titleEl = document.querySelector('.main-title');
const introTextEl = document.querySelector('.intro-text');
const titleDifficulty = document.querySelector('.difficulty-text');
const titleTheme = document.querySelector('.theme-text');
const titleIteration = document.querySelector('.iteration-text');
const titleGenerate = document.querySelector('.generate-text');
const buttonGenerate = document.querySelector('.cta');
const difficulty1 = document.querySelector('.difficulty1');
const difficulty2 = document.querySelector('.difficulty2');
const difficulty3 = document.querySelector('.difficulty3');
const theme1 = document.querySelector('.theme1');
const theme2 = document.querySelector('.theme2');
const theme3 = document.querySelector('.theme3');
const theme4 = document.querySelector('.theme4');
const theme5 = document.querySelector('.theme5');
const footerText = document.querySelector('.footer-text');
const difficulties = document.querySelectorAll('.difficulty');
const themes = document.querySelectorAll('.theme');
const iterations = document.querySelectorAll('.iteration');

const resultTitle = document.querySelector('.result-title');
const selectedCateg = document.querySelector('.selected-c')
const selectedDiff = document.querySelector('.selected-d');
const selectedIt = document.querySelector('.selected-i');
const warningMessage = document.querySelector('.warning-message');
const coolMessage = document.querySelector('.cool-message');



/*Change content on click languages */
changeContent(langLink[0]);

langLink.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active')
        el.classList.add('active');
        changeContent(el);       
    })
})



function changeContent(el) {
     attr = el.getAttribute('language');
    titleEl.textContent = dataText[attr].title;
    introTextEl.textContent= dataText[attr].introtext;
    titleDifficulty.textContent = dataText[attr].titledifficulty;
    titleTheme.textContent = dataText[attr].titletheme;
    titleIteration.textContent = dataText[attr].titlenumbers;
    titleGenerate.textContent = dataText[attr].titlefinal;
    buttonGenerate.textContent = dataText[attr].buttontext;
    theme1.textContent = dataText[attr].athletes;
    theme2.textContent = dataText[attr].intellectuals;
    theme3.textContent = dataText[attr].historic;
    theme4.textContent = dataText[attr].fictional;
    theme5.textContent = dataText[attr].series;
    difficulty1.textContent = dataText[attr].easy;
    difficulty2.textContent = dataText[attr].medium;
    difficulty3.textContent = dataText[attr].hard;
    footerText.innerHTML = dataText[attr].footertext;
    resultTitle.textContent = dataText[attr].resulttitle;
    selectedCateg.textContent = resultText[attr].selectedc;
    selectedDiff.textContent = resultText[attr].selectedd;
    selectedIt.textContent = resultText[attr].selectedi;
    warningMessage.innerHTML = resultText[attr].warningmessage;
    coolMessage.innerHTML = coolmessageObj[attr].cool1;

}

/*Selecting difficulties */
difficulties.forEach(difficulty => {
    difficulty.addEventListener('click', () => {
        difficulties.forEach(diff => {
            diff.classList.remove('active');
        })
        difficulty.classList.add('active');
    })
})

/*selecting the themes */

themes.forEach(theme => {
    theme.addEventListener('click', () => {
        theme.classList.toggle('active');
    })
})

/*Selecting iterations */
iterations.forEach(iteration => {
    iteration.addEventListener('click', () => {
        iterations.forEach(iti => {
            iti.classList.remove('active');
        })
        iteration.classList.add('active');
    })
})



//On click generate name
buttonGenerate.addEventListener('click', () =>  {

    //validation : 
    //validation difficulty chosen avec alerte ou span en pseudo element after
    //validation categories chosen avec alerte
    //validation iterations chosen avec alerte

    //display le loader, fonction qui le display, attends 2secondes puis remove display avec classe
    //puis display le display-right: d'abord construit le texte etc et à la fin ajoute classe au display right
    //Dans la fonction de display: tout afficher
    updateCoolMessage()
})

function updateCoolMessage() {
    var sizeMessage = Object.keys(coolmessageObj.english).length;
    var msg = "cool" + Math.floor(Math.random() * (sizeMessage - 1 + 1));
    if (msg=="cool0") {
        msg="cool3";
    }
    coolMessage.innerHTML = coolmessageObj[attr][msg];
}

 