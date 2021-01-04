const fontColor = 'red'
const fontWeight = 'bold'
const displayType = 'flex'

function displayNone (buttons) {
  buttons.style.display = 'none'
}

class HorizontalMenu {
  constructor () {
    this.btns = document.querySelectorAll('.author')
    this.uls = document.getElementsByTagName('ul')
    this.dropDown()
  }

  dropDown () {
    this.btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        switch (e.target.id) {
          case 'fhh':
            document.getElementById('fhu').style.display = displayType
            document.getElementById('1hl').style.color = fontColor
            document.getElementById('1hl').style.fontWeight = fontWeight
            mediator.updateVerticalMenu(e.target.id)
            break
          case 'shh':
            document.getElementById('shu').style.display = displayType
            document.getElementById('4hl').style.color = fontColor
            document.getElementById('4hl').style.fontWeight = fontWeight
            mediator.updateVerticalMenu(e.target.id)
            break
        }
      })
    })
  }
}

class VerticalMenu {

  constructor () {
    this.btns = document.querySelectorAll('.author')
    this.dropDown()

  }

  dropDown (e) {
    switch (e) {
      case 'fhh':
        document.getElementById('fvu').style.display = displayType
        document.getElementById('1vl').style.color = fontColor
        document.getElementById('1vl').style.fontWeight = fontWeight
        break
      case 'shh':
        document.getElementById('svu').style.display = displayType
        document.getElementById('4vl').style.color = fontColor
        document.getElementById('4vl').style.fontWeight = fontWeight
        break
    }
  }
}

class Screen {

  constructor () {
    this.title = document.getElementsByClassName('title')
    this.paragraph = document.getElementsByClassName('paragraph')
  }

  displayData (e) {
    switch (e) {
      case '2hl' :
        this.title.innerHTML = 'Post 2'
    }
  }

}

class Mediator {

  constructor () {
    this.horizontalMenu = new HorizontalMenu(this)
    this.verticalMenu = new VerticalMenu(this)
    this.screen = new Screen(this)
    this.showPost()
    this.updateVerticalMenu()
    this.updateVerticalMenu()
  }

  showPost (e) {
    this.screen.displayData(e)
  }

  updateVerticalMenu (e) {
    this.verticalMenu.dropDown(e)
  }

  updateHorizontalMenu (e) {
    this.horizontalMenu.dropDown(e)
  }
}

const mediator = new Mediator()


