//================================= Задача 3 ====================================
// Задача 3.Відобразити падаючий сніг. Сніжинка з’являється у верхній частині екрану і з випадковою швидкістю рухається вниз. Як тільки сніжинка досягає нижньої частини екрану вона знову повинна з’явитись у верхній частині екрану.

class Snow {
  constructor(snowflakes, minVal, maxVal) {
    this.imgSnow = "../img/snow.jpg"
    this.snowflakes = snowflakes
    this.minVal = minVal
    this.maxVal = maxVal
  }

  getRandomPosition(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1) + min) + min
  }

  getRandomSpeed() {
    return Math.random() * (this.maxVal - this.minVal + 1) + this.minVal
  }

  render(conteinerId) {
    const container = document.getElementById(conteinerId)
    for (let i = 0; i < this.snowflakes; i++) {
      const divSnow = document.createElement("div")
      divSnow.className = "snow"
      divSnow.style.left = this.getRandomPosition(1, 99) + "%"
      divSnow.style.animationDelay = `0.${this.getRandomPosition(1, 8) + "s"}`
      divSnow.style.animationDuration = `${this.getRandomSpeed() + "s"}`
      container.append(divSnow)
    }
  }
}

let showSnow = new Snow(600, 8, 15)
showSnow.render("task3-container")
