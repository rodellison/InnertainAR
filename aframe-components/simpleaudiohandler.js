AFRAME.registerComponent('audiohandler', {
    init: function () {

        let musicButton = document.getElementById("musicbutton");
        let soundAttribute = document.querySelector('[sound]');
        let isSoundLoaded = false;
        let isPlaying = false;

        soundAttribute.addEventListener('sound-loaded', () => {
            musicButton.innerText = "Click/Music";
            isSoundLoaded = true;
            isPlaying = false;

            musicButton.addEventListener('click', () => {

                if (!isPlaying) {
                    soundAttribute.components.sound.playSound();
                    isPlaying = true;
                } else {
                    soundAttribute.components.sound.pauseSound();
                    isPlaying = false;
                }

            });
        });
    },

})
