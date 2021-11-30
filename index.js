window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const keys = document.querySelectorAll('.container div');

    keys.forEach((key, index) => {
        key.addEventListener('click', function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
        });
    });
});