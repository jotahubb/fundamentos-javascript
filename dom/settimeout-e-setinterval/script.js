//setTimeout

console.log("antes settimeout")

setTimeout(function() {
    console.log("Testando settimeout")
}, 2000);

console.log("depois settimeout")

setInterval(function () {
    console.log("Testando setInterval")
},  3000)