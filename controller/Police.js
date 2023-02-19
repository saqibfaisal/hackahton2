const PoliceModel = require("../model/PoliceSchema");

const PoliceController = {
    PoliceControllerPost: (req, res) => {

        const { name,catgory, number } = req.body
        if (!name, !number,!catgory) {
            return res.json({ message: "Required field are missing" })
        }
        else {
            const userObject = {
                ...req.body
            }
            PoliceModel.findOne({name}, (error, user) => {
                if (error) {
                    res.send(error);
                } else {

                    // console.log(userObject);
                    PoliceModel.create(userObject, (err, _) => {
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
        PoliceModel.find({}, (error, user)=> {
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
module.exports = PoliceController