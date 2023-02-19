const UserModel = require("../model/UserSchema");
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken");

const loginController = (req, res) => {
    // console.log(req.body)
    const { email, password } = req.body;
    if (!email, !password) {
        res.send({ message: "Required field are missing" })
    }

    UserModel.findOne({ email }, async (error, user) => {
        if (error) {
            res.send(error);
        } else if (user) {
            // console.log(user.password);
            await bcryptjs.compare(password, user, (result, err) => {

                if (!result) {
                    return res.status(401).json({
                        message: "incorrect password"
                    })
                }
                else if (result) {
                    const token = jwt.sign({
                        username: user.username,
                        email: user.email,
                    },
                        "login process",
                        {
                            expiresIn: "24h"
                        })
                    res.status(200).json({
                        username: user.username,
                        // user: user[0].username,
                        email: user.email,
                        categroy:user.usertype,
                        token: token
                    })
                }
            })
        } else {
            res.json({ error: "Invaild User" })
        }
    })
}
module.exports = loginController