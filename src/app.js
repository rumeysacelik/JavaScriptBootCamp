console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarDun= 9.20
let dolarBugun = 9.30

{
    let dolarDun= 9.10
}

console.log(dolarDun)

const euroDun = 11.2
// euroDun = 11 //bunu yapamıyoruz

console.log(euroDun)

//camelCase
//array
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
    
}
console.log("</ul>")


console.log(konutKredileri)