import { config } from "dotenv"
config();
//console.log(process.env.PORT)
export default {
    port: process.env.PORT || 3000,
    server: process.env.SERVERNAME,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE   
}