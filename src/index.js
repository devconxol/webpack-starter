import './style.css'

if(module.hot){
	module.hot.accept('./', function () {
		console.log('Hot reloading...')
	})
}