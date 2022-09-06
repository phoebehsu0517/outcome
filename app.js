const express = require('express');
const ejs = require('ejs');
const path = require('path');
const bodyparser = require('body-parser');
const jwt = require('jsonwebtoken');
const cookieparser = require('cookie-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { config } = require('process');
const app = express();
dotenv.config();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: false }))
app.use(cookieparser());

const mongoDB = process.env.DB;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB connect!")
    })
    .catch((err) => {
        console.log(err)
    })

const Schema = mongoose.Schema;


const ResponseSchema = new Schema(
    {
        user: {
            type: String
        },
        age: {
            type: Number
        },
        career: {
            type: String
        },
        email: {
            type: String
        },
        sortIndependence: {
            type: String
        },
        answerIndependence: {
            type: String
        },
        sortIdentity: {
            type: String
        },
        answerIdentity: {
            type: String
        },
        sortAchievement: {
            type: String
        },
        answerAchievement: {
            type: String
        },
        sortFreeTime: {
            type: String
        },
        answerFreeTime: {
            type: String
        },
        sortPower: {
            type: String
        },
        answerPower: {
            type: String
        },
        sortReputation: {
            type: String
        },
        answerReputation: {
            type: String
        },
        sortMoney: {
            type: String
        },
        answerMoney: {
            type: String
        },
        sortExormisis: {
            type: String
        },
        answerExormisis: {
            type: String
        },
        sortSelfEsteem: {
            type: String
        },
        answerSelfEsteem: {
            type: String
        },
        sortFamily: {
            type: String
        },
        answerFamily: {
            type: String
        },
        sortSafety: {
            type: String
        },
        answerSafety: {
            type: String
        },
        sortGrowth: {
            type: String
        },
        answerGrowth: {
            type: String
        },
        randomid: {
            type: Number
        },
        date: {
            type:String
        }
    })


/*
const ResponseSchema = new Schema(
    {
        user: {
            type: String
        },
        age: {
            type: Number
        },
        career: {
            type: String
        },
        email: {
            type: String
        },
        sortIndependence: {
            type: Number
        },
        answerIndependence: {
            type: Number
        },
        sortIdentity: {
            type: Number
        },
        answerIdentity: {
            type: Number
        },
        sortAchievement: {
            type: Number
        },
        answerAchievement: {
            type: Number
        },
        sortFreeTime: {
            type: Number
        },
        answerFreeTime: {
            type: Number
        },
        sortPower: {
            type: Number
        },
        answerPower: {
            type: Number
        },
        sortReputation: {
            type: Number
        },
        answerReputation: {
            type: Number
        },
        sortMoney: {
            type: Number
        },
        answerMoney: {
            type: Number
        },
        sortExormisis: {
            type: Number
        },
        answerExormisis: {
            type: Number
        },
        sortSelfEsteem: {
            type: Number
        },
        answerSelfEsteem: {
            type: Number
        },
        sortFamily: {
            type: Number
        },
        answerFamily: {
            type: Number
        },
        sortSafety: {
            type: Number
        },
        answerSafety: {
            type: Number
        },
        sortGrowth: {
            type: Number
        },
        answerGrowth: {
            type: Number
        },
        randomid: {
            type: Number
        },
        date: {
            type:String
        }
    })
*/
const ResponseData = mongoose.model('responses', ResponseSchema)












app.get('/', (req, res) => {
    res.render('index');
});

app.get('/example', (req, res) => {
    res.render('example');
});

app.get('/test', (req, res) => {
    res.render('test');
});


app.get('/contactus', (req, res) => {
    res.render('contactus');
})

app.get('/loginPage', (req, res) => {
    res.render('loginPage');
});


app.post('/login', (req, res) => {
    console.log(JSON.stringify(req.body));
    console.log(process.env.USANAME);
    console.log(process.env.PASAWORD);
    if (req.body.username == process.env.USANAME && req.body.password == process.env.PASAWORD) {
        var token = jwt.sign({ username: req.body.username }, process.env.SECRET, { expiresIn: '1h' });
        console.log(token)
        res.cookie("token", token);
    }
    else {
        res.render('index');
    }
    res.redirect('responses');
});



app.get('/loginPage', async function (req, res) {
    res.render('loginPage');
});

