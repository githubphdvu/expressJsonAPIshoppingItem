//https://youtu.be/-DfFDygHIUg
//for supertesting, move into here; or instead of node app.js, just do node server.js (or nodemon)
const app = require("./app")
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>console.log(`Server starting on port: ${PORT}`)) 

