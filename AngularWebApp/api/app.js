const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to Node API')
})

app.get('/getData', (req, res) => {
   
	let jsonData = require('./data.json');

	console.log(jsonData);
	
	res.jsonData
})

app.post('/postData', bodyParser.json(), (req, res) => {

   // res.json(req.body)
	const fs = require('fs');
	let data = JSON.stringify(req.body, null, 2);
	fs.writeFile('data.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
 });
 

	
})

 app.post('/insertData', bodyParser.json(), (req, res) => {

   // res.json(req.body)
	const fs = require('fs');
	
	let jsonData = require('./data.json');
	jsonData.push(req.body);
	let data = JSON.stringify(jsonData, null, 2);
	fs.writeFile('data.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
 });
 

	
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))