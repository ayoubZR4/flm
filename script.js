const formulaire = document.querySelector("#formulaire")
console.log()
const nameDom = document.querySelector("#name")
console.log()
const descriptionDom = document.querySelector("#description")
console.log()
const imageDom = document.querySelector("#image")
formulaire.addEventListener("submit",(event) => {
    event.preventDefault()
    console.log(nameDom.value)
    const name = nameDom.value
    console.log(name)
    console.log(descriptionDom.value)
    const description = descriptionDom.value
    console.log(description)
    console.log(imageDom.value)
    const image = imageDom.value
    console.log(image)
})
//Liste des elements du DOM
const buttondom = document.querySelector("#addJokeButton")
const jokesdom = document.querySelector("#jokes")
    console.log(jokesdom)
const createCardFromJoke = (joke) => {
   const card = document.createElement("div")
    card.classList.add("joke-container")
    const JokeText = document.createElement("p")
    JokeText.innerText = joke
    console.log(JokeText)
    card.appendChild(JokeText)
    console.log(card)
    jokesdom.appendChild(card)
}
const fetchandaadjoke = () => {
    fetch("https://api.chucknorris.io/jokes/random?category=dev")
    const fetchAndAddJoke = () => {
        fetch("https://api.chucknorris.io/jokes/random?category=dev")
        .then((response) => response.json())
        .then(data => createCardFromJoke(data.value))
    }
    buttonDom.addEventListener("click", () => {
        fetchAndAddJoke()
    })}