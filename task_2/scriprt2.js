//================================= Задача 2 ====================================
// Задача 2. Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. При натисканні на зелену стрілку спортсмен переміщається у список для змагань. При натисканні на червону стрілку спортсмен переміщається у загальний список.

class ChooseSportsmenList {
  constructor(sportsmenNames) {
    this.sportsmenNames = sportsmenNames
    this.list = []
    this.arrowGreen = "../img/green.jpg"
    this.arrowRed = "../img/red.jpg"
  }
  showGeneralSportmenList(sportsman, img) {
    img.src = this.arrowGreen
    sportsman.append(img)
    img.onclick = this.chooseSportsmenList.bind(this, sportsman, img)
    document.querySelector(".task2__block").append(sportsman)
  }
  chooseSportsmenList(sportsman, img) {
    img.src = this.arrowRed
    sportsman.append(img)
    img.onclick = this.showGeneralSportmenList.bind(this, sportsman, img)
    document.querySelector(".task2__block2").append(sportsman)
  }
  createList() {
    const allLists = document.createElement("div")
    allLists.classList.add("allLists")

    const divContainer = document.createElement("div")
    divContainer.className = "task2-container"
    allLists.append(divContainer)

    const title = document.createElement("h3")
    title.className = "task2__title"
    title.innerText = "Загальний список"
    divContainer.append(title)

    this.divBlock = document.createElement("div")
    this.divBlock.className = "task2__block"
    divContainer.append(this.divBlock)

    for (let i = 0; i < this.sportsmenNames.length; i++) {
      this.sportsman = document.createElement("div")
      this.sportsman.innerText = this.sportsmenNames[i]
      this.sportsman.className = "sportsman"
      this.img = document.createElement("img")
      this.img.className = "img"
      this.sportsman.append(this.img)
      this.img.src = this.arrowGreen
      this.img.onclick = this.chooseSportsmenList.bind(
        this,
        this.sportsman,
        this.img
      )
      this.divBlock.append(this.sportsman)
    }

    this.divContainer2 = document.createElement("div")
    this.divContainer2.className = "task2-container2"
    allLists.append(this.divContainer2)

    const title2 = document.createElement("h3")
    title2.className = "task2__title"
    title2.innerText = "Обранні для змагання"
    this.divContainer2.append(title2)

    this.divBlock2 = document.createElement("div")
    this.divBlock2.className = "task2__block2"
    this.divContainer2.append(this.divBlock2)

    return allLists
  }

  render(containerSelector) {
    const targetContainer = document.querySelector(containerSelector)
    targetContainer.append(this.createList())
  }
}

const namesList = [
  "John Depp",
  "Sara Wik",
  "Den Miro",
  "Alan woo",
  "Olga Sich",
  "Ivan Hal",
]

let test = new ChooseSportsmenList(namesList)
test.render("#task2")