app.post('/response', async function (req, res) {
    console.log(JSON.stringify(req.body));
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let date = yyyy + "/test" + mm + "/test" + dd;
    console.log(date);
    const newResponse = new ResponseData({
        user: req.body.user,
        age: req.body.age,
        career: req.body.career,
        email: req.body.email,
        sortIndependence: req.body.sortIndependence,
        answerIndependence: req.body.answerIndependence,
        sortIdentity: req.body.sortIdentity,
        answerIdentity: req.body.answerIdentity,
        sortAchievement: req.body.sortAchievement,
        answerAchievement: req.body.answerAchievement,
        sortFreeTime: req.body.sortFreeTime,
        answerFreeTime: req.body.answerFreeTime,
        sortPower: req.body.sortPower,
        answerPower: req.body.answerPower,
        sortReputation: req.body.sortReputation,
        answerReputation: req.body.answerReputation,
        sortMoney: req.body.sortMoney,
        answerMoney: req.body.answerMoney,
        sortExormisis: req.body.sortExormisis,
        answerExormisis: req.body.answerExormisis,
        sortSelfEsteem: req.body.sortSelfEsteem,
        answerSelfEsteem: req.body.answerSelfEsteem,
        sortFamily: req.body.sortFamily,
        answerFamily: req.body.answerFamily,
        sortSafety: req.body.sortSafety,
        answerSafety: req.body.answerSafety,
        sortGrowth: req.body.sortGrowth,
        answerGrowth: req.body.answerGrowth,
        randomid: Date.now(),
        date: date

    })
    await newResponse.save();
    res.render('responseSent', {
        user: req.body.user,
        age: req.body.age,
        career: req.body.career,
        email: req.body.email,
        sortIndependence: req.body.sortIndependence,
        answerIndependence: req.body.answerIndependence,
        sortIdentity: req.body.sortIdentity,
        answerIdentity: req.body.answerIdentity,
        sortAchievement: req.body.sortAchievement,
        answerAchievement: req.body.answerAchievement,
        sortFreeTime: req.body.sortFreeTime,
        answerFreeTime: req.body.answerFreeTime,
        sortPower: req.body.sortPower,
        answerPower: req.body.answerPower,
        sortReputation: req.body.sortReputation,
        answerReputation: req.body.answerReputation,
        sortMoney: req.body.sortMoney,
        answerMoney: req.body.answerMoney,
        sortExormisis: req.body.sortExormisis,
        answerExormisis: req.body.answerExormisis,
        sortSelfEsteem: req.body.sortSelfEsteem,
        answerSelfEsteem: req.body.answerSelfEsteem,
        sortFamily: req.body.sortFamily,
        answerFamily: req.body.answerFamily,
        sortSafety: req.body.sortSafety,
        answerSafety: req.body.answerSafety,
        sortGrowth: req.body.sortGrowth,
        answerGrowth: req.body.answerGrowth
    });
});





app.get('/responses', function (req, res) {
    if (req.cookies.token) {
        jwt.verify(req.cookies.token, process.env.SECRET, async function (err) {
            if (err) {
                console.log("token錯誤");
                res.clearCookie('token');
                res.redirect('/test');
                //token過期判斷
            }
            else {
                let datas = await ResponseData.find();
                let dataLength = datas.length;
                let dateArray = [];
                for(let i=0; i<dataLength;i++){
                    dateArray.push(datas[i]["date"]);
                }
                let filteredArray = dateArray.filter(function(item, pos){
                    return dateArray.indexOf(item)== pos; 
                  });
                console.log(filteredArray);
                console.log(datas.length);
                console.log(datas);
                res.render('responses', {
                    dlength: dataLength,
                    data: datas,
                    dateArray: filteredArray
                });
            }
        })
    }
    else {
        res.redirect('/test');
    }
});

app.post('/datepick', function (req, res) {
    let selectedate = req.body.date
    if (req.cookies.token) {
        jwt.verify(req.cookies.token, process.env.SECRET, async function (err) {
            if (err) {
                console.log("token錯誤");
                res.clearCookie('token');
                res.redirect('/test');
                //token過期判斷
            }
            else {
                let dateta = await ResponseData.find({date: selectedate});
                let datas = await ResponseData.find();
                let datetaLength = dateta.length;
                let dataLength = datas.length;
                let dateArray = [];
                for(let i=0; i<dataLength;i++){
                    dateArray.push(datas[i]["date"]);
                }
                let filteredArray = dateArray.filter(function(item, pos){
                    return dateArray.indexOf(item)== pos; 
                  });
                console.log(filteredArray);
                console.log(datas.length);
                console.log(datas);
                res.render('responses', {
                    dlength: datetaLength,
                    data: dateta,
                    dateArray: filteredArray
                });
            }
        })
    }
    else {
        res.redirect('/test');
    }
});


app.get('/data/:id',  (req, res) => {
    let userid =  req.params.id;
    console.log(userid);
    if (req.cookies.token) {
        jwt.verify(req.cookies.token, process.env.SECRET, async function (err) {
            if (err) {
                console.log("token錯誤");
                res.clearCookie('token');
                res.redirect('/test');
                //token過期判斷
            }
            else {
                let userdata = await ResponseData.findOne({ randomid: userid });
                console.log(userdata);
                res.render('data', {
                    userdata: userdata
                });
            }
        })
    }
    else {
        res.redirect('/test');
    }

})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log('Server up and running on ' + process.env.PORT + ' or 8000'));