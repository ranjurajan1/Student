const express = require("express")
const app = express()
const port = 4000
const cors = require("cors")
const sqlite3 = require('sqlite3').verbose();
let sql = 'CREATE TABLE Students(Name TEXT,Department TEXT,Email TEXT,Mobile TEXT,Address TEXT)'
// open database in memory
let db = new sqlite3.Database('./test.db',sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

// db.run("CREATE TABLE Students (Name TEXT,Department TEXT,Email TEXT,Mobile TEXT,Address TEXT)");
// npm init
// npm i express cors nodemon
// they add a handy req.body object to our req,
// containing a Javascript
//  object representing the payload sent with the request

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get("/", cors(), async (req, res) => {
	res.send("This is working")
})
app.get("/home", cors(), async (req, res) => {
	sql = 'SELECT * FROM Students'
    db.all(sql,[],(err,rows)=>{
        console.log(rows)
        res.json(rows)
    })
})

app.post("/post_name", async (req, res) => {
	let data = req.body;

	console.log(data)
        
    
        sql = "INSERT INTO Students(Name,Department,Email,Mobile,Address) VALUES (?,?,?,?,?)"
            let {name,email,department,mobile,address} = data
            db.run(sql,[name,department,email,mobile,address])
        
   
    // close the database connection
   
    
})
// db.close((err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('Close the database connection.');
//   });
app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
})