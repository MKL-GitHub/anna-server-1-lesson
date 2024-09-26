const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

let cities = require("./cities");

const PORT = 8888;
const HOST = "localhost";

const app = express();

app.use(bodyParser.json());
app.use(cors());

// http://localhost:8888/cities

app.get("/cities", (req, res) => {
  res.send(cities);
});

app.delete("/cities/:value", (req, res) => {
  const value = req.params.value;

  cities = cities.filter((city) => city.value !== value);

  res.send(value);
});

app.put("/cities/:value", (req, res) => {
  const value = req.params.value;
  const label = req.body;

  console.log("value", value);
  console.log("label", label);

  cities = cities.map((city) => {
    if (city.value !== value) {
      return { value, label };
    }

    return city;
  });
  res.send(cities);
});

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on ${PORT} port...`);
});
