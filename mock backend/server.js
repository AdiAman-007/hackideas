const express = require('express')
const fs = require("fs");
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", 'GET');
  next();
});
const port = 3000

app.get('/users', (req, res) => {
  console.log("GET--users")
  fs.readFile('./users.json', (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
})

app.get('/app-config', (req, res) => {
  console.log("GET--app-config")
  fs.readFile('./appConfig.json', (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
})

app.post('/app-config', (req, res) => {
  fs.writeFile('./appConfig.json', JSON.stringify(req.body), (err) => {
    if (err) res.send(err)
    res.send("success")
  })
})

app.get('/tags', (req, res) => {
  console.log("GET--tags")
  fs.readFile('./challengeConfigs.json', (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
})

app.get('/challenges', (req, res) => {
  console.log("GET--challenges")
  fs.readFile('./challenges.json', (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
})

app.post('/upvote', (req, res) => {
  console.log("POST--upvote")
  fs.readFile('./challenges.json', (err, data) => {
    if (err) res.send(err);
    let challenges = JSON.parse(data)
    let user = req.body[0]
    let payload = JSON.parse(JSON.stringify(req.body[1]))
    fs.readFile('./users.json', (err, data) => {
      if (err) res.send(err);
      let users = JSON.parse(data);
      console.log(users)
      users.forEach((u)=>{
        if(u['name']==user && !u['upvotedChallenges'].includes(payload['id'])){
          u['upvotedChallenges'].push(payload['id'])
          challenges.forEach((c) => {
            if (c['id'] == payload['id']) {
              c['upvotes'] = payload['upvotes']
            }
          })
          fs.writeFile('./challenges.json', JSON.stringify(challenges), (err) => {
            if (err) res.send(err)
          })
        }
      })
      console.log(users)
      fs.writeFile('./users.json', JSON.stringify(users), (err) => {
        if (err) res.send(err)
      })
    })
  });
})

app.post('/addchallenge',(req,res)=>{
  console.log("POST--addchallenge")
  fs.readFile('./challenges.json', (err, data) => {
    if (err) res.send(err);
    let challenges = Array.from(JSON.parse(data))
    let formData = req.body
    let payload = [...challenges,formData]
    fs.writeFile('./challenges.json', JSON.stringify(payload) ,(err, data)=>{
      if(err) res.send(err)
    })
  })
})

app.listen(port, () => {
  console.log(`mock backend listening at http://localhost:${port}`)
})
