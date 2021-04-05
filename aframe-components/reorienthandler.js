AFRAME.registerComponent('reorienthandler', {
    init: function () {

        let contentParent = document.getElementById("contentParentWrapper");
        let reorientButton = document.getElementById("reorientbutton");
        let rotationFlat = "0 0 0";
        let positionFlat = "0 0 0";

        let positionVertical = "0 0 1";
        let rotationVertical = "-90 0 0";

        let rotated = false;

        reorientButton.addEventListener('click', () => {

            if (!rotated) {
                contentParent.setAttribute("rotation", rotationVertical);
                contentParent.setAttribute("position", positionVertical);
                rotated = true;
                this.el.emit("contentReoriented", {value: true});
            } else {
                contentParent.setAttribute("rotation", rotationFlat);
                contentParent.setAttribute("position", positionFlat);
                rotated = false;
                this.el.emit("contentReoriented", {value: false});
            }

        });

    },

})