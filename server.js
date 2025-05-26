const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;

// Set up Handlebars view engine
app.engine('hbs', exphbs.engine({ extname: '.hbs', defaultLayout: 'main', layoutsDir: path.join(__dirname, 'app_server', 'views', 'layouts') }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Serve static assets (css, images)
app.use(express.static(path.join(__dirname, 'public')));

// Set up main site routes (to be created)
const siteRouter = require('./app_server/routes/site');
app.use('/', siteRouter);

// Initialize server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
