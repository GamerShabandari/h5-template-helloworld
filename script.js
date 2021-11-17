const body = document.body




const h1 = document.createElement("h1")
h1.innerText = "Gamer Shabandari"
body.append(h1)




const massaText = document.createElement("p")
massaText.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non, recusandae laboriosam voluptate dolorum quam nisi sunt impedit soluta quia omnis nostrum quis earum fugiat deserunt sit. Perspiciatis, neque harum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem perspiciatis, placeat tempora dignissimos sapiente non, repellat necessitatibus veritatis maiores quaerat iure recusandae vel, vero voluptate id culpa iusto itaque corrupti magni doloribus saepe aliquid cum libero! Vitae minus, laborum aperiam sapiente reprehenderit id mollitia consequatur eos vero nihil enim voluptate."
body.append(massaText)





let favoritMat1 = prompt("vad är din favoritmat?")
let favoritMat2 = prompt("vad är din näst bästa favoritmat?")
let favoritMat3 = prompt("vad är din tredje bästa favoritmat?")


const listaMat = document.createElement("ul")
listaMat.insertAdjacentHTML("beforeend" , "<li>"+ favoritMat1 +"</li>")
listaMat.insertAdjacentHTML("beforeend" , "<li>"+ favoritMat2 +"</li>")
listaMat.insertAdjacentHTML("beforeend" , "<li>"+ favoritMat3 +"</li>")
body.append(listaMat)






console.log("Hello World")