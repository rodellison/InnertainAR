AFRAME.registerComponent('markerhandler', {

    init: function () {
        // Set up the tick throttling.
        this.tick = AFRAME.utils.throttleTick(this.tick, 500, this);
    },

    tick:function() {

        if(document.querySelector("a-marker").object3D.visible == true) {
            setTextDebug("One touch to rotate, pinch to scale");
        } else {
            setTextDebug("Scan the Hiro code");
        }
    }


});