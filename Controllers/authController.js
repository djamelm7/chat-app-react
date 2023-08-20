const User = require("../models").User;
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
exports.login = async (req,res) => {
    const {email , password} = req.body ; 
    try {
     const user = await User.findOne({
        where : {
            email
        }
     })
    
if(!user) return res.status(404).json({message : 'user not found !'}) ;

if(!bcrypt.compareSync(password , user.password)) return res.status(401).json({message : 'Incorrect password '}) ;
 return res.send(user);

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    // return res.send([email, password ]);
}
exports.register = async (req , res) => {

}