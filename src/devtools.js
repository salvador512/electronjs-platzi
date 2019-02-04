
import { enableLiveReload } from 'electron-compile'
import electronDebug from 'electron-debug'

module.exports = function devtools (argument) {
  enableLiveReload()
  electronDebug({
  	showDevTools:true
  })
}
