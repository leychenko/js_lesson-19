//================================= Задача 4 ==============================
// Задача 4.Сяючі зорі. Вказана кількість зірочок повинна з’являтися у випадковій частині екрану. Кожна зірка з певним кроком і інтервалом збільшується від мінімального до максимального розміру. Як тільки досягнути максимального розміру зірочка повинна з’являтися у іншій випадковій позиції.

class Stars {
  constructor(countStars, minSize, maxSize) {
    this.countStars = countStars
    this.minSize = minSize
    this.maxSize = maxSize
  }
  getrandomAnimation(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }
  getrandomSize() {
    return (
      this.minSize +
      Math.floor(Math.random() * (this.maxSize - this.minSize + 1))
    )
  }
  getrandomPosition(minV, maxV) {
    return minV + Math.floor(Math.random() * (maxV - minV + 1) + minV) + minV
  }

  createStars() {
    this.star = document.createElement("div")
    this.star.className = "star"
    this.star.style.left = this.getrandomPosition(1, 95) + "%"
    this.star.style.top = this.getrandomPosition(1, 220) + "%"
    this.star.style.scale = this.getrandomSize()
    this.star.style.animationDelay = `1,${this.getrandomAnimation(1, 10)}s`
    this.star.style.animationDuration = `${this.getrandomAnimation(1, 15)}s`
    this.star.style.opacity = this.getrandomAnimation(0, 1)
    container.append(this.star)
   
  }

  render(containerId) {
    this.container = document.getElementById(containerId)
    for (let i = 0; i < this.countStars; i++) {
      this.createStars()
    }
  }
}

let starsShow = new Stars(250, 0, 1.2)
starsShow.render("container")

 setInterval(() => {
   this.star.remove()
	
 }, 2000)