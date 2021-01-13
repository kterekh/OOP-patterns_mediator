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
    this.postsOfSecondAuthor = document.querySelectorAll('#shu > li')
    this.postsOfThirdAuthor = document.querySelectorAll('#thu > li')
    this.mediator = mediator
    this.dropDownMain()
    this.dropDownSupport()
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


  dropDownMain () {
    this.horizontalBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (this.uls && this.horizontalBtns) {
          defaultStyle(this.uls, this.horizontalBtns)
        }
        switch (e.currentTarget.id) {
          case firstHorizontalBlock:
            this.addStyleToHorizontalItem(firstHorizontalUl, firstPostOfFirstHorizontalAuthor, firstHorizontalBlock)
            this.mediator.updateVerticalMenu(e.currentTarget.id)
            this.mediator.showPost(firstPostOfFirstHorizontalAuthor)
            // logic for posts inside author
            this.postsOfFirstAuthor.forEach(post => {
              post.addEventListener('click', (e) => {
                e.stopPropagation()
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
            this.mediator.showPost(firstPostOfSecondHorizontalAuthor)
            this.mediator.updateVerticalMenu(e.currentTarget.id)
            // logic for posts inside author
            this.postsOfSecondAuthor.forEach(post => {
              post.addEventListener('click', (e) => {
                e.stopPropagation()
                if (this.lis) {
                  defaultStyleForPosts(this.lis)
                }
                switch (e.currentTarget.id) {
                  case firstPostOfSecondHorizontalAuthor:
                    this.addStyleForPost(firstPostOfSecondHorizontalAuthor)
                    this.mediator.showPost(e.currentTarget.id)
                    break
                  case secondPostOfSecondHorizontalAuthor:
                    this.addStyleForPost(secondPostOfSecondHorizontalAuthor)
                    this.mediator.showPost(e.currentTarget.id)
                    break
                  case thirdPostOfSecondHorizontalAuthor:
                    this.addStyleForPost(thirdPostOfSecondHorizontalAuthor)
                    this.mediator.showPost(e.currentTarget.id)
                    break
                }
              })
            })
            // end of logic for posts inside author
            break
          case thirdHorizontalBlock:
            this.addStyleToHorizontalItem(thirdHorizontalUl, firstPostOfThirdHorizontalAuthor, thirdHorizontalBlock)
            this.mediator.showPost(firstPostOfThirdHorizontalAuthor)
            this.mediator.updateVerticalMenu(e.currentTarget.id)
            // logic for posts inside author
            this.postsOfThirdAuthor.forEach(post => {
              post.addEventListener('click', (e) => {
                e.stopPropagation()
                if (this.lis) {
                  defaultStyleForPosts(this.lis)
                }
                switch (e.currentTarget.id) {
                  case firstPostOfThirdHorizontalAuthor:
                    this.addStyleForPost(firstPostOfThirdHorizontalAuthor)
                    this.mediator.showPost(e.currentTarget.id)
                    break
                  case secondPostOfThirdHorizontalAuthor:
                    this.addStyleForPost(secondPostOfThirdHorizontalAuthor)
                    this.mediator.showPost(e.currentTarget.id)
                    break
                  case thirdPostOfThirdHorizontalAuthor:
                    this.addStyleForPost(thirdPostOfThirdHorizontalAuthor)
                    this.mediator.showPost(e.currentTarget.id)
                    break
                }
              })
            })
            // end of logic for posts inside author
            break
        }
      })
    })
  }

  dropDownSupport (id) {
    switch (id) {
      case firstVerticalBlock:
        this.addStyleToHorizontalItem(firstHorizontalUl, firstPostOfFirstHorizontalAuthor, firstHorizontalBlock)
        break
      case secondVerticalBlock:
        this.addStyleToHorizontalItem(secondHorizontalUl, firstPostOfSecondHorizontalAuthor, secondHorizontalBlock)
        break
      case thirdVerticalBlock:
        this.addStyleToHorizontalItem(thirdHorizontalUl, firstPostOfThirdHorizontalAuthor, thirdHorizontalBlock)
        break
    }

  }

}

class VerticalMenu {

  constructor (mediator) {
    this.verticalBtns = document.querySelectorAll('.verticalAuthor')
    this.uls = document.getElementsByTagName('ul')
    this.lis = document.getElementsByTagName('li')
    this.postsOfFirstAuthor = document.querySelectorAll('#fvu > li')
    this.postsOfSecondAuthor = document.querySelectorAll('#svu > li')
    this.postsOfThirdAuthor = document.querySelectorAll('#tvu > li')
    this.mediator = mediator
    this.dropDownSupport()
    this.dropDownMain()
  }

