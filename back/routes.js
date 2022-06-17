var express = require("express");
var router = express.Router();

const messages = [];

// send message
router.post("/", (req, res) => {
  console.log("req.body", req.body);

    // const body = {
    //     content: 'ashudfuahdsfshudf',
    //     receiver: 'gui',
    //     sender: 'fer'
    // }

    messages.push(req.body)

  return res.json({ status: "success" });
});

// get all messages
router.get("/", (req, res) => {
    console.log("req.body", req.body);

    return  res.json(messages);
  });

module.exports = router;