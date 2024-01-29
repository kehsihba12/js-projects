const generateMemeBtn = document.querySelector(".meme-gen .generate-meme-btn");
const memeImage = document.querySelector(".meme-gen img");

const memeTitle = document.querySelector(".meme-gen .meme-title");
const memeAuthor = document.querySelector(".meme-gen .meme-author");

const updateDetails = (url,title,author) => {
    memeImage.setAttribute("src", url);
    memeAuthor.innerHTML = author;
    memeTitle.innerHTML = title;

}

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
        updateDetails(data.url,data.author,data.title)
    })

}
generateMemeBtn.addEventListener("click",generateMeme)