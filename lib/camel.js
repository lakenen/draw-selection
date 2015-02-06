module.exports = function camel(str) {
  return str.replace(/\-(.)/g, function (m, $1) {
    return $1.toUpperCase()
  })
}
