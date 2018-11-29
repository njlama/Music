// side NavBar
let sideNav = document.querySelector('#sideNav');

let hello = document.createElement("div");
let sideNavInnerDiv = hello;
sideNavInnerDiv.className = "sideNavInnerDiv"
sideNav.appendChild(sideNavInnerDiv);

let appNameDiv = document.createElement("div");
appNameDiv.className = "appNameDiv";
sideNavInnerDiv.appendChild(appNameDiv);

let imagePath = "../images/";
let musicLogo = document.createElement('img');
musicLogo.src = imagePath+"audio.png";

let appName = document.createElement("h3")
appName.className = "appName";
appName.innerHTML = "Music";
appNameDiv.appendChild(musicLogo);
appNameDiv.appendChild(appName);

let sideNavUl = document.createElement("ul");
sideNavInnerDiv.appendChild(sideNavUl);

let sideNavList = ["Search", "Home", "Your Library"];

for (let i = 0; i < sideNavList.length; i++){
    let li = document.createElement("li");
    sideNavUl.appendChild(li);

    switch (i){
        case 0: 
            let searchLogo = document.createElement("img");
            searchLogo.src = imagePath+"search.png";
            searchLogo.className = "navLogo";
            li.appendChild(searchLogo);

            let para1 = document.createElement("p");
            li.appendChild(para1);

            let search = document.createElement("a");
            search.className = "search";
            search.innerHTML = "Search";
            para1.appendChild(search);
            break;

        case 1: 
            let homeLogo = document.createElement("img");
            homeLogo.src = imagePath+"home.png";
            homeLogo.className = "navLogo";
            li.appendChild(homeLogo); 

            let pa2 = document.createElement("p");
            li.appendChild(pa2);

            let homeLink = document.createElement("a");
            homeLink.innerHTML = "Home";
            homeLink.href = "#";
            pa2.appendChild(homeLink);
            break;

        case 2: 
            let libraryLogo = document.createElement("img");
            libraryLogo.src = imagePath+"library.png";
            libraryLogo.className = "navLogo";
            li.appendChild(libraryLogo); 

            let userLibrary = document.createElement("a");
            userLibrary.innerHTML = "Your Library";
            userLibrary.href = "#";
            li.appendChild(userLibrary);
    }
}

// Creating Top Nav Bar for main view 

let topNavBar = document.querySelector(".navBar-mainView");
let genreUl = document.createElement("ul");
genreUl.className = "genre";
topNavBar.appendChild(genreUl);

let genre = ["featured", "pop", "r&b", "country", "comming soon"];

genre.forEach((each, index) => {
    let li = document.createElement("li");
    genreUl.appendChild(li);

    let item = document.createElement("a");
    item.innerHTML = each;
    li.appendChild(item);

    if (index === 0){
        item.className = "active";
    }

    item.addEventListener("click", function(){
        let current = document.getElementsByClassName("active")[0];
        current.className = current.className.replace("active", "");
        this.className = "active";
    })
});

