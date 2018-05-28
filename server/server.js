var querystring = require('querystring');
var http = require('http');
var express = require('express');
var cors = require('cors');
var app = express();
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.post('/', (req, res) => {
    console.log(req.body);
    fetchCategory(req.body.url, res);
})
var port = 3535;
var server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

function fetchCategory(url, res) {
    
    var natural_language_understanding = new NaturalLanguageUnderstandingV1({
    'username': 'a0aca04c-615a-4c39-b125-28fcb80ce801',
    'password': 'AoTWFN0WaqGP',
    'version': '2018-03-16'
    });

    var parameters = {
    'url': url,
    'features': {
        'categories': {}
    }
    };

    natural_language_understanding.analyze(parameters, function(err, response) {
    if (err)
        console.log('error:', err);
    else {
        console.log(JSON.stringify(response, null, 2));
        if (res) {
            res.send(JSON.stringify(response.categories, null, 2))
        }
    }
    });
}