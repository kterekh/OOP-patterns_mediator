class HorizontalMenu {
  constructor () {
    this.btns = document.querySelectorAll('.author')
    this.posts = document.querySelectorAll('li')
    this.dropDown()
  }

  dropDown () {
    this.btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        switch (e.target.id) {
          case 'fhh':
            document.getElementById('fhu').style.display = 'flex'
            document.getElementById('1vl').style.color = 'red'
            document.getElementById('1vl').style.fontWeight = 'bold'
            mediator.updateVerticalMenu(e.target.id)
            this.posts.forEach(post => {
              post.addEventListener('click', (e) => {
                  switch (e.target.id) {
                    case '2hl':
                      document.getElementById('2hl').style.color = 'red'
                      document.getElementById('2hl').style.fontWeight = 'bold'
                      // mediator.showPost(e.target.id)
                  }
                }
              )
            })

            break
          case 'shh':
            document.getElementById('shu').style.display = 'flex'
            document.getElementById('4vl').style.color = 'red'
            document.getElementById('4vl').style.fontWeight = 'bold'
            mediator.updateVerticalMenu(e.target.id)
            break
          case 'thh':
            document.getElementById('thu').style.display = 'flex'
            document.getElementById('7vl').style.color = 'red'
            document.getElementById('7vl').style.fontWeight = 'bold'
            mediator.updateVerticalMenu(e.target.id)
            break
          case 'fvh':
            document.getElementById('fhu').style.display = 'flex'
            document.getElementById('1hl').style.color = 'red'
            document.getElementById('1hl').style.fontWeight = 'bold'
            mediator.updateVerticalMenu(e.target.id)
            break
          case 'svh':
            document.getElementById('shu').style.display = 'flex'
            document.getElementById('4hl').style.color = 'red'
            document.getElementById('4hl').style.fontWeight = 'bold'
            mediator.updateVerticalMenu(e.target.id)
            break
          case 'tvh':
            document.getElementById('thu').style.display = 'flex'
            document.getElementById('7hl').style.color = 'red'
            document.getElementById('7hl').style.fontWeight = 'bold'
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

  dropDown () {
    this.btns.forEach(btn => {
      btn.addEventListener('click', function (e) {
        switch (e.target.id) {
          case 'fhh':
            document.getElementById('fvu').style.display = 'flex'
            document.getElementById('1hl').style.color = 'red'
            document.getElementById('1hl').style.fontWeight = 'bold'
            mediator.updateHorizontalMenu(e.target.id)
            break
          case 'shh':
            document.getElementById('svu').style.display = 'flex'
            document.getElementById('4hl').style.color = 'red'
            document.getElementById('4hl').style.fontWeight = 'bold'
            mediator.updateVerticalMenu(e.target.id)
            break
          case 'thh':
            document.getElementById('tvu').style.display = 'flex'
            document.getElementById('7hl').style.color = 'red'
            document.getElementById('7hl').style.fontWeight = 'bold'
            mediator.updateVerticalMenu(e.target.id)
            break
          case 'fvh':
            document.getElementById('fvu').style.display = 'flex'
            document.getElementById('1vl').style.color = 'red'
            document.getElementById('1vl').style.fontWeight = 'bold'
            mediator.updateVerticalMenu(e.target.id)
            break
          case 'svh':
            document.getElementById('svu').style.display = 'flex'
            document.getElementById('4vl').style.color = 'red'
            document.getElementById('4vl').style.fontWeight = 'bold'
            mediator.updateVerticalMenu(e.target.id)
            break
          case 'tvh':
            document.getElementById('tvu').style.display = 'flex'
            document.getElementById('7vl').style.color = 'red'
            document.getElementById('7vl').style.fontWeight = 'bold'
            mediator.updateVerticalMenu(e.target.id)
            break
        }
      })
    })
  }
}

class Screen {

  constructor () {
    this.title = document.getElementsByClassName('title')
    this.paragraph = document.getElementsByClassName('paragraph')
  }

  displayData () {
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
    debugger
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
