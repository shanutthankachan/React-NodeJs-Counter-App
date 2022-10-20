const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser    = require('body-parser');



app.use(cors())
app.use(express.json());
app.use(bodyParser.json())



app.get('/', (req, res) => {
  res.send('Hello World!')
})


/*

  @API
    Counter get and put

*/

class Db{


  constructor(counter=0){
    this.counter = counter;
  }
  set count(counter){
     this.counter = counter;
  }
  get count(){
    return this.counter;
  }
}




const callFromDb = new Db();
let getValue = callFromDb.count;

console.log('callFromDb',callFromDb.count)

 // get count
app.get('/count', (req, res) => {
  console.log(' get count')
  return res.json({ count: callFromDb.count })
})


// update count
app.put('/count', (req, res) => {
  

  callFromDb.count = req.body.count;
  return res.json({count : callFromDb.count });
})







app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





