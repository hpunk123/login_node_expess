
export const getUsers = 'SELECT * FROM cs_cat_usuarios'
export const addUser = 'INSERT INTO cs_cat_usuarios SET ?'
export const findUser = `SELECT * FROM cs_cat_usuarios WHERE usrUsername = ?`
export const findUserLogin = `SELECT * FROM cs_cat_usuarios WHERE usrUsername = ? LIMIT 1`
export const getDataUser = 'SELECT * FROM cs_cat_usuarios WHERE usrId = ?'