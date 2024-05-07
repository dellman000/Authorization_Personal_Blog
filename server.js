const express = require('express');
const routes = require('./routes');
const { engine } = require('express-handlebars')
const path = require('path')
const session = require('express-session')
require('dotenv').config();
// import sequelize connection
const client = require('./config/connection')
const app = express();
const PORT = process.env.PORT || 3001;
const SequelizeStore = require("connect-session-sequelize")(session.Store);
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');




app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
      db: client,
  }),
  cookie: { expires: 60000 }
}))

app.use(routes);
// sync sequelize models to the database, then turn on the server

client.sync({force: false})
.then(()=>{ app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
})


