
export const isLoggedIn = async ( req,res,next ) => {
    if( req.session.loggedin == true ){
        return next()
    }
        return res.redirect( '/auth/signin' )
    
}

export const isNotLoggedIn = async ( req,res,next ) => {
    if( req.session.loggedin != true ){
        return next()
    }
    return res.redirect( '/auth/profile' )
}