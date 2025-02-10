const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        username: "JohnDoe",
        htmlContent: "<strong>This is bold text</strong>",
        isAdmin: true,
        items: ["Apple", "Banana", "Cherry"]
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
