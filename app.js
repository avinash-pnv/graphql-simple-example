const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

//Create a middle ware, and create a endpoint(supercharged end-point)
app.use('/graphql', graphqlHTTP({
	
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
