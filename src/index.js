'use strict'

import { app, BrowserWindow } from 'electron'
import devtools from './devtools'

if (process.env.NODE_ENV === 'development'){
	devtools()
}

app.on('before-quit', function () {
	console.log('Saliendo...')
})

app.on('ready', function() {
	let win = new BrowserWindow({
		width: 800,
		height: 600,
		title: 'Hola mundo',
		center: true,
		maximizable: false,
		show: false
	})

	win.once('ready-to-show', function() {
		win.show()
	})

	win.on('move',function() {
		const position = win.getPosition()
		console.log('La  posicion de la ventana es ' + position)
	})

	win.on('closed',function() {
		win = null
		app.quit()
	})

	win.loadURL(`file://${__dirname}/renderer/index.html`)
})
