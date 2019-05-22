import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const PORT = 22334;

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

const root = { friend: () => {
    return {
        "id": 1234123,
        "firstName": "Oliver",
        "lastName": "Mac",
        "gender": "male",
        "language": "Danish",
        "emails": [
            {email: "ol@ol.dk"}, 
            {email: "another@ol.dk"}
        ]
    }
} };

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))

app.listen(PORT, () => console.log('Running server on port localhost:' + PORT + '/graphql'));