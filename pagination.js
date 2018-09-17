// Fetch and display a list of characters and their names from the https://swapi.co/api/people/ API endpoint. At the top of the results display a list of available page numbers. When a page number is clicked fetch and display the results from that page. Use the count property of API results to calculate how many page links are required


//fetch("https://swapi.co/api/people/?page=10")


function fetchCharacters(url){
  fetch(url)
  .then(response => response.json())
  .then(body => {
    displayCharacters(body.results)
  })
}

function displayCharacters(results){
  const characters = results.map(character => {
    return `<li>${character.name}</li>`
  })
  characterElement.innerHTML = characters.join("")
}




fetchCharacters("https://swapi.co/api/people/")

const bodyElement = document.querySelector("body")
const characterElement = document.querySelector(".characters")

bodyElement.addEventListener("click", event => {
  if (event.target.className === "page"){
    const pageString = `?page=${event.target.textContent}`
    fetchCharacters(`https://swapi.co/api/people/${pageString}`)
  }
})
