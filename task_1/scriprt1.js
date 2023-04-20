//================================= Задача 1 ====================================
// Задача 1. Відображаємо картки товарів, які користувач може вибирати. Вибраний товар має зелену рамку

class Cards {
	constructor({title,img,price}) {
		this.title = title
		this.img = img
		this.price = price
	}
	render(cardsSelector){
		const cardLink = document.createElement('a')
		cardLink.className = "cards__item"
		cardLink.href = "#"

		const cardBlocImg = document.createElement("div")
		cardBlocImg.className = "cards__head"
		cardLink.append(cardBlocImg)

		const cardImg = document.createElement("img")
		cardImg.className = "img-cards"
		cardImg.src = this.img
		cardBlocImg.append(cardImg)

		const cardBody = document.createElement('div')
		cardBody.className = "cards__body"
		cardLink.append(cardBody)

		const cardText = document.createElement('div')
		cardText.className = "cards__text"
		cardText.innerText = this.title
		cardBody.append(cardText)

		const cardPrice = document.createElement('span')
		cardPrice.className = "cards__price"
		cardPrice.innerText = this.price
		cardBody.append(cardPrice)

		const targetCards = document.querySelector(cardsSelector)
		targetCards.append(cardLink)

	}
}


const linkSet = [
  {
    title: "Ноутбук Acer-Aspire-7 A715",
    img: "../img/Screenshot_1.jpg",
    price: "39 900 ₴",
  },
  {
    title: "Ноутбук Asus X515",
    img: "../img/Screenshot_2.jpg",
    price: "19 900 ₴",
  },
  {
    title: "Ноутбук Lenovo IdeaPad 1 15",
    img: "../img/Screenshot_3.jpg",
    price: "13 999 ₴",
  },
  {
    title: "Ноутбук Apple MacBook M1",
    img: "../img/Screenshot_4.jpg",
    price: "39 999 ₴",
  },
]

	for (const item of linkSet) {
		const card = new Cards(item)
		card.render('#cards')
  }
