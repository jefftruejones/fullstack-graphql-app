const express = require('express')
var cors = require('cors')
const expressGraphQL = require('express-graphql').graphqlHTTP;
const schema = require('./schema')

const app = express()
app.use(cors())
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(8000, () => {
    console.log('Server is running at port 8000')
})
