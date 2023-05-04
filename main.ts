let alarm = 0
radio.setGroup(1)
music.setVolume(35)
basic.forever(function () {
    if (input.magneticForce(Dimension.X) < 150) {
        alarm = 0
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
    }
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
    basic.clearScreen()
})
