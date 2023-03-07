const destinationSection = document.createElement("section")
document.body.appendChild(destinationSection)
destinationSection.classList.add("destinationSection")

    //create new object
    const urlObject = new URLSearchParams(window.location.search)
    console.log(urlObject)

    const idParam = urlObject.get("id")
    console.log(idParam)
    fetch(`data/${idParam}.json`).then(res=> res.json()).then(data=>{
        // console.log(data.title)
        // for (let i = 0; i < data.length; i++) {
            const imageWrapper = document.createElement("div")
            destinationSection.appendChild(imageWrapper)
            imageWrapper.classList.add("imageWrapper")

            imageWrapper.innerHTML = 
            `<figure class= "apartment_figure" id="${data.id}">
                <span class="apartment_button">
                <i class= "${
                    localStorage.getItem(data.id)
                    ? "fa-solid fa-heart"
                    : "fa-regular fa-heart"
                }">
                </i> Favorite
                </span>
                <img src= "${data.image}" alt=""/>
            </figure>`


            // const favoriteSpan = document.createElement("span")
          
            // const imagePart = document.createElement("img")
            // imageWrapper.append(imagePart, favoriteSpan)
            // imagePart.src= data.image
            // imagePart.classList.add("imagePart")


            const informationWrapper = document.createElement("div")
            destinationSection.appendChild(informationWrapper)
            informationWrapper.classList.add("informationWrapper")

            const destinationPart = document.createElement("h2")
            destinationPart.textContent = data.destination
            destinationPart.classList.add("destinationPart")

            const titlePart = document.createElement("h1")
            titlePart.textContent = data.title
            titlePart.classList.add("titlePart")


            const subtitlePart = document.createElement("h4")
            subtitlePart.textContent = data.subtitle
            subtitlePart.classList.add("subtitlePart")


            const textPart = document.createElement("p")
            textPart.textContent = data.text


            const facilitiesPart = document.createElement("ul")
            facilitiesPart.textContent = "Facilitier"
            facilitiesPart.classList.add("facilitiesPart")


           for (let i = 0; i < data.facilities.length; i++) {
            let facilitiesCases = document.createElement("li")
            facilitiesPart.appendChild(facilitiesCases)
            facilitiesCases.textContent = data.facilities[i]
            facilitiesCases.classList.add("facilitiesCases")
            
           }

            informationWrapper.append(destinationPart, titlePart, subtitlePart, textPart, facilitiesPart)

            
    })


    // document.querySelector(".imageWrapper")?.addEventListener("click", (e) => {
    //     console.log(e)
    //     if(e.target.classList.contains("fa-heart")){
    //         console.log(e.target)
    //         let destinationsId = e.target.closest("figure").attributes.id.value
    //         console.log(destinationsId)
    //         if(!localStorage.getItem(destinationsId, destinationsId)){
    //             localStorage.setItem(destinationsId, destinationsId)
    //             e.target.classList.add("fa-solid")
    //         }else{
    //             localStorage.removeItem(destinationsId)
    //             e.target.classList.remove("fa-solid")
    //             e.target.classList.add("fa-regular")
    //         }
    //     }
    // })