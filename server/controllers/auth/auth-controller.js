const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
//register
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;


    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      email,
      password: hashPassword,
    });

    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Registration successful",
});
};

//login

const loginUser = async (req, res) => {
    try {

    } catch (e) {
        console.log(e);
        res.status(500).json({
            sucess: false,
            message: "some error occured",
        })
    }
}









//logout







//auth middleware 


module.exports = { registerUser, loginUser };