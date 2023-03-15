var express = require('express');
var cookieParser = require('cookie-parser')
const app = express();
const port = 3005;

app.use(cookieParser())
app.use(express.json())

app.get('/', (req, res) => { res.send("Hello World!") })

app.get('/login/:name', function (req, res) {

  // define cookie attributes
  // var opts = {
  //   maxAge: 900000,
  //   httpOnly: true,
  //   sameSite: 'strict',
  //   newName: ''
  // };

  // add a cookie to the response
  res.cookie('name', 'Joey');
  res.status(200).send({ msg: 'Logged In.' })

});

app.get('/hello', function (req, res) {

  // define cookie attributes
  // var opts = {
  //   maxAge: 900000,
  //   httpOnly: true,
  //   sameSite: 'strict',
  //   newName: ''
  // };

  // add a cookie to the response
  res.cookie('name', 'Joey');
  res.status(200).send({'Hello, ${name}'})

});
app.listen(port, () => {
  console.log(`Cookie app listening at http://localhost:${port}`)
});