  addStyleForPost (post) {
    document.getElementById(post).style.color = fontColor
    document.getElementById(post).style.fontWeight = fontWeight
  }

  addStyleToVerticalItem (ul, post, block) {
    document.getElementById(ul).style.display = displayType
    document.getElementById(post).style.color = fontColor
    document.getElementById(post).style.fontWeight = fontWeight
    document.getElementById(block).style.border = blockStyle
  }

  addStyleToHorizontalItem (ul, post, block) {
    document.getElementById(ul).style.display = displayType
    document.getElementById(post).style.color = fontColor
    document.getElementById(post).style.fontWeight = fontWeight
    document.getElementById(block).style.border = blockStyle
  }

  dropDownMain () {
    this.verticalBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (this.uls && this.verticalBtns) {
          defaultStyle(this.uls, this.verticalBtns)
        }
        switch (e.currentTarget.id) {
          case firstVerticalBlock:
            this.addStyleToVerticalItem(firstVerticalUl, firstPostOfFirstVerticalAuthor, firstVerticalBlock)
            this.mediator.updateHorizontalMenu(e.currentTarget.id)
            this.mediator.showPost(firstPostOfFirstVerticalAuthor)
            // logic for posts inside author
            this.postsOfFirstAuthor.forEach(post => {
              post.addEventListener('click', (e) => {
                e.stopPropagation()
                if (this.lis) {
                  defaultStyleForPosts(this.lis)
                }
                switch (e.currentTarget.id) {
                  case firstPostOfFirstVerticalAuthor:
                    this.addStyleForPost(firstPostOfFirstVerticalAuthor)
                    this.mediator.showPost(e.currentTarget.id)
                    break
                  case secondPostOfFirstVerticalAuthor:
                    this.addStyleForPost(secondPostOfFirstVerticalAuthor)
                    this.mediator.showPost(e.currentTarget.id)
                    break
                  case thirdPostOfFirstVerticalAuthor:
                    this.addStyleForPost(thirdPostOfFirstVerticalAuthor)
                    this.mediator.showPost(e.currentTarget.id)
                    break
                }
              })
            })
            // end of logic for posts inside author
            break
          case secondVerticalBlock:
            this.addStyleToVerticalItem(secondVerticalUl, firstPostOfSecondVerticalAuthor, secondVerticalBlock)
            this.mediator.showPost(firstPostOfSecondVerticalAuthor)
            this.mediator.updateHorizontalMenu(e.currentTarget.id)
            // logic for posts inside author
            this.postsOfSecondAuthor.forEach(post => {
              post.addEventListener('click', (e) => {
                e.stopPropagation()
                if (this.lis) {
                  defaultStyleForPosts(this.lis)
                }
                switch (e.currentTarget.id) {
                  case firstPostOfSecondVerticalAuthor:
                    this.addStyleForPost(firstPostOfSecondVerticalAuthor)
                    this.mediator.showPost(e.currentTarget.id)
                    break
                  case secondPostOfSecondVerticalAuthor:
                    this.addStyleForPost(secondPostOfSecondVerticalAuthor)
                    this.mediator.showPost(e.currentTarget.id)
                    break
                  case thirdPostOfSecondVerticalAuthor:
                    this.addStyleForPost(thirdPostOfSecondVerticalAuthor)
                    this.mediator.showPost(e.currentTarget.id)
                    break
                }
              })
            })
            // end of logic for posts inside author
            break
          case thirdVerticalBlock:
            this.addStyleToVerticalItem(thirdVerticalUl, firstPostOfThirdVerticalAuthor, thirdVerticalBlock)
            this.mediator.showPost(firstPostOfThirdHorizontalAuthor)
            this.mediator.updateHorizontalMenu(e.currentTarget.id)
            // logic for posts inside author
            this.postsOfThirdAuthor.forEach(post => {
              post.addEventListener('click', (e) => {
                e.stopPropagation()
                if (this.lis) {
                  defaultStyleForPosts(this.lis)
                }
                switch (e.currentTarget.id) {
                  case firstPostOfThirdVerticalAuthor:
                    this.addStyleForPost(firstPostOfThirdVerticalAuthor)
                    this.mediator.showPost(e.currentTarget.id)
                    break
                  case secondPostOfThirdVerticalAuthor:
                    this.addStyleForPost(secondPostOfThirdVerticalAuthor)
                    this.mediator.showPost(e.currentTarget.id)
                    break
                  case thirdPostOfThirdVerticalAuthor:
                    this.addStyleForPost(thirdPostOfThirdVerticalAuthor)
                    this.mediator.showPost(e.currentTarget.id)
                    break
                }
              })
            })
            // end of logic for posts inside author
            break
        }
      })
    })

  }

  dropDownSupport (id) {
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
        break
      case firstPostOfSecondHorizontalAuthor :
        this.title.innerText = 'Post 1'
        this.paragraph.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        break
      case secondPostOfSecondHorizontalAuthor :
        this.title.innerText = 'Post 2'
        this.paragraph.innerText = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat. '
        break
      case thirdPostOfSecondHorizontalAuthor :
        this.title.innerText = 'Post 3'
        this.paragraph.innerText = 'Condimentum lacinia quis vel eros. Sit amet massa vitae tortor condimentum. Urna nec tincidunt praesent semper. Duis ut diam quam nulla porttitor. Egestas quis ipsum suspendisse ultrices. Enim blandit volutpat maecenas volutpat. Gravida neque convallis a cras semper auctor neque vitae. '
        break
      case firstPostOfThirdHorizontalAuthor :
        this.title.innerText = 'Post 1'
        this.paragraph.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        break
      case secondPostOfThirdHorizontalAuthor :
        this.title.innerText = 'Post 2'
        this.paragraph.innerText = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat. '
        break
      case thirdPostOfThirdHorizontalAuthor :
        this.title.innerText = 'Post 3'
        this.paragraph.innerText = 'Condimentum lacinia quis vel eros. Sit amet massa vitae tortor condimentum. Urna nec tincidunt praesent semper. Duis ut diam quam nulla porttitor. Egestas quis ipsum suspendisse ultrices. Enim blandit volutpat maecenas volutpat. Gravida neque convallis a cras semper auctor neque vitae. '
        break

      case firstPostOfFirstVerticalAuthor :
        this.title.innerText = 'Post 1'
        this.paragraph.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        break
      case secondPostOfFirstVerticalAuthor :
        this.title.innerText = 'Post 2'
        this.paragraph.innerText = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat. '
        break
      case thirdPostOfFirstVerticalAuthor :
        this.title.innerText = 'Post 3'
        this.paragraph.innerText = 'Condimentum lacinia quis vel eros. Sit amet massa vitae tortor condimentum. Urna nec tincidunt praesent semper. Duis ut diam quam nulla porttitor. Egestas quis ipsum suspendisse ultrices. Enim blandit volutpat maecenas volutpat. Gravida neque convallis a cras semper auctor neque vitae. '
        break
      case firstPostOfSecondVerticalAuthor :
        this.title.innerText = 'Post 1'
        this.paragraph.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        break
      case secondPostOfSecondVerticalAuthor :
        this.title.innerText = 'Post 2'
        this.paragraph.innerText = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat. '
        break
      case thirdPostOfSecondVerticalAuthor :
        this.title.innerText = 'Post 3'
        this.paragraph.innerText = 'Condimentum lacinia quis vel eros. Sit amet massa vitae tortor condimentum. Urna nec tincidunt praesent semper. Duis ut diam quam nulla porttitor. Egestas quis ipsum suspendisse ultrices. Enim blandit volutpat maecenas volutpat. Gravida neque convallis a cras semper auctor neque vitae. '
        break
      case firstPostOfThirdVerticalAuthor :
        this.title.innerText = 'Post 1'
        this.paragraph.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        break
      case secondPostOfThirdVerticalAuthor :
        this.title.innerText = 'Post 2'
        this.paragraph.innerText = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat. '
        break
      case thirdPostOfThirdVerticalAuthor :
        this.title.innerText = 'Post 3'
        this.paragraph.innerText = 'Condimentum lacinia quis vel eros. Sit amet massa vitae tortor condimentum. Urna nec tincidunt praesent semper. Duis ut diam quam nulla porttitor. Egestas quis ipsum suspendisse ultrices. Enim blandit volutpat maecenas volutpat. Gravida neque convallis a cras semper auctor neque vitae. '
        break
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
    this.verticalMenu.dropDownSupport(id)
  }

  updateHorizontalMenu (id) {
    this.horizontalMenu.dropDownSupport(id)
  }
}

const mediator = new Mediator()


