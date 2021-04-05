AFRAME.registerComponent('electricswingscene', {
    init: function () {

        const sceneContentMarkerParent = document.getElementById('contentParent')
        this.modelName = 'electricswing';
        // Create element and attributes for model
        const sceneContent = document.createElement('a-entity')
        sceneContent.setAttribute('id', this.modelName)
        sceneContent.setAttribute('gltf-model', '#electroswingmodel')
        sceneContent.setAttribute('position', basePositionElectricSwing)
        sceneContent.setAttribute('rotation', baseRotationElectricSwing)
        sceneContent.setAttribute('visible', 'false')
        sceneContent.setAttribute('shadow', "cast: true; receive: true")

        //this listener fires after the model is loaded, and implements an animated scale up
        sceneContent.addEventListener('model-loaded', () => {

             // Once the model is loaded, we are ready to show it popping in using an animation
            //it was initialized as not visible, but now reduce the scale to minimal, and set visibility true
            //if setAttribute scale not set here before the animation scale up,
            // the model would flash it's original size before scaling up
            sceneContent.setAttribute('scale', '0.001 0.001 0.001')
            sceneContent.setAttribute('visible', 'true')


            sceneContent.setAttribute('animation__scale', {
                property: 'scale',
                from: '0.001 0.001 0.001',
                to: '0.01 0.01 0.01',
                easing: 'easeOutQuad',
                dur: 2000,
            })

            //Run the embedded animations for bringing up the panels, flipping, etc.
            const embeddedSwingAnimation = () => {
                sceneContent.setAttribute('animation-mixer', {
                    clip: '*',
                    clampWhenFinished: false,
                    loop: true,
                })
            }
            embeddedSwingAnimation();
        })
        sceneContentMarkerParent.appendChild(sceneContent)

    },

    remove: function () {

        let thisChildEntity = document.getElementById(this.modelName)
        thisChildEntity.parentNode.removeChild(thisChildEntity);

    }
})
