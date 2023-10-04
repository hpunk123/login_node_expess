import app from './app.js'
import { PORT } from './config.js'

app.listen( PORT )
console.log( `CandySoft is running on port ${ PORT }`)