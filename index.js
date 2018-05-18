const express = require('express');
const fs = require('fs');
const hbs = require('hbs');

var app = express();

var time = new Date();
app.set('view engine','hbs')

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('newdate',(text) => {
  return text.toUpperCase();
})



app.listen(3000,() => {
  console.log('Server Listening on port 3000');
})

app.use(express.static(__dirname + '/website'));


app.get('/', (req , res) => {
  res.send('<h1>Hi Mithilesh</h1>');

  fs.appendFile('app.log', 'Request recieved from ' +req.url+ '   ' + time+ '\n');
})

app.get('/home', (req,res) => {
  res.render('homepage.hbs',{
    name:'Mithilesh'
  })

  fs.appendFile('app.log', 'Request recieved from ' +req.url+ '   ' + time+ '\n');
})

app.get('/data' , (req , res) => {
  res.send({
    name:'Mithilesh',
    origin:'Jamshedpur'
  })
  fs.appendFile('app.log', 'Request recieved from ' +req.url+ '   ' + time+ '\n');
})
