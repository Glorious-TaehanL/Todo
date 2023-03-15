const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'static', 'main.html')));

app.get('/', (req, res) => {
  res.render('main', { result: 'test' });
});

app.get('/write',(req,res)=>{
    res.render('write');
});

app.get('/list',(req,res)=>{
    res.render('list');
});

app.listen(8080);
