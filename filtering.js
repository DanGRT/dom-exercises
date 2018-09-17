

// Fetch and display a list of Star Wars character names from the https://swapi.co/api/people/ API endpoint. The page contains a text input. When user types text into it, display only characters whose name contains the string typed into the input. When input is empty display all characters. You will probably want to use the filter array method.

function fetchData(url, input){
  fetch(url)
    .then(response => response.json())
    .then(body => {
      displayData(body.results, input);
    })
}

const inputField = document.querySelector("input")
const bodyElement = document.querySelector("body")

bodyElement.addEventListener('input', event => {
  if (event.target.className === "search-input") {
    fetchData("https://swapi.co/api/people/", event.target.value);
  };
});

const charactersContainer = document.querySelector(".characters")

const displayData = (results, input) => {
  let output = results.map(character => character.name);
  if (input != undefined) {
    output = output.filter(character => {
      return character.includes(input);
    });
  }
  output = output.map(characterName => {
    return `<li>${characterName}</li>`
  });
    charactersContainer.innerHTML= output.join("")
  }

  fetchData("https://swapi.co/api/people/")
