let a = prompt("Ismlar kiriting, faqat orasida bitta bo'sh joy bo'lsin!")
let massiv = a.split(" ")

let j = 0
for (let i of massiv) {
    j++
    alert(j+". "+i+"\n Ism uzunligi: "+i.length)
}



