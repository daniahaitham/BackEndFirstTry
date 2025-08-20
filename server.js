import express from 'express';
const app = express();

const PORT = 5000; //any thing not already used 
//this will be changed on deployment ( not locally )

//we have to have a req : 
app.get('/', (req, res) => { 
    res.send('Hello World');
});

app.get('/test', (req, res) => { 
    res.json({ test: 'test' });
});

//handling errors
app.use((req, res) => {
    res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`Server is running `);
});
