// This gives you default context menu (cut, copy, paste)
// in all input fields and textareas across your app.

(function () {
  'use strict'

  const remote = require('electron').remote
  const Menu = remote.Menu
  const MenuItem = remote.MenuItem

  let isAnyTextSelected = function () {
    return window.getSelection().toString() !== ''
  }

  let cut = new MenuItem({
    label: 'Cut',
    click: function () {
      document.execCommand('cut')
    }
  })

  let copy = new MenuItem({
    label: 'Copy',
    click: function () {
      document.execCommand('copy')
    }
  })

  let paste = new MenuItem({
    label: 'Paste',
    click: function () {
      document.execCommand('paste')
    }
  })

  let normalMenu = new Menu()
  normalMenu.append(copy)

  let textEditingMenu = new Menu()
  textEditingMenu.append(cut)
  textEditingMenu.append(copy)
  textEditingMenu.append(paste)

  document.addEventListener('contextmenu', function (e) {
    switch (e.target.nodeName) {
    case 'TEXTAREA':
    case 'INPUT':
      e.preventDefault()
      textEditingMenu.popup(remote.getCurrentWindow())
      break
    default:
      if (isAnyTextSelected()) {
        e.preventDefault()
        normalMenu.popup(remote.getCurrentWindow())
      }
    }
  }, false)
}())
