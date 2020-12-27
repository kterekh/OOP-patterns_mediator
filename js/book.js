class HorizontalMenu {
  mediator = undefined

  constructor () {
    this.btns = document.querySelectorAll('.author')
  }

  dropDown () {
    //add functionality of showing-hiding menu options on click (only for horizontal menu, and send signal to mediator and ask to update the vertical menu
    this.btns.addEventListener('click', () => {
      this.mediator.showPost()
      this.mediator.updateHorizontalMenu()
      this.mediator.updateVerticalMenu()
      //  open first author posts by default
    })
  }
  setMediator () {
    this.mediator = mediator
  }
}

class VerticalMenu {
  mediator = undefined

  constructor () {
    this.btns = document.querySelectorAll('.author')
  }

  dropDown () {
    ///add functionality of showing-hiding menu options on click (only for vertical menu, and send signal to mediator and ask to update the horizontal menu
    this.btns.addEventListener('click', () => {
      this.mediator.showPost()
      this.mediator.updateHorizontalMenu()
      this.mediator.updateVerticalMenu()
      //  open first author posts by default
    })
  }
  setMediator () {
    this.mediator = mediator
  }

}

class Screen {
  mediator = undefined

  // has no own methods, only receives instructions from mediator
  constructor () {
    this.title = document.getElementsByClassName('title')
    this.paragraph = document.getElementsByClassName('paragraph')
  }
}

class Mediator {
  constructor () {
    horizontalMenu = undefined
    verticalMenu = undefined
    screen = undefined
  }

  setHorizontalMenu () {
    this.horizontalMenu = horizontalMenu
  }

  setVerticalMenu () {
    this.verticalMenu = verticalMenu
  }

  setScreen () {
    this.screen = screen
  }


  showPost (e) {
    // add only that elements, that will take part in this event
    this.screen.setScreen(e)
  }

  updateVerticalMenu () {
  }

  updateHorizontalMenu () {
  }
}

let horizontalMenu = new HorizontalMenu()
let verticalMenu = new VerticalMenu()
let screen = new Screen()
let mediator = new Mediator(horizontalMenu, verticalMenu, screen)
mediator.setHorizontalMenu(horizontalMenu)
mediator.setVerticalMenu(verticalMenu)
mediator.setScreen(screen)

