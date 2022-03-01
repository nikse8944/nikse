const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const app = express();

const UserRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")


dotenv.config();

mongoose.connect(process.env.MONGO_URL, ()=>{
    console.log("connectionik");
    // can be problemS
});
// middlewere
app.use(express.json());
app.use(helmet());
app.use(morgan("common"))

app.use("/api/users",UserRoute)
app.use("/api/auth",authRoute)
app.use("/api/posts",postRoute)



app.listen(8800,()=>{
    console.log("we are ready")
})