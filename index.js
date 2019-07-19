const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./configs/sequelize');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());

const homeRouter = require('./routes/home');
const bukuRouter = require('./routes/buku');
const orderRouter = require('./routes/order');
const userRouter = require('./routes/user');



const Buku = require('./models/Buku');
const User = require('./models/User');
const Order = require('./models/Order');
const Session = require('./models/Session');



//Asosiasi
Session.belongsTo(User);
Order.belongsTo(Buku);
Session.hasMany(Order);


app.use(homeRouter);
app.use('/buku', bukuRouter);
app.use('/order', orderRouter);
app.use('/user', userRouter);




app.listen(3204, () => {
    console.log('server started');
    sequelize.sync();
})