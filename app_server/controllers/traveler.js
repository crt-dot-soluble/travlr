module.exports = {
    index: (req, res) => {
        res.render('index', { title: 'Home' });
    },
    about: (req, res) => {
        res.render('about', { title: 'About' });
    },
    rooms: (req, res) => {
        res.render('rooms', { title: 'Rooms' });
    },
    meals: (req, res) => {
        res.render('meals', { title: 'Meals' });
    },
    news: (req, res) => {
        res.render('news', { title: 'News' });
    },
    travel: (req, res) => {
        res.render('travel', { title: 'Travel' });
    },
    contact: (req, res) => {
        res.render('contact', { title: 'Contact' });
    }
};
