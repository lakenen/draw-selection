# draw-selection

A node module for drawing boxes around a DOM selection.

## Install

```
npm install draw-selection
```


## Run

`drawSelection([containerEl [, styles]])`

### args
* `containerEl` - (optional) `Element` to insert the boxes (assumes the selection is relative to that container)
* `styles` - (optional) `object` that contains CSS properties and values to apply to the boxes (default `{ outline: '1px solid red', 'pointer-events': 'none' }`)

### returns
* `els` - an array of `Element`s that were created



```html
<html>
<body>
<p>hello, world!</p>
</body>
</html>
```

```js

var drawSelection = require('draw-selection')
var sel = window.getSelection()
sel.removeAllRanges()

var range = document.createRange()
range.selectNode(document.querySelector('p'))
sel.addRange(range)

drawSelection({
  outline: '1px inset blue'
})
```

## License

([The MIT License](LICENSE))

Copyright 2015 Cameron Lakenen
