// side NavBar
let sideNav = document.querySelector('#sideNav');

let sideNavInnerDiv = document.createElement("div");
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
