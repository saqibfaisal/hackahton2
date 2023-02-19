const fireBrigadeModel = require("../model/FireBtrigade");

const fireBrigadeController = {
    PoliceControllerPost: (req, res) => {

        const { name, number,catgory } = req.body
        if (!name, !number,!catgory ) {
            return res.json({ message: "Required field are missing" })
        }
        else {
            const userObject = {
                ...req.body
            }
            fireBrigadeModel.findOne({name}, (error, user) => {
                if (error) {
                    res.send(error);
                } else {

                    // console.log(userObject);
                    fireBrigadeModel.create(userObject, (err, _) => {
                        if (err) {
                            res.send(err)
                        } else {
                            res.send({ message: "your data send" })
                        }
                    })
                }
            }
            )
        }
    },
    PoliceControllerget: (req, res) => {
        fireBrigadeModel.find({}, (error, user)=> {
            if(error){
                res.json({
                    message: "DB ERROR",
                    status: false,
                })
            }else{
                res.json({
                    message: "Plants successfully get",
                    user,
                    status: true
                })
            }
        })
    }
}
module.exports = fireBrigadeController