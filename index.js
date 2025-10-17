const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");


// Configuration
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const email = process.env.EMAIL || 'testemail@example.com'
const name = process.env.NAME || 'John Doe'
const stack = process.env.STACK || 'Node.js/Express'


// Middleware
const corsOptions = {
  origin: "*", 
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));


const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: "Too many requests, please try again later.",
});

app.use(limiter);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
});


// Routes
app.get("/me", async (req, res) => {
  try {
    const { data } = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000, 
    });

    const response = {
      status: "success",
      user: {
        email,
        name,
        stack,
      },
      timestamp: new Date().toISOString(),
      fact: data.fact,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);

    res.status(500).json({
      status: "error",
      message: "Unable to fetch cat fact at the moment.",
    });
  }
});

app.use('/', (req, res, next) => {
  const allowedMethods = ['GET'];
  if (!allowedMethods.includes(req.method)) {
    res.status(405).send('Method Not Allowed');
    return;
  }
  next();
});

app.use((req, res) => {
  res.status(404).send('Page not found');
});


// Server Startup
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
