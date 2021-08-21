document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLocaleLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
    const musicalNotes = document.querySelector('#input').value;

    if( musicalNotes !== '') {
        const composition = musicalNotes.split('');
        playComposition(composition)
    }

});

function playComposition(composition) {
    let wait = 0;

    composition.forEach((musicalNote) => {
        setTimeout(() => {
            playSound(`key${musicalNote}`);
        }, wait)

        wait += 250;
    });
}

function playSound(pressedKey) {
    const audioElement = document.querySelector(`#s_${pressedKey}`);
    const keyElement = document.querySelector(`[data-key="${pressedKey}"]`);

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement) {
        keyElement.classList.add('active');
        
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }
}