// document.addEventListener("DOMContentLoaded", function() {
    // const apartmentsforRent_section = document.querySelector(".apartments_forRent")
    // const section_header = document.createElement("h2")
    // apartmentsforRent_section.appendChild(section_header)
    // section_header.textContent = "Apartments for rent"


    const apartmentsList = document.querySelector(".apartmentsList")
    fetch('data/destinations.json').then(response => response.json()).then(data => {
      
            // image.src = element.picture_Src
        for (let i = 0; i < data.destinations.length; i++) {


            apartmentsList.innerHTML += 
            `<figure class= "apartment_figure">
                <img src= "${data.destinations[i].image}" alt=""/>
                <div class="more_div">
                    <button class="apartment_button"><i class="fa-solid fa-heart"></i></button>
                    <a href="destination.html?id=${data.destinations[i].id}" class="link"> More
                    </a>
                </div>
            </figure>`
            // console.log(data.destinations[1].image)
            // let firstRowDivWrapper = document.createElement("div")
            // firstRowSection.appendChild(firstRowDivWrapper)
            // firstRowDivWrapper.classList.add("firstRowDivWrapper")

            // let image = document.createElement("img")
            // firstRowDivWrapper.appendChild(image)
            // image.src= data.destinations[i].image

            // image.classList.add("image")

            // let firstLittleDiv = document.createElement("div")
            // firstRowDivWrapper.appendChild(firstLittleDiv)

            // let favorite = document.createElement("button")
            // firstLittleDiv.appendChild(favorite)
            // favorite.innerHTML = '<a><i class="fa-solid fa-heart"></i></a>'

            // let more_link = document.createElement("a")
            // firstLittleDiv.appendChild(more_link)
            // more_link.textContent = "More"
            // more_link.href= `destination.html?id=${data.destinations[i].id}`
            
            
        }
    }).catch(error => console.error(error));



   
//     const secondRowSection = document.createElement("section")
//     apartmentsforRent_section.appendChild(secondRowSection)
//     secondRowSection.classList.add("secondRowSection")
// fetch('data/destinations.json').then(response => response.json()).then(data => {
      
   
//     for (let i = 4; i < data.destinations.length; i++) {
//         console.log(data.destinations[1].image)
//         let secondRowDivWrapper = document.createElement("div")
//             secondRowSection.appendChild(secondRowDivWrapper)
//             secondRowDivWrapper.classList.add("secondRowDivWrapper")

//             let image = document.createElement("img")
//             secondRowDivWrapper.appendChild(image)
//             image.src= data.destinations[i].image
//             image.classList.add("image")

//             let secondLittleDiv = document.createElement("div")
//             secondRowDivWrapper.appendChild(secondLittleDiv)
            
//             let favorite = document.createElement("button")
//             secondLittleDiv.appendChild(favorite)
//             favorite.innerHTML = '<a><i class="fa-solid fa-heart"></i></a>'

//             let more_link = document.createElement("a")
//             secondLittleDiv.appendChild(more_link)
//             more_link.textContent = "More"
//             more_link.href= `destination.html?id=${data.destinations[i].id}`
//     }
// }).catch(error => console.error(error));


// })




