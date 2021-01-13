function defaultStyle (uls, blocks) {
  Array.from(uls).forEach(ul => ul.style.display = displayDefault)
  Array.from(blocks).forEach(block => block.style.border = 'none')
}

function defaultStyleForPosts (posts) {
  Array.from(posts).forEach(post => post.style.color = 'black')
  Array.from(posts).forEach(post => post.style.fontWeight = 'normal')
}

class HorizontalMenu {
  constructor (mediator) {
    this.horizontalBtns = document.querySelectorAll('.horizontalAuthor')
    this.uls = document.getElementsByTagName('ul')
    this.lis = document.getElementsByTagName('li')
    this.postsOfFirstAuthor = document.querySelectorAll('#fhu > li')
    this.mediator = mediator
    this.dropDown()
  }

  addStyleToHorizontalItem (ul, post, block) {
    document.getElementById(ul).style.display = displayType
    document.getElementById(post).style.color = fontColor
    document.getElementById(post).style.fontWeight = fontWeight
    document.getElementById(block).style.border = blockStyle
  }

  addStyleForPost (post) {
    document.getElementById(post).style.color = fontColor
    document.getElementById(post).style.fontWeight = fontWeight
  }

  dropDown () {
    this.horizontalBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (this.uls && this.horizontalBtns) {
          defaultStyle(this.uls, this.horizontalBtns)
        }
        switch (e.currentTarget.id) {
          case firstHorizontalBlock:
            this.addStyleToHorizontalItem(firstHorizontalUl, firstPostOfFirstHorizontalAuthor, firstHorizontalBlock)
            this.mediator.updateVerticalMenu(e.currentTarget.id)
            // logic for posts inside author
            this.postsOfFirstAuthor.forEach(post => {
              post.addEventListener('click', (e) => {
                if (this.lis) {
                  defaultStyleForPosts(this.lis)
                }
                switch (e.currentTarget.id) {
                  case firstPostOfFirstHorizontalAuthor:
                    this.addStyleForPost(firstPostOfFirstHorizontalAuthor)
                    this.mediator.showPost(e.currentTarget.id)
                    break
                  case secondPostOfFirstHorizontalAuthor:
                    this.addStyleForPost(secondPostOfFirstHorizontalAuthor)
                    this.mediator.showPost(e.currentTarget.id)
                    break
                  case thirdPostOfFirstHorizontalAuthor:
                    this.addStyleForPost(thirdPostOfFirstHorizontalAuthor)
                    this.mediator.showPost(e.currentTarget.id)
                    break
                }
              })
            })
            // end of logic for posts inside author
            break
          case secondHorizontalBlock:
            this.addStyleToHorizontalItem(secondHorizontalUl, firstPostOfSecondHorizontalAuthor, secondHorizontalBlock)
            this.mediator.updateVerticalMenu(e.currentTarget.id)
            break
          case thirdHorizontalBlock:
            this.addStyleToHorizontalItem(thirdHorizontalUl, firstPostOfThirdHorizontalAuthor, thirdHorizontalBlock)
            this.mediator.updateVerticalMenu(e.currentTarget.id)
            break
        }
      })
    })
  }
}

class VerticalMenu {

  constructor (mediator) {
    this.verticalBtns = document.querySelectorAll('.verticalAuthor')
    this.mediator = mediator
    this.dropDown()
  }

  addStyleToVerticalItem (ul, post, block) {
    document.getElementById(ul).style.display = displayType
    document.getElementById(post).style.color = fontColor
    document.getElementById(post).style.fontWeight = fontWeight
    document.getElementById(block).style.border = blockStyle
  }

  dropDown (id) {
    switch (id) {
      case firstHorizontalBlock:
        this.addStyleToVerticalItem(firstVerticalUl, firstPostOfFirstVerticalAuthor, firstVerticalBlock)
        break
      case secondHorizontalBlock:
        this.addStyleToVerticalItem(secondVerticalUl, firstPostOfSecondVerticalAuthor, secondVerticalBlock)
        break
      case thirdHorizontalBlock:
        this.addStyleToVerticalItem(thirdVerticalUl, firstPostOfThirdVerticalAuthor, thirdVerticalBlock)
        break
    }
  }
}

class Screen {

  constructor () {
    this.title = document.querySelector('.title')
    this.paragraph = document.querySelector('.paragraph')
  }

  displayData (id) {
    switch (id) {
      case firstPostOfFirstHorizontalAuthor :
        this.title.innerText = 'Post 1'
        this.paragraph.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        break
      case secondPostOfFirstHorizontalAuthor :
        this.title.innerText = 'Post 2'
        this.paragraph.innerText = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat. '
        break
      case thirdPostOfFirstHorizontalAuthor :
        this.title.innerText = 'Post 3'
        this.paragraph.innerText = 'Condimentum lacinia quis vel eros. Sit amet massa vitae tortor condimentum. Urna nec tincidunt praesent semper. Duis ut diam quam nulla porttitor. Egestas quis ipsum suspendisse ultrices. Enim blandit volutpat maecenas volutpat. Gravida neque convallis a cras semper auctor neque vitae. '
    }
  }

}

class Mediator {

  constructor () {
    this.horizontalMenu = new HorizontalMenu(this)
    this.verticalMenu = new VerticalMenu(this)
    this.screen = new Screen(this)
  }

  showPost (id) {
    this.screen.displayData(id)
  }

  updateVerticalMenu (id) {
    this.verticalMenu.dropDown(id)
  }

  updateHorizontalMenu (id) {
    this.horizontalMenu.dropDown(id)
  }
}

const mediator = new Mediator()


