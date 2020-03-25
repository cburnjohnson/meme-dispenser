const generateMemeBtn = document.getElementById('generateMeme');
const meme = document.getElementById('meme');

generateMemeBtn.addEventListener('click', generateMeme);

async function generateMeme() {
    try {
        const res = await fetch('https://meme-api.herokuapp.com/gimme/1');
        const data = await res.json();

        meme.src = data.memes[0].url;
    } catch (err) {
        console.log(err);
    }
}
