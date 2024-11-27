const [shareBtn1, shareBtn2] = document.querySelectorAll(".share-btn-img");
const cardProfile = document.querySelector(".card-profile");
const shareDiv = document.querySelector(".share-div");
const shareDesktop = document.querySelector(".share-desktop");
const mediaQuery = window.matchMedia("(min-width: 600px)");

if (mediaQuery.matches) {
    console.log(mediaQuery.matches)
    cardProfile.classList.remove("hidden")
    shareDiv.classList.add("hidden")

    shareBtn1.addEventListener ("click", () => {
        shareDesktop.classList.toggle("hidden");
    })
}
else{
    console.log(mediaQuery.matches);
    shareDesktop.classList.add("hidden");

    shareBtn1.addEventListener ("click", () => {
        cardProfile.classList.add("hidden")
        shareDiv.classList.remove("hidden")
    })
    
    shareBtn2.addEventListener ("click", () => {
        cardProfile.classList.remove("hidden")
        shareDiv.classList.add("hidden")
    })
}

mediaQuery.addListener(e => {
    if (e.matches) {
        console.log(mediaQuery.matches)
        cardProfile.classList.remove("hidden")
        shareDiv.classList.add("hidden")

        shareBtn1.addEventListener ("click", () => {
            shareDesktop.classList.toggle("hidden");
        })
    }
    else{
        console.log(mediaQuery.matches);
        shareDesktop.classList.add("hidden");

        shareBtn1.addEventListener ("click", () => {
            cardProfile.classList.add("hidden")
            shareDiv.classList.remove("hidden")
        })
        
        shareBtn2.addEventListener ("click", () => {
            cardProfile.classList.remove("hidden")
            shareDiv.classList.add("hidden")
        })
    }
})  
