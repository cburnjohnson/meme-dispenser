const generateMemeBtn = document.getElementById('generateMeme');
const meme = document.getElementById('meme');

generateMemeBtn.addEventListener('click', generateMeme);

async function generateMeme() {
    try {
        const res = await fetch(
            'https://cors-anywhere.herokuapp.com/https://meme-api.herokuapp.com/gimme'
        );
        const data = await res.json();

        meme.src = data.url;
    } catch (err) {
        console.log(err);
    }
}
