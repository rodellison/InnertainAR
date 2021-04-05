const sceneNames = ['lynxscene', 'splaterellascene','electricswingscene', 'derbyscene']
//WineClubScene model broken at moment, so not included.. likely due to textures
var totalscenes = sceneNames.length;
var basePositionLynx = '-1 0 0.25'
var basePositionSplaterella = '0 0 1'
var basePositionElectricSwing = '1 0 0.25'
var basePositionDerby = '0 0 -1'
var basePositionCircleBars = '0 -0.01 0'

var baseRotationLynx = '0 90 0'
var baseRotationSplaterella = '0 180 0'
var baseRotationDerby = '0 0 0'
var baseRotationElectricSwing = '0 -90 0'
var baseRotationCircleBars = '-90 0 0'

var basePositionParticles = '0 0 0'

var directionalLightPosition = '0 5 4'
var pointLightPosition = '0 2 4'
var endParticlePosition = '0 5 4'

var contextAudio
var isPlaying
var playing = false;
//var audioElementCreated=false;
var audioElement;



//Simple function here to perform a type writer effect for filling in text in the Top Banner area
var typewritercounter = 0
var topbannertext = ''
const typewriterspeed = 10
const setTextTypeWriter = () => {

    if (typewritercounter < topbannertext.length) {
        document.getElementById("debugText").innerHTML += topbannertext.charAt(typewritercounter);
        typewritercounter++;
        setTimeout(setTextTypeWriter, typewriterspeed);
    }
}
const setTextDebug = (textToShow) => {

        document.getElementById("debugText").innerHTML = textToShow;

}

const degrees_to_radians= (degrees) => {
    var pi = Math.PI;
    return degrees * (pi/180);
}




