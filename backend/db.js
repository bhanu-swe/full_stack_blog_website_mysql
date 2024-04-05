import mysql2 from "mysql2"

export const db = mysql2.createConnection({
  host:"localhost",
  user:"root",
  password: "Bhanu@123",
  database:"blog"
})