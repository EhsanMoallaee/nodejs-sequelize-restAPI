const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/productRouter');

const app = express();

let coreOptions = {
    origin: 'http://localhost:8081'
}

// middlewares
app.use(cors(coreOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routers
app.use('/api/products' , productRouter);

//testing api
app.get('/' , (req , res) => {
    res.status(200).json({message: 'Hello from api'});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT , () => {
    console.log(`app running on port : ${PORT}`);
})