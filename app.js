const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs'); //Use this whenver u use ejs
app.use(express.static('public')); // Used when you want to add local stylesheets
var items = ['wash clothes', 'do laundry'];

app.get('/', function(req, res) {
  let today = new Date();
  let todayDay = today.getDay()
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  var options = {
    day: 'numeric',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  
  var day = today.toLocaleDateString('en-UK', options);
  res.render('list', {
    kindOfDay: day,
    newListItem: items
  });
});

app.post('/', function(req, res) {
  let item = req.body.newTask;
  items.push(item)
  res.redirect('/');
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});