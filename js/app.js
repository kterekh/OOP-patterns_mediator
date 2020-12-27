const renderDOM = (config, parent = document.body) => {
  const {nodeName} = config
  //create element
  let newElement = document.createElement(nodeName)
  parent.append(newElement)
  //set innerText & innerHTML
  if (config.hasOwnProperty('innerText')) {
    newElement.innerText = config.innerText
  } else if (config.hasOwnProperty('innerHTML')) {
    newElement.innerHTML = config.innerHTML
  }
  // set attribute
  if (config.attrs) {
    Object.entries(config.attrs).forEach(attribute => {
      newElement.setAttribute(attribute[0], attribute[1])
    })
  }
  //render children
  if (config.children) {
    config.children.forEach(child => {
      renderDOM(child, newElement)
    })
  }
  return newElement
}

const DOMStructureBook = {
  nodeName: 'div',
  attrs: {
    class: 'container'
  },
  children: [
    {
      nodeName: 'header',
      children: [
        {
          nodeName: 'div',
          attrs: {
            class: 'firstAuthorHorizontal author'
          },
          children: [
            {
              nodeName: 'h1',
              innerText: 'Author 1'
            },
            {
              nodeName: 'ul',
              children: [
                {
                  nodeName: 'li',
                  innerText: 'Author 1'
                },
                {
                  nodeName: 'li',
                  innerText: 'Author 2'
                },
                {
                  nodeName: 'li',
                  innerText: 'Author 3'
                }
              ]
            }
          ]
        },
        {
          nodeName: 'div',
          attrs: {
            class: 'secondAuthorHorizontal author'
          },
          children: [
            {
              nodeName: 'h1',
              innerText: 'Author 2'
            },
            {
              nodeName: 'ul',
              children: [
                {
                  nodeName: 'li',
                  innerText: 'Author 1'
                },
                {
                  nodeName: 'li',
                  innerText: 'Author 2'
                },
                {
                  nodeName: 'li',
                  innerText: 'Author 3'
                }
              ]
            }
          ]
        },
        {
          nodeName: 'div',
          attrs: {
            class: 'thirdAuthorHorizontal author'
          },
          children: [
            {
              nodeName: 'h1',
              innerText: 'Author 3'
            },
            {
              nodeName: 'ul',
              children: [
                {
                  nodeName: 'li',
                  innerText: 'Author 1'
                },
                {
                  nodeName: 'li',
                  innerText: 'Author 2'
                },
                {
                  nodeName: 'li',
                  innerText: 'Author 3'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      nodeName: 'section',
      children: [
        {
          nodeName: 'article',
          children: [
            {
              nodeName: 'h1',
              innerText: 'Post 1',
              attrs: {
                class: 'title'
              }
            },
            {
              nodeName: 'p',
              innerText: 'Description...',
              attrs: {
                class: 'paragraph'
              }

            }
          ]
        }
      ]
    },
    {
      nodeName: 'aside',
      children: [
        {
          nodeName: 'div',
          attrs: {
            class: 'firstAuthorHorizontal author'
          },
          children: [
            {
              nodeName: 'h1',
              innerText: 'Author 1'
            },
            {
              nodeName: 'ul',
              children: [
                {
                  nodeName: 'li',
                  innerText: 'Author 1'
                },
                {
                  nodeName: 'li',
                  innerText: 'Author 2'
                },
                {
                  nodeName: 'li',
                  innerText: 'Author 3'
                }
              ]
            }
          ]
        },
        {
          nodeName: 'div',
          attrs: {
            class: 'secondAuthorHorizontal author'
          },
          children: [
            {
              nodeName: 'h1',
              innerText: 'Author 2'
            },
            {
              nodeName: 'ul',
              children: [
                {
                  nodeName: 'li',
                  innerText: 'Author 1'
                },
                {
                  nodeName: 'li',
                  innerText: 'Author 2'
                },
                {
                  nodeName: 'li',
                  innerText: 'Author 3'
                }
              ]
            }
          ]
        },
        {
          nodeName: 'div',
          attrs: {
            class: 'thirdAuthorHorizontal author'
          },
          children: [
            {
              nodeName: 'h1',
              innerText: 'Author 3'
            },
            {
              nodeName: 'ul',
              children: [
                {
                  nodeName: 'li',
                  innerText: 'Author 1'
                },
                {
                  nodeName: 'li',
                  innerText: 'Author 2'
                },
                {
                  nodeName: 'li',
                  innerText: 'Author 3'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

const book = renderDOM(DOMStructureBook)

