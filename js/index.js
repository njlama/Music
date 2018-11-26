let root = document.getElementById('root');
// header //
let header = document.createElement('header');
header.setAttribute("id", 'header');
// root.appendChild(header);


let navLeft = document.createElement('div');
let navRight = document.createElement('div');
navLeft.setAttribute("id", 'navLeft');
navRight.setAttribute("id", 'navRight');
header.appendChild(navLeft);
header.appendChild(navRight);

let navLeftSpan = document.createElement('p');
navLeft.appendChild(navLeftSpan);
navLeftSpan.innerHTML = "Sound";

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
let jumbotronImage = document.createElement('img');
jumbotronImage.src = '../images/person.png';
jumbotronImage.alt = "person image";
jumbotronImage.className = 'jumbotronImage';
console.log(jumbotronImage);
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

upperText.innerHTML = 'Go Premium. Be happy.';
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
console.log(section);

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
    "../images/ariana.png",
    "../images/beyonce.png",
    "../images/charli.png",
    "../images/mjbad.png",
    "../images/taylor.png",
    "../images/shakira.png",
];

let albumDiv = document.createElement('div');
section.appendChild(albumDiv);
albumDiv.setAttribute("class", "albumDiv");

let ul = document.createElement('ul');
albumDiv.appendChild(ul);


for ( let i=0; i < images.length; i++){
    let li = document.createElement('li');
    ul.appendChild(li);

    let figure = document.createElement('figure');
    li.appendChild(figure);

    let mImage = document.createElement('img');
    mImage.src = images[i];
    mImage.className = 'image'+[i];
    mImage.className = 'image';
    figure.appendChild(mImage);
}





