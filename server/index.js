const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.listen(port, (req, res) => {
  console.log(`Running on port: ${port}`);
});

//RKhYxUNAH4Ub2WGC
//mongodb+srv://taalredickjake:<password>@cluster0.obxhdq5.mongodb.net/?retryWrites=true&w=majority
