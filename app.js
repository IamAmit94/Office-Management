const express = require("express");
const app = express();
const db = require("./Database/db");

const bodyParser = require("body-parser");

const addressRoutes = require("./Modules/Address/route");
const bankInfoRoutes = require("./Modules/bankInfo/route");
const documentsRoutes = require("./Modules/documents/route");
const phoneInfoRoutes = require("./Modules/phone/route");
const userInfoRoutes = require("./Modules/Users/route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bankInfoRoutes);
app.use(addressRoutes);
app.use(documentsRoutes);
app.use(phoneInfoRoutes);
app.use(userInfoRoutes);

app.listen(5000, () => {
  console.log(" The Port running is 5000 ");
});
