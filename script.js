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
checkCategories();
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
    selectedCateg.innerHTML = resultText[attr].selectedc;
    selectedDiff.innerHTML = resultText[attr].selectedd;
    selectedIt.innerHTML = resultText[attr].selectedi;
    warningMessage.innerHTML = resultText[attr].warningmessage;
    coolMessage.innerHTML = coolmessageObj[attr].cool1;
    getTheParameters();

}

/*Selecting difficulties */
difficulties.forEach(difficulty => {
    difficulty.addEventListener('click', () => {
        difficulties.forEach(diff => {
            diff.classList.remove('active');
        })
        difficulty.classList.add('active');
        const spanDiff = document.querySelector('.span-diff');
        spanDiff.classList.remove('spanned');

    })
})

/*selecting the themes */

themes.forEach(theme => {
    theme.addEventListener('click', () => {
        theme.classList.toggle('active');
        var checkcatty =0;
        themes.forEach(theme => {
            if(theme.classList.contains('active')) {
                checkcatty ++;
            }
        })
        console.log(checkcatty);
        if(checkcatty ==0) {
            const spanCat = document.querySelector('.span-cat');
            spanCat.classList.add('spanned');
            
        } else {
            const spanCat = document.querySelector('.span-cat');
            spanCat.classList.remove('spanned');
        }
        
    })
    
    
    
})

/*Selecting iterations */
iterations.forEach(iteration => {
    iteration.addEventListener('click', () => {
        iterations.forEach(iti => {
            iti.classList.remove('active');
        })
        iteration.classList.add('active');
        const spanIte= document.querySelector('.span-ite');
        spanIte.classList.remove('spanned');
    })
})











//On click generate name
buttonGenerate.addEventListener('click', () =>  {
    checkDifficulty();
    checkCategories();
    checkIterations();
    console.log(checkdiff, checkcat, checkite)
    if(checkdiff == 0) {
        createSpanDifficulty();
    } else if (checkcat == 0) {
        createSpanCategories();
    } else if (checkite ==0) {
        createSpanIte();
    } else {
        displayResults();
    }
    


    
})





function updateCoolMessage() {
    var sizeMessage = Object.keys(coolmessageObj.english).length;
    var msg = "cool" + Math.floor(Math.random() * (sizeMessage - 1 + 1));
    if (msg=="cool0") {
        msg="cool3";
    }
    coolMessage.innerHTML = coolmessageObj[attr][msg];
}

 

/*Validation form */ 


/*Validation Difficulty */ 

function checkDifficulty() {
    checkdiff = 0;
    difficulties.forEach(difficulty => {
        
        if(difficulty.classList.contains('active')) {
            checkdiff ++;
        } 
        
    })
    return checkdiff;
}


function createSpanDifficulty() {
    const spanDiff = document.querySelector('.span-diff');
    spanDiff.textContent = validationForm[attr].difficultychosen;
    spanDiff.classList.add('spanned');
    introTextEl.scrollIntoView({behavior: "smooth"});
    
}


/*Validation Categories */

function checkCategories() {
    checkcat = 0;
    themes.forEach(theme => {
        
        if(theme.classList.contains('active')) {
            checkcat ++;
        } 
        
    })
    return checkcat;
}

function createSpanCategories() {
    const spanCat = document.querySelector('.span-cat');
    spanCat.textContent = validationForm[attr].categoriechosen;
    spanCat.classList.add('spanned');
    introTextEl.scrollIntoView({behavior: "smooth"});
}

/*Validation iteration */

function checkIterations() {
    checkite = 0;
    iterations.forEach(ite => {
        
        if(ite.classList.contains('active')) {
            checkite ++;
        } 
        
    })
    return checkite;
}


function createSpanIte() {
    const spanIte = document.querySelector('.span-ite');
    spanIte.textContent = validationForm[attr].iterationchosen;
    spanIte.classList.add('spanned');
    introTextEl.scrollIntoView({behavior: "smooth"});
    
}

/* Display the content */

function displayResults() {
    disabledClick();


    console.log("validation form validated ! ");
    const contentRight = document.querySelector('.content-right');
    contentRight.scrollIntoView({behavior: "smooth"});
    const displayRight = document.querySelector('.display-right');
    displayRight.style.opacity = 0;
    displayContent();
        //display le loader, fonction qui le display, attends 2secondes puis remove display avec classe
    //puis display le display-right: d'abord construit le texte etc et à la fin ajoute classe au display right
    //Dans la fonction de display: tout afficher
}

function displayContent() {

    
    displayLoader();
    setTimeout(removeLoader, 2000);
    setTimeout(displayRight, 2000);
}

function displayLoader() {
    const loader = document.querySelector('.loader');
    loader.classList.add('displayed');
}
function removeLoader() {
    const loader = document.querySelector('.loader');
    loader.classList.remove('displayed');
}

function displayRight() {
    getTheParameters();
    createResults();
    opacityDisplayRight();

}


function opacityDisplayRight() {
    var counter = 0;

    
    myInterval = setInterval(function() {
        const displayRight = document.querySelector('.display-right');
        displayRight.style.opacity = (counter/100);
        counter++;
        if (counter > 100) {
            clearInterval(myInterval);
        }
    },10)
}

function getTheParameters() {
    //level
    // themes, iterations , difficulties
    selectedCateg.innerHTML = resultText[attr].selectedc;
    selectedDiff.innerHTML = resultText[attr].selectedd;
    selectedIt.innerHTML = resultText[attr].selectedi;


    difficulties.forEach(difficulty => {
        if(difficulty.classList.contains('active')) {
            textDiffic = difficulty.textContent;
            selectedDiff.innerHTML += textDiffic;
        }
    })
    themes.forEach(theme => {
        if(theme.classList.contains('active')) {
            textTheme = theme.textContent;
            selectedCateg.innerHTML += textTheme + "  |  ";
        }
    })
    iterations.forEach(iteration => {
        if(iteration.classList.contains('active')) {
            textIteration = iteration.textContent;
            selectedIt.innerHTML += textIteration;
        }

    })
    
}



//disbled click
function disabledClick() {
    buttonGenerate.classList.add('disable');
    document.body.classList.add('waiting');
    setTimeout(enableClick, 2000)
}

function enableClick() {
    buttonGenerate.classList.remove('disable');
    document.body.classList.remove('waiting')
}



function createResults() {
    console.log("createresults");
    //créer les résultats 
    // On peut créer 3 sous-fonctions.
}







//reset all parameters 
const resetBtn = document.querySelector('.reset-btn');
const generateBtn = document.querySelector('.generate-btn');

resetBtn.addEventListener('click', () => {
    titleDifficulty.scrollIntoView({behavior: "smooth"});
    difficulties.forEach(difficulty => {
        difficulty.classList.remove('active');
    })
    iterations.forEach(iteration => {
        iteration.classList.remove('active');
    })
    themes.forEach(theme => {
        theme.classList.remove('active');
    })
    
})
generateBtn.addEventListener('click', () => {

    createResults();
})

// si ça ne marche pas avc juste create results, relancer toute la machine
