function exibir(num) {
    console.log("A operação resultou em: " + num)
}

function soma(a, b, callback) {
    var op = a + b
    callback(op)
}

function multiplicação(a, b, callback) {
    var op = a * b
    callback(op)
}

soma(4, 4, exibir)
multiplicação(4, 4, exibir)