import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Cards from './dbCards.js';

//App config
const app=express();
const port=process.env.PORT || 8001;
const connection_url=`Database link`;

//Middleware
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//API endpoints
app.get("/", (req,res) => 
    res.status(200).send('HELLO WORLD hi!!'));

app.post("/tinder/cards", (req,res) => {
    const  dbCard=req.body;

    Cards.create(dbCard, (err,data) => {
        if(err)
        {
            res.status(500).send(err);
        }
        else
        {
            res.status(201).send(data);
        }
    });
});

app.get("/tinder/cards", (req,res) => {
    Cards.find( (err,data) => {
        if(err)
        {
            res.status(500).send(err);
        }
        else
        {
            res.status(200).send(data);
        }
    });
});

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
