var extend = require('extend')
  , normalize = require('./lib/normalize-css')

module.exports = function drawSelection(containerEl, overrideStyles) {
  if (!(containerEl instanceof Element)) {
    overrideStyles = containerEl || {}
    containerEl = document.documentElement
  }

  var sel = window.getSelection()
    , range = sel.rangeCount ? sel.getRangeAt(0) : (range = document.createRange(), sel.addRange(range))
    , rects = range.getClientRects()
    , offset = containerEl.getBoundingClientRect()

  return Array.prototype.map.call(rects, function (rect) {
    var el = document.createElement('div')

    var styles = normalize(extend({
        outline: '1px solid red'
      , 'pointer-events': 'none'
      , position: 'absolute'
      , top : rect.top + containerEl.scrollTop - offset.top
      , left : rect.left + containerEl.scrollLeft - offset.left
      , width : rect.width
      , height : rect.height
    }, overrideStyles))

    Object.keys(styles).forEach(function (prop) {
      el.style[prop] = styles[prop]
    })

    containerEl.appendChild(el)

    return el
  })
}
