function defaultStyle (uls, blocks) {
  Array.from(uls).forEach(ul => ul.style.display = displayDefault)
  Array.from(blocks).forEach(block => block.style.border = 'none')
}

function defaultStyleForPosts (posts) {
  Array.from(posts).forEach(post => post.style.color = 'black')
  Array.from(posts).forEach(post => post.style.fonrWeight = 'normal')
}

class HorizontalMenu {
  constructor () {
    this.btns = document.querySelectorAll('.author')
    this.uls = document.getElementsByTagName('ul')
    this.lis = document.getElementsByTagName('li')
    this.postsOfFirstAuthor = document.querySelectorAll('#fhu > li')
    this.dropDown()
  }

  dropDown () {
    this.btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (this.uls && this.btns) {
          defaultStyle(this.uls, this.btns)
        }
        switch (e.target.id) {
          case firstHorizontalBlock:
            document.getElementById(firstHorizontalUl).style.display = displayType
            document.getElementById(firstPostOfFirstHorizontalAuthor).style.color = fontColor
            document.getElementById(firstPostOfFirstHorizontalAuthor).style.fontWeight = fontWeight
            document.getElementById(firstHorizontalBlock).style.border = blockStyle
            mediator.updateVerticalMenu(e.target.id)

            this.postsOfFirstAuthor.forEach(post => {
              post.addEventListener('click', (e) => {
                if (this.lis) {
                  defaultStyleForPosts(this.lis)
                }
                switch (e.target.id) {
                  case secondPostOfFirstHorizontalAuthor:
                    document.getElementById(firstHorizontalUl).style.display = displayType
                    document.getElementById(secondPostOfFirstHorizontalAuthor).style.color = fontColor
                    document.getElementById(secondPostOfFirstHorizontalAuthor).style.fontWeight = fontWeight
                }
              })
            })

            break
          case secondHorizontalBlock:
            document.getElementById(secondHorizontalUl).style.display = displayType
            document.getElementById(firstPostOfSecondHorizontalAuthor).style.color = fontColor
            document.getElementById(firstPostOfSecondHorizontalAuthor).style.fontWeight = fontWeight
            document.getElementById(secondHorizontalBlock).style.border = blockStyle
            mediator.updateVerticalMenu(e.target.id)
            break
          case thirdHorizontalBlock:
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
      case firstHorizontalBlock:
        document.getElementById(firstVerticalUl).style.display = displayType
        document.getElementById(firstPostOfFirstVerticalAuthor).style.color = fontColor
        document.getElementById(firstPostOfFirstVerticalAuthor).style.fontWeight = fontWeight
        document.getElementById(firstVerticalBlock).style.border = blockStyle
        break
      case secondHorizontalBlock:
        document.getElementById(secondVerticalUl).style.display = displayType
        document.getElementById(firstPostOfSecondVerticalAuthor).style.color = fontColor
        document.getElementById(firstPostOfSecondVerticalAuthor).style.fontWeight = fontWeight
        document.getElementById(secondVerticalBlock).style.border = blockStyle
        break
      case thirdHorizontalBlock:
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


