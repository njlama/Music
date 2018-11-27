let root = document.getElementById('root');
// header //
let header = document.createElement('header');
header.setAttribute("id", 'header');

let headerInnerDiv = document.createElement("div");
headerInnerDiv.setAttribute("id", 'headerInnerDiv');
header.appendChild(headerInnerDiv);

let navLeft = document.createElement('div');
let navRight = document.createElement('div');
navLeft.setAttribute("id", 'navLeft');
navRight.setAttribute("id", 'navRight');
headerInnerDiv.appendChild(navLeft);
headerInnerDiv.appendChild(navRight);

let navLeftSpan = document.createElement('p');
navLeft.appendChild(navLeftSpan);
navLeftSpan.innerHTML = "Music";

let navRightUl = document.createElement('ul');
navRightUl.setAttribute("id", 'navList');
navRight.appendChild(navRightUl);


let navListArray = ['Premium', 'Help', 'Download', 'Sign Up'];

for (let i = 0; i < navListArray.length; i++){
    let navRightList = document.createElement('li');
    navRightList.setAttribute("id", 'navListItem'+[i]);
    navRightUl.appendChild(navRightList);
    navRightList.innerHTML = navListArray[i];
}
//<---- Header ---->///

//---- Jumbotron Image ---//
let imagePath = "../images/";
let jumbotronImage = document.createElement('img');
jumbotronImage.src = imagePath+'person.png';
jumbotronImage.alt = "person image";
jumbotronImage.className = 'jumbotronImage';
//<---- Jumbotron Image --->//

//---- Jumbotron ---//

let container = document.createElement('div');
container.setAttribute("class", "mainContainer");
root.appendChild(container);

container.appendChild(header);

let innerContainer = document.createElement('div');
innerContainer.setAttribute("class", "innerContainer");
container.appendChild(innerContainer);

let imageDiv = document.createElement('div');
imageDiv.setAttribute("class", "imageDiv");
innerContainer.appendChild(imageDiv);
imageDiv.appendChild(jumbotronImage);

let mainTextContainer = document.createElement('div');
mainTextContainer.setAttribute("class", "mainTextContainer");
innerContainer.appendChild(mainTextContainer);

let termsDiv = document.createElement('div');
termsDiv.setAttribute("class", "termsDiv");
container.appendChild(termsDiv);
let terms =document.createElement('a');
termsDiv.appendChild(terms);
terms.innerHTML = '* Terms and conditions apply';
terms.setAttribute("class", "terms");

//<---- Jumbotron ---->//

//<---- Text in Container ---->//
let textContainerOne = document.createElement('div');
textContainerOne.setAttribute("class", "upperTextContainer");
mainTextContainer.appendChild(textContainerOne);
let upperText = document.createElement('h1');

upperText.innerHTML = 'Listen Music. Be happy.';
textContainerOne.appendChild(upperText);

let textContainerTwo = document.createElement('div');
textContainerTwo.setAttribute("class", "lowerTextContainer");
mainTextContainer.appendChild(textContainerTwo);

let lowerDivOne = document.createElement('div');
textContainerTwo.appendChild(lowerDivOne);
lowerDivOne.setAttribute("class", "lowerText");

let lowerText = document.createElement('h2');
lowerText.innerHTML = "Premium sounds amazing. Enjoy free music anytime.";
lowerDivOne.appendChild(lowerText);

let lowerDivTwo = document.createElement('div');
textContainerTwo.appendChild(lowerDivTwo);
lowerDivTwo.setAttribute("class", "lowerText");

let premiumButtonLink = document.createElement('a');
premiumButtonLink.setAttribute("href", "#");
premiumButtonLink.innerHTML = "Go Sound Premium";
lowerDivTwo.appendChild(premiumButtonLink);

// <--- Second Section ---> //
let section = document.createElement('section');
root.appendChild(section);

let startListeningDiv = document.createElement('div');
section.appendChild(startListeningDiv);
startListeningDiv.setAttribute("class", "startListeningDiv");

let sectionH1 = document.createElement('h1');
sectionH1.innerHTML = "Looking for Music?";
startListeningDiv.appendChild(sectionH1);

let sectionPara = document.createElement('p');
sectionPara.innerHTML = "Start listening to new best release";
startListeningDiv.appendChild(sectionPara);

let sectionLink = document.createElement('a');
sectionLink.innerHTML = "Go listen music";
startListeningDiv.appendChild(sectionLink);

