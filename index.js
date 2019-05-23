import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './data/schema';


const PORT = 22334;

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(PORT, () => console.log('Running server on port localhost:' + PORT + '/graphql'));