const express = require('express');
const app = express();
const PORT=3000;

app.get('/',(req,res)=>{

res.sendFile(__dirname + '/view' + req.url );

});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public' + req.url);
});
app.listen(3001,()=>{console.log('Estamos corriendo en el puerto'+ PORT)});