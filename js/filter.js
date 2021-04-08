const filterItem = document.querySelector(".items");
const filterCard = document.querySelectorAll(".card");

window.onload = ()=>{ //once window loaded
    filterItem.onclick = (selectedItem)=>{ //when user clicked on filterCategory div
        if(selectedItem.target.classList.contains("item")){ //if user click element has .category class
            filterItem.querySelector(".active").classList.remove("active"); //remove the old active class
            selectedItem.target.classList.add("active"); //Add active class chosen by the user
            let filterName = selectedItem.target.getAttribute("data-name");
            filterCard.forEach((card)=>{
                let filterItem = card.getAttribute("data-name");
                if((filterItem == filterName) || filterName == "all"){
                    card.classList.remove("hide");
                    card.classList.add("show");
                }else {
                    card.classList.add("hide");
                    card.classList.remove("show");
                }  
            });
        }
     }

}