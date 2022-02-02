const express = require('express');
const app = express();
const port = 5000;
const myLogger = require('./middlewares/logger');
const userRouter = require('./api/user/users.js')
const cors = require('cors');

app.use(myLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

app.use("/users", userRouter);

app.get("/",(req,res)=>{
    res.send('Welcome to the Home Page');
})


app.listen(port,()=>{
    console.log(`Listen on port ${port}`)
})