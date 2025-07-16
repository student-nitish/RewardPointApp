const express = require('express');
const app = express();
const dotenv = require('dotenv');
 const cors = require('cors');
 app.use(express.json());
app.use(cors());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
const userRouter=require("./Routes/User")
const historyRouter=require("./Routes/History")
dotenv.config();
 
app.use("/api/v1",userRouter);
app.use("/api/v1",historyRouter);
const PORT = process.env.PORT || 4000;

const seedUser=require("./config/mongoDbConnect");
seedUser();


 

// Express route
app.get('/', (req, res) => {
  res.send('Hello from backend!');
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
