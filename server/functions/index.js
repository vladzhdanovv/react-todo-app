const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const firebase = require('firebase');
const admin = require('firebase-admin');

const app = express();
const serviceAccount = require("./config/react-todo-app-ca6ca-firebase-adminsdk-k6jup-1968b58563");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://react-todo-app-ca6ca.firebaseio.com"
});
const ref = admin.database().ref();

app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.send('Test');
})

app.get('/fetchTodos', (request, response) => {
    ref.once('value')
        .then((snap) => {
            console.log(snap.val())

            const values = Object.keys(snap.val().todos).map(function(key) {
                return snap.val().todos[key];
            });

            response.json(values)
        })
});

app.post('/addTodo', (request, response) => {
    let todosRef = ref.child('todos');
    todosRef = todosRef.push(request.body);
    console.log(todosRef);
    response.json({
        success: "true"
    })
});

app.get("*", (request, response) => {
    response.send("Hello from Express on Firebase with CORS!")
});

const api = functions.https.onRequest(app)

module.exports = {
    api
}