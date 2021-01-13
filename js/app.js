const renderDOM = (config, parent = document.body) => {
  const {nodeName} = config
  //create element
  let newElement = document.createElement(nodeName)
  parent.append(newElement)
  //set innerText & innerHTML & id
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
            class: 'firstHAuthor horizontalAuthor author',
            id: 'fha'
          },
          children: [
            {
              nodeName: 'h1',
              innerText: 'Author 1',
              attrs: {
                id: 'fhh'
              }
            },
            {
              nodeName: 'ul',
              attrs: {
                id: 'fhu'
              }
              ,
              children: [
                {
                  nodeName: 'li',
                  innerText: 'Post 1',
                  attrs: {
                    id: '1hl'
                  }
                },
                {
                  nodeName: 'li',
                  innerText: 'Post 2',
                  attrs: {
                    id: '2hl'
                  }
                },
                {
                  nodeName: 'li',
                  innerText: 'Post 3',
                  attrs: {
                    id: '3hl'
                  }
                }
              ]
            }
          ]
        },
        {
          nodeName: 'div',
          attrs: {
            class: 'secondHAuthor horizontalAuthor author',
            id: 'sha'
          },
          children: [
            {
              nodeName: 'h1',
              innerText: 'Author 2',
              attrs: {
                id: 'shh'
              }
            },
            {
              nodeName: 'ul',
              attrs: {
                id: 'shu'
              },
              children: [
                {
                  nodeName: 'li',
                  innerText: 'Post 1',
                  attrs: {
                    id: '4hl'
                  }
                },
                {
                  nodeName: 'li',
                  innerText: 'Post 2',
                  attrs: {
                    id: '5hl'
                  }
                },
                {
                  nodeName: 'li',
                  innerText: 'Post 3',
                  attrs: {
                    id: '6hl'
                  }
                }
              ]
            }
          ]
        },
        {
          nodeName: 'div',
          attrs: {
            class: 'thirdHAuthor horizontalAuthor author',
            id: 'tha'
          },
          children: [
            {
              nodeName: 'h1',
              innerText: 'Author 3',
              attrs: {
                id: 'thh'
              }
            },
            {
              nodeName: 'ul',
              attrs: {
                id: 'thu'
              },
              children: [
                {
                  nodeName: 'li',
                  innerText: 'Post 1',
                  attrs: {
                    id: '7hl'
                  }
                },
                {
                  nodeName: 'li',
                  innerText: 'Post 2',
                  attrs: {
                    id: '8hl'
                  }
                },
                {
                  nodeName: 'li',
                  innerText: 'Post 3',
                  attrs: {
                    id: '9hl'
                  }
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
                innerText: 'Choose your author...',
              attrs: {
                class: 'title'
              }
            },
            {
              nodeName: 'p',
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
            class: 'firstVAuthor verticalAuthor author',
            id: 'fva'
          },
          children: [
            {
              nodeName: 'h1',
              innerText: 'Author 1',
              attrs: {
                id: 'fvh'
              }
            },
            {
              nodeName: 'ul',
              attrs: {
                id: 'fvu'
              },
              children: [
                {
                  nodeName: 'li',
                  innerText: 'Post 1',
                  attrs: {
                    id: '1vl'
                  }
                },
                {
                  nodeName: 'li',
                  innerText: 'Post 2',
                  attrs: {
                    id: '2vl'
                  }
                },
                {
                  nodeName: 'li',
                  innerText: 'Post 3',
                  attrs: {
                    id: '3vl'
                  }
                }
              ]
            }
          ]
        },
        {
          nodeName: 'div',
          attrs: {
            class: 'secondVAuthor verticalAuthor author',
            id: 'sva'
          },
          children: [
            {
              nodeName: 'h1',
              innerText: 'Author 2',
              attrs: {
                id: 'svh'
              }
            },
            {
              nodeName: 'ul',
              attrs: {
                id: 'svu'
              },
              children: [
                {
                  nodeName: 'li',
                  innerText: 'Post 1',
                  attrs: {
                    id: '4vl'
                  }
                },
                {
                  nodeName: 'li',
                  innerText: 'Post 2',
                  attrs: {
                    id: '5vl'
                  }
                },
                {
                  nodeName: 'li',
                  innerText: 'Post 3',
                  attrs: {
                    id: '6vl'
                  }
                }
              ]
            }
          ]
        },
        {
          nodeName: 'div',
          attrs: {
            class: 'thirdVAuthor verticalAuthor author',
            id: 'tva'
          },
          children: [
            {
              nodeName: 'h1',
              innerText: 'Author 3',
              attrs: {
                id: 'tvh'
              }
            },
            {
              nodeName: 'ul',
              attrs: {
                id: 'tvu'
              },
              children: [
                {
                  nodeName: 'li',
                  innerText: 'Post 1',
                  attrs: {
                    id: '7vl'
                  }
                },
                {
                  nodeName: 'li',
                  innerText: 'Post 2',
                  attrs: {
                    id: '8vl'
                  }
                },
                {
                  nodeName: 'li',
                  innerText: 'Post 3',
                  attrs: {
                    id: '9vl'
                  }
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

