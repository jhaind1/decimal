let exponent = 0
let n = 0
let input2 = 8
if (input2 > 1) {
    n = 0
    exponent = 1
    while (exponent <= input2) {
        n += 1
        exponent = exponent * 2
        game.splash(n)
    }
} else {
    game.splash(input2)
}
