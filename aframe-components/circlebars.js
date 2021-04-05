AFRAME.registerComponent('circlebarsscene', {
    init: function () {

        // Create element and attributes for model
        const sceneContent = document.getElementById('circlebars')

        sceneContent.setAttribute('animation__rotation', {
            property: 'rotation',
            to: '-90 -360 0',
            loop: true,
            easing: 'linear',
            dur: 5000
        })

    },


})
