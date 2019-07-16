const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());


app.listen(3204, () => {
    console.log('server started');
   // sequelize.sync();
})