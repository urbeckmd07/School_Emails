const { response } = require("express");
const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/schools").get(function (req, res) {
  let db_connect = dbo.getDb("myFirstDatabase");
  db_connect
    .collection("schools")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

recordRoutes.route("/schools/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = {schoolId: parseInt(req.params.id)};
  db_connect
    .collection("schools")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

recordRoutes.route("/update/:dbId/:contactId").post(function (req, res) { 
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.dbId), "contacts.id": parseInt(req.params.contactId) };
  let newvalues = {$set : {"contacts.$.emailed": true}};
  db_connect
    .collection("schools")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
    });
})

recordRoutes.route("/updateResponded/:dbId/:contactId").post(function (req, res) { 
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.dbId), "contacts.id": parseInt(req.params.contactId) };
  let newvalues = {$set : {"contacts.$.responded": true}};
  db_connect
    .collection("schools")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
    });
})

module.exports = recordRoutes;
