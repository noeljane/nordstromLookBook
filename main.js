// console.log("It's working")
// fetch('https://www.nordstromrack.com/api/search2/catalog/search?query=embedded')
//   .then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' +
//           response.status);
//         return;
//       }

//       // Examine the text in the response
//       response.json().then(function(data) {
//         console.log(data);
//       });
//     }
//   )
//   .catch(function(err) {
//     console.log('Fetch Error :-S', err);
//   });

const 
    express = require('express')
    app = express()
    http = require('http').Server(app)
    PORT = process.env.PORT || 3000
    request = require('request')

    logger = require('morgan')
    bodyParser = require('mongoose')
    ejsLayouts = require('express-ejs-layouts')

//Middleware
app.use(logger('combined'))

app.set('view engine', 'ejs')
app.use(ejsLayouts)

// API
app.get('/', (req, res) => {
    console.log("app.get is running")
    var url =`https://www.nordstromrack.com/api/nrhl/products`
    request.get(url, (err,response, body ) => {
        if (err) console.log(err)
        var data = JSON.parse(body)
        
       
        res.render('index.ejs', {data: data })
    })
})


http.listen(PORT, (err) => {
    console.log( err || `Server running on port ${PORT}`)
})