let images = [
    {url: imagePath+"ariana.png", song: "One last roblem", singer: "Ariana"},
    { url: imagePath+"beyonce.png", song: "Single Ladies", singer: "Beyonce"},
    { url: imagePath+"charli.png", song: "Hello hello", singer: "charli"},
    { url: imagePath+"mjbad.png", song: "Beat it", singer: "MJ"},
    { url: imagePath+"taylor.png", song: "Shake it off", singer: "Taylor"},
    { url: imagePath+"shakira.png", song: "Hips dont lie", singer: "Sakira"},
];

let albumDiv = document.createElement('div');
section.appendChild(albumDiv);
albumDiv.setAttribute("class", "albumDiv");

let ul = document.createElement('ul');
ul.setAttribute("id", "list");
albumDiv.appendChild(ul);


for ( let i=0; i < images.length; i++){
    let li = document.createElement('li');
    ul.appendChild(li);

    let figure = document.createElement('figure');
    figure.className = "card";
    li.appendChild(figure);

    let figCaption = document.createElement('figcaption');
    figCaption.className = 'content-detail';
    li.appendChild(figCaption);

    let song = document.createElement('p');
    song.innerHTML = images[i].song;
    figCaption.appendChild(song);

    let singer = document.createElement('p');
    singer.innerHTML = images[i].singer;
    figCaption.appendChild(singer);

    let mImage = document.createElement('img');
    mImage.src = images[i].url;
    mImage.className = [i];
    // mImage.addEventListener("mouseover", imageMouseOver);
    // mImage.addEventListener("mouseout", imageMouseOut);
    figure.appendChild(mImage);
}

// <--- Footer --->

let footer = document.createElement("footer");
root.appendChild(footer);

let aboutMainDiv = document.createElement('div');
footer.appendChild(aboutMainDiv);
aboutMainDiv.setAttribute("class", "aboutMainDiv");

let footerMediaIcons = document.createElement('div');
footer.appendChild(footerMediaIcons);
footerMediaIcons.setAttribute("class", "footerIcons");

// <--- inner Div --->//
let footerDiv1 = document.createElement('div');
aboutMainDiv.appendChild(footerDiv1);
let footerDiv1Name = document.createElement('h5');
footerDiv1Name.innerHTML = "Music";
footerDiv1.appendChild(footerDiv1Name);

let footerDiv2 = document.createElement('div');
aboutMainDiv.appendChild(footerDiv2);
let footerDiv2Name = document.createElement('h5');
footerDiv2Name.innerHTML = "Developer";
footerDiv2.appendChild(footerDiv2Name);

let footerDiv3 = document.createElement('div');
aboutMainDiv.appendChild(footerDiv3);
let footerDiv3Name = document.createElement('h5');
footerDiv3Name.innerHTML = "GitHub";
footerDiv3.appendChild(footerDiv3Name);

let footerDiv4 = document.createElement('div');
aboutMainDiv.appendChild(footerDiv4);
let footerDiv4Name = document.createElement('h5');
footerDiv4Name.innerHTML = "Projects";
footerDiv4.appendChild(footerDiv4Name);

// adding <p> in inner footer div 
let paraAbout = document.createElement("p");
paraAbout.innerHTML = "NJ Lama";
footerDiv2.appendChild(paraAbout);

let paraRepo = document.createElement("p");
paraRepo.innerHTML = "My Repos";
footerDiv3.appendChild(paraRepo);

let paraProject1 = document.createElement("p");
paraProject1.innerHTML = "Momento Blog";
footerDiv4.appendChild(paraProject1);

let paraProject2 = document.createElement("p");
paraProject2.innerHTML = "Weather App";
footerDiv4.appendChild(paraProject2);

// Adding media icon in footer 
let icons = [ 
    imagePath+"facebook.png",
    imagePath+"instagram.png",
    imagePath+"linkedin.png"
];

icons.forEach(each => {
    let icon = document.createElement("img");
    icon.src = each;
    footerMediaIcons.appendChild(icon);
})

// Change header color on scroll
function toggleHeaderBackgroundColor() {
    window.addEventListener('scroll', (e)=>{
    
        const lastScrollPosition = window.scrollY;
        if(lastScrollPosition > 100) {
            header.style.background = "rgba(0,0,0, 0.7)";    
        } else {    
            header.style.background = "transparent";
        }
    })
}
toggleHeaderBackgroundColor();




