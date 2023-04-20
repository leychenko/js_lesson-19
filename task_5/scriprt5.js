//================================= Задача 5 ====================================
// Задача 5. Байрактар. З верхньої частини екрану у випадковій позиції по горизонталі з’являються танки, які їдуть вниз. При кліку на танк він вибухає і зникає з екрану.


// ===================================================================
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// У меня просто не получаеться сделать адекватный онклик ===================
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Пожалуста подскажите что делаю не так
// =======================================================================



class Bayraktar {
  constructor() {
    this.countDeadTanks = 0
    this.countTanks = this.getRandomValue(1, 50)
  }
  getRandomValue(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1)) + 2
  }
  shot() {
    this.tank.src = "../img/boom.png"
    setTimeout(() => {
      this.tank.remove()
    }, 500)
  }
  createTanks() {
    this.tank = document.createElement("img")
    this.tank.className = "tank"
    this.tank.src = "../img/tank.jpg"
    this.tank.style.left = this.getRandomValue(1, 95) + "%"
    this.tank.animationDelay = 0,this.getRandomValue()
    this.containerId.append(this.tank)

    this.tank.onclick = this.shot.bind(this, this.tank)

	 return this.tank
  }

  render(containerId) {
    this.containerId = document.getElementById(containerId)
    for (let i = 0; i < this.countTanks; i++) {
      this.createsTank = setTimeout(() => {
			this.containerId.append()
        this.createTanks(this.createTanks())
      }, i * 3000)
    }

  }
}

let test = new Bayraktar()
test.render("container")

