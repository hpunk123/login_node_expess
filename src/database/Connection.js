import { createPool } from 'mysql2/promise'
import {  PORT,DB_HOST,DB_PORT,DB_USER,DB_PASS,DB_DATABASE } from '../config.js'

export const PoolCandy = createPool( 
{
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    port: DB_PORT,
    database: DB_DATABASE,
    dateStrings: true
})

export const sessionDB = {    
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASS,
        database: DB_DATABASE
}