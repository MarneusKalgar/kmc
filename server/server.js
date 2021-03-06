var express = require('express');
var app = express();
const path = require('path');
// const compression = require('compression');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/../prod', { maxage: '30d' }));
// app.use(compression());

app.get('/health-check', (req, res) => {
    res.json({
        status: 'Ok'
    })
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../prod/index.html'));
});

// === START SERVER ===
const port = process.env.PORT || 3001;
app.listen(port);

console.log(`=== NODE JS server is running on ${port} ===`);