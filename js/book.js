function displayNone (buttons) {
  Array.from(buttons).forEach(button => button.style.display = displayDefault)
}

function removeBorder (buttons) {
  Array.from(buttons).forEach(button => button.style.border = 'none')
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
        if (this.uls) {
          displayNone(this.uls)
        }
        switch (e.target.id) {
          case headerOfFirstHorizontalAuthor:
            document.getElementById(firstHorizontalUl).style.display = displayType
            document.getElementById(firstPostOfFirstHorizontalAuthor).style.color = fontColor
            document.getElementById(firstPostOfFirstHorizontalAuthor).style.fontWeight = fontWeight
            document.getElementById(firstHorizontalBlock).style.border = blockStyle
            mediator.updateVerticalMenu(e.target.id)
            break
          case headerOfSecondHorizontalAuthor:
            document.getElementById(secondHorizontalUl).style.display = displayType
            document.getElementById(firstPostOfSecondHorizontalAuthor).style.color = fontColor
            document.getElementById(firstPostOfSecondHorizontalAuthor).style.fontWeight = fontWeight
            document.getElementById(secondHorizontalBlock).style.border = blockStyle
            mediator.updateVerticalMenu(e.target.id)
            break
          case headerOfThirdHorizontalAuthor:
            document.getElementById(thirdHorizontalUl).style.display = displayType
            document.getElementById(firstPostOfThirdHorizontalAuthor).style.color = fontColor
            document.getElementById(firstPostOfThirdHorizontalAuthor).style.fontWeight = fontWeight
            document.getElementById(thirdHorizontalBlock).style.border = blockStyle
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
      case headerOfFirstHorizontalAuthor:
        document.getElementById(firstVerticalUl).style.display = displayType
        document.getElementById(firstPostOfFirstVerticalAuthor).style.color = fontColor
        document.getElementById(firstPostOfFirstVerticalAuthor).style.fontWeight = fontWeight
        document.getElementById(firstVerticalBlock).style.border = blockStyle
        break
      case headerOfSecondHorizontalAuthor:
        document.getElementById(secondVerticalUl).style.display = displayType
        document.getElementById(firstPostOfSecondVerticalAuthor).style.color = fontColor
        document.getElementById(firstPostOfSecondVerticalAuthor).style.fontWeight = fontWeight
        document.getElementById(secondVerticalBlock).style.border = blockStyle
        break
      case headerOfThirdHorizontalAuthor:
        document.getElementById(thirdVerticalUl).style.display = displayType
        document.getElementById(firstPostOfThirdVerticalAuthor).style.color = fontColor
        document.getElementById(firstPostOfThirdVerticalAuthor).style.fontWeight = fontWeight
        document.getElementById(thirdVerticalBlock).style.border = blockStyle
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


