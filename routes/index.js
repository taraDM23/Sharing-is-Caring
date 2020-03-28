const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// API Routes
router.use("/api", apiRoutes);

//Authentication
router.post('/login', async (req, res, next) => {
  try{
      console.log("login", req.body)
      const user = await User.findOne({email: req.body.email});
      if(!user){
          throw new Error('User does not exist!')
      }
      const isEqual = await bcrypt.compare(req.body.password, user.password);
      if(!isEqual){
          throw new Error('Password is incorrect!');
      }
      const token = await jwt.sign({
          userId: user.id,
          email: user.email,
      }, 
      `abc`,
      {
          expiresIn: '1h'
      });
      return res.json({
          userId: user.id,
          token: token,
          tokenExpiration: 1,
      })
  }
  catch (err){
      console.log({err});
      next(err)
  }   
})


router.post('/signup', async (req, res, next) => {
  try{
    console.log("signup", req.body)
      const result = await User.findOne({email: req.body.email});
      if(result){
          throw new Error('User already exists.')
      }
      console.log(req.body.email);
      const hashedPassword = await bcrypt.hash(req.body.password, 12)
      const user = new User({
          email: req.body.email,
          password: hashedPassword,
      });  
      const savedUser = await user.save();
      console.log(savedUser)
      return res.json({email: savedUser.email, password: null, _id: savedUser.id});
  }
  catch (err){
      console.log({err});
      next(err)
  }   
})


/* router.get('/api/friends', async (req, res, next) => {
    try{
        console.log("/api/friends", req.body)
        if(req.isAuth){
            return res.json({
                friends: [
                    {
                        name: "Alex"
                    },
                    {
                        name: "Tom"
                    }
                ]
            })
        }else{

            throw new Error('Unauthenticated!');
            
        }

    }
    catch (err){
        console.log({err});
        next(err.message)
    }   
})
 */

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;
