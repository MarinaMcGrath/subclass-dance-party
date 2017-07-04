var sound1 = new Howl({
    src: ['media/shootingStar.mp3'],
    loop: true
});
var sound2 = new Howl({
    src: ['media/wildThoughts.mp3'],
    loop: true
});
var sound3 = new Howl({
    src: ['media/feels.mp3'],
    loop: true
});
$(function() {
    sound1.play();
})
