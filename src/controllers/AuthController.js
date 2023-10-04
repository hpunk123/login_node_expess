import { PoolCandy } from '../database/connection.js'
import { addUser,findUser,findUserLogin } from '../database/CandyQuery.js'
import bcrypt from 'bcrypt'

export const home = async ( req,res ) => {
    if( req.session.loggedin != true ){
        res.render( 'index' )
    }else{
        res.render( 'index', { user: req.session.name } )
    }
}

export const signin = async ( req,res ) => {
    if( req.session.loggedin != true ){
        res.render( 'auth/signin' )
    }else{
        res.redirect( '/auth/profile' )
    }    
}

export const signup = async ( req,res ) => {
    try{
        if( req.session.loggedin != true ){
            res.render( 'auth/signup' )
        }else{
            res.redirect( '/auth/profile' )
        }        
    }catch( e ){
        console.log( e )
    }    
}

export const createUser = async ( req,res ) => {
    try{
        const { usrUsername,password,usrNombre } = req.body               
        const  [ rows ]  = await PoolCandy.query( findUser, usrUsername ) 
            if( rows.length === 0 ){
              //Encrypting password
                const saltRounds = 10
                bcrypt.hash(password, saltRounds, async function (err, usrPassword) {
                    const usrData = { usrUsername,usrPassword,usrNombre }   
                    await PoolCandy.query( addUser,usrData )  
                })        
                req.flash('success', 'Usuario guardado !')
                res.redirect('back')
            }else{
                req.flash('message', 'Este usuario ya existe !')
                res.redirect('back')
            }
    }catch( e ){
        console.log( e )
    }    
}

export const userValidator = async( req,res ) => {
    const { username,password } = req.body
    try{
        const [ rows ] = await PoolCandy.query( findUserLogin,username )
        if( rows.length === 1 ){
            const usrPassword = rows[0].usrPassword
            const usrId  = rows[0].usrId
            const usrNombre  = rows[0].usrNombre
            bcrypt.compare( password,usrPassword, function( e,result ){
                if( result ){                                    
                    req.session.loggedin = true
                    req.session.username = username
                    req.session.name = usrNombre
                    req.flash('success', `Bienvenid@ ${ usrNombre }`)
                    res.redirect( '/auth/profile' )
                }else{
                    req.flash('message', 'Contraseña Incorrecta')
                    res.redirect( 'back' )      
                }
            })
        }else{
            req.flash('message', 'Usuario No Registrado')
            res.redirect( 'back' )            
        }
    }catch( e ){
        console.log( e )
    }    
}

export const profile = async ( req,res ) => {    
        res.render( 'profile', { user: req.session.name } )
}

export const logout = async ( req,res ) => {
    if( req.session.loggedin == true ){
        req.session.destroy()
        res.redirect( '/auth/signin' )
    }else{
        res.redirect( '/auth/signin' )
    }
}