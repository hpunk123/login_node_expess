import express from 'express'
import { engine } from "express-handlebars"
import morgan from "morgan"
import session from 'express-session'
import cookieParser from 'cookie-parser'
import flash from 'connect-flash'
import __dirnames from './utils.js'
import * as path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath( import.meta.url)
const __dirname = path.dirname( __filename )

//Import Routes
import AuthRoutes from './routes/AuthRoutes.js'

//Settings
const app = express()
app.use(flash())
const sessionStore = new session.MemoryStore
app.use( express.json() )
app.use( express.urlencoded({ extended: false }))
app.use( morgan('dev') )


app.set('views', path.resolve(__dirname, 'views'))
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.resolve(app.get('views'), 'layouts'),
    partialsDir: path.resolve(app.get('views'), 'partials'),  
    extname: '.hbs',    
}))
app.set('view engine', '.hbs')

app.use(cookieParser('secret'));
app.use(session({
    cookie: { maxAge: 60000 },
    store: sessionStore,
    saveUninitialized: true,
    resave: true,
    secret: 'secret'
}));

//Globals variables
app.use(function(req, res, next){    
    app.locals.success = req.flash('success')
    app.locals.message = req.flash('message')
    next();
});

//Routes
app.use( '/auth',AuthRoutes )



//Public
app.use( express.static( path.join( __dirname,'public' )))

export default app