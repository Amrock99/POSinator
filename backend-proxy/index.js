const express = require("express");
const request = require("request");
const app = express();
const { default: axios } = require("axios");

const API_URL = "https://demo.ezetap.com/api/2.0/ca/app/config/get";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

app.use(express.json());

app.use("/api", async (req, res) => {
  const url = `${API_URL}${req.url}`;
  const response = await axios.post(
    "https://demo.ezetap.com/api/2.0/ca/app/config/get",
    { username: "4204201231", password: "123456Q" },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Cookie:
          "jsessionid=3bd59052-ca5d-4e08-83de-5091219236ba; jsessionid=b82f8bd0-655c-4cb3-bffc-8fd020f56529",
      },
      withCredentials: true,
      credentials: "include",
    }
  );
  console.lo(response);
  req.pipe(request(url)).pipe(res);
  req.send;
});

app.listen(3001, () => {
  console.log("Proxy server running on http://localhost:3001");
});
