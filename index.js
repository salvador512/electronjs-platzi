'use strict'

const { app, BrowserWindow } = require('electron')

app.on('before-quit', function () {
	console.log('Saliendo...')
})

app.on('ready', function() {
	let win = new BrowserWindow()

	win.on('closed',function() {
		win = null
		app.quit()
	})
})
