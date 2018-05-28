var querystring = require('querystring'),
    http = require('http'),
    express = require('express'),
    cors = require('cors'),
    NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 3535;

app.use(bodyParser.json()); // support json encoded bodies
app.use(cors());

// The request for fetching categories will come here
app.post('/', (req, res) => {
    fetchCategory(req.body.url, res);
})

var server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

function fetchCategory(url, res) {
    // credentials are set in the NLU configuration, from IBM cloud
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
    if (err) {
        // send the error to the frontend, so we can show an error message
        res.send(err);
    }
    else {
        if (res) {
            // send the categories array to the frontend
            res.send(JSON.stringify(response.categories, null, 2))
        }
    }
    });
}

module.exports = server;