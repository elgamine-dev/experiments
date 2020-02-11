const Stage = require('stage-js/platform/web')

Stage(function(stage, display)  {
    stage.viewbox(300,200)

    const box = Stage.image('box').appendTo(stage)

    box.pin('align', 0.5)

    box.on('click', function(point) {
        this.tween().ease('bounce').pin({
            scaleX: 1.5,
            scaleY: 1.5
        })
    })
})

Stage({
    image: "/images/cookie.png",
    textures: {
        box: {x:0, y:0, width:128, height:128}
    }
})