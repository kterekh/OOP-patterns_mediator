// book.js or any other name
class HorizontalMenu {
  constructor () {
    this.firstAuthor = document.getElementsByClassName('firstAuthorHorizontal author')
    this.secondAuthor = document.getElementsByClassName('secondAuthorHorizontal author')
    this.thirdAuthor = document.getElementsByClassName('thirdAuthorHorizontal author')
  }

  dropDown () {
    //dropdown functionality for posts
  }
}

class VerticalMenu {
  constructor () {
    this.firstAuthor = document.getElementsByClassName('firstAuthorHorizontal author')
    this.secondAuthor = document.getElementsByClassName('secondAuthorHorizontal author')
    this.thirdAuthor = document.getElementsByClassName('thirdAuthorHorizontal author')
  }

  dropDown () {
    //dropdown functionality for posts
  }
}

class Screen {
  constructor () {
    this.title = document.getElementsByClassName('title')
    this.paragraph = document.getElementsByClassName('paragraph')
  }
}

class Mediator {
  firstAuthorHorMenuBtn = undefined

  set firstAuthorHorMenuBtn (firstAuthorHorMenuBtn) {
    this.firstAuthorHorMenuBtn = firstAuthorHorMenuBtn
  }

  showPost () {
  }

  updateVerticalMenu () {
  }

  updateHorizontalMenu () {
  }
}

