import app from "./server.js"
import mongodb from "mongodb"
import ReviewDAO from "./dao/reviewsDAO.js"

const MongoClient = mongodb.MongoClient

const mongo_username=process.env['MONGO_USERNAME']
const mongo_password=process.env['MONGO_PASSWORD']
uri= `mongodb+srv://${mongo_username}:${mongo_username}@cluster0.q2zds1y.mongodb.net/?retryWrites=true&w=majority`

//https://www.youtube.com/watch?v=qTU7w3bWrOk -> Stunde 6