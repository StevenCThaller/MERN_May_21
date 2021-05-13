const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

class User {
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
    }
}


app.get("/hello", (req, res) => {
    res.json({ zebra: "Hello, my name is Cody" })
});

app.get("/goodbye", (req,res) => {
    res.json({ message: "Oh, ok, I guess you can leave." });
});

app.get("/newuser", (req, res) => {
    let user = new User("Cody", 30, "sthaller@codingdojo.com");

    res.json({ user: user })
})

app.listen(8000, () => console.log("Now running on port 8000"));