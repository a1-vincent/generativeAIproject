// main.js

const loadingSpan = document.querySelector('span.loading');
const button = document.querySelector('button');
const input = document.querySelector('input');
const pTag = document.querySelector('p');
button.addEventListener("click", () => {
    getGeneratedText(`Make a children song with three verses, oen chorus and rhyme scheme AABB ${input.value}$`)
        .then(generatedText => {
            pTag.innerText = generatedText.split("$")[1];
        });
});
