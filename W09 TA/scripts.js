window.onload = () => {
    const playNote = e => {
        const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const note = document.querySelector(`div[data-key="${e.keyCode}"]`);

        note.classList.add('playing');
        sound.currentTime = 0;
        sound.play();

        setTimeout(() => {
            note.classList.remove('playing');
        }, 500)
    }

    window.addEventListener('keydown', playNote);
}


