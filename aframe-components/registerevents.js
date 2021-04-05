AFRAME.registerComponent('registerevents', {
    init: function ()
    {
        let marker = this.el;

        marker.addEventListener('markerFound', function() {
            markerVisible[ marker.id ] = true;
            // console.log( markerVisible );
        });

        marker.addEventListener('markerLost', function() {
            markerVisible[ marker.id ] = false;
            // console.log( markerVisible );
        });
    }
});