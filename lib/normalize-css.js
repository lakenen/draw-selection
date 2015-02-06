var camel = require('./camel')

// TODO: write a module that abstracts this stuff?
var noUnits = [
    'columnCount'
  , 'fillOpacity'
  , 'flex'
  , 'flexGrow'
  , 'flexShrink'
  , 'fontWeight'
  , 'lineClamp'
  , 'lineHeight'
  , 'opacity'
  , 'order'
  , 'orphans'
  , 'strokeOpacity'
  , 'widows'
  , 'zIndex'
  , 'zoom'
].reduce(function (a, b) {
  a[b] = true
  return a
}, {})

module.exports = function normalizeCSS(styles) {
  Object.keys(styles).forEach(function (prop) {
    var normalizedProp = camel(prop)
    if (normalizedProp !== prop) {
      styles[normalizedProp] = styles[prop]
      delete styles[prop]
    }
    prop = normalizedProp

    if (typeof styles[prop] === 'number' && !noUnits.hasOwnProperty(prop)) {
      styles[prop] += 'px'
    }
  })

  return styles
}
