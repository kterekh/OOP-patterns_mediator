// book.js or any other name
class Btn {
  mediator = undefined
  constructor () {
    // this.firstAuthorHorMenuBtn = document.getElementById('#firstAuthorHorMenuBtn')
  }
  dropDown () {
    //dropdown functionality
  }
}

class Mediator {
  firstAuthorHorMenuBtn = undefined

  set firstAuthorHorMenuBtn (firstAuthorHorMenuBtn) {
    this.firstAuthorHorMenuBtn = firstAuthorHorMenuBtn
  }
  showPost () {}
  updateVerticalMenu () {}
  updateHorizontalMenu() {}
}

//app.js

let firstAuthorHorMenuBtn = new Btn()
let mediator = new Mediator()
