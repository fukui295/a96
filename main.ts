input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
})
