

let pageTitleElement = document.querySelector(`.page-title`)
// console.log(pageTitleElement)

// modify title to "Movies to Watch!"
pageTitleElement.innerHTML = `Movies to Watch!`

// find the movies
let movieElements = document.querySelectorAll(`.movies-to-watch li`)
// console.log(movieElements[0])

// movieElements[0]

for (let i = 0; i < movieElements.length; i++) {
    let movieElement = movieElements[i]
    // console.log(movieElement)

    // movieElement.innerHTML = `The Martian`
}
    // stored a reference fro the movie list

    let movieList = document.querySelector(`.movies-to-watch`)
    console.log(movieList)

    // insert a new movie at the end of the lsit

    movieList.insertAdjacentHTML(`beforeend`, `
        <li>The Martian</li>
        `)
