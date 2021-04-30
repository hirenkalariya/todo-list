const express = require("express");
const router = express.Router();
const userModel = require(".././models/userModel");

router.get("/", async (req, res) => {
  const result = await userModel.find();
  res.render("home", { data: result });
});
router.post("/", async (req, res) => {
    const serch = req.body.serch;
    const result = await userModel.find({
      $or: [
        { name: { $regex: serch, $options: "i" } },
        { email: { $regex: serch, $options: "i" } },
        { mobile: { $regex: serch, $options: "i" } }
      ],
    });
    // db.inventory.find( { $or: [ { quantity: { $lt: 20 } }, { price: 10 } ] } )
    console.log(result);
    res.render("home", { data: result });
  });
router
  .route("/adduser")
  .get((req, res) => {
    res.render("adduser", { alert: "" });
  })
  .post(async (req, res) => {
    try {
      const data = new userModel({
        name: req.body.name,
        email: req.body.email,
        mobile: (req.body.mobile).toString(),
        aryyoustudent: req.body.aryyoustudent,
      });
      const result = await data.save();
      console.log(result);
      res.render("adduser", { alert: "add data sucessfully...." });
    } catch (error) {
      console.log(error);
    }
  });


router.get("/delete/:id", async (req, res) => {
  const result = await userModel.findByIdAndRemove(req.params.id);
  res.redirect("/");
});

router.get("/edit/:id", async (req, res) => {
  const result = await userModel.findById(req.params.id);
  console.log(result);
  res.render("edituser", { user: result });
});
router.post("/edit/:id", async (req, res) => {
  const result = await userModel.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    aryyoustudent: req.body.aryyoustudent,
  });
  console.log(result);
  res.redirect("/");
});
module.exports = router;
