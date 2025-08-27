import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import validator from 'validator';
import jwt from 'jsonwebtoken';

const generateAuthToken = (id) => {
    // Function to generate authentication token
     return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

// route for user login
const loginUser = async (req, res) => {
    res.send('Login User');
}

// route for user registration
const registerUser = async (req, res) => {
    try{

        const {email, password, name} = req.body;

        //checking if user exists
        const userExists = await User.findOne({ email });
        if(userExists){
            return res.json({ message: 'User already exists', success: false });
        }

        // validating input fields
        if(!validator.isEmail(email)){
            return res.json({ message: 'Please Enter a Valid email' });
        }

        if(password.length < 8){
            return res.json({ message: 'Password must be at least 8 characters long' , success: false });
        }

        //Hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //Creating user
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save(); // saving user to database

        const token = generateAuthToken(user._id); // generating auth token for the user

        res.json({ message: 'User Registered Successfully', success: true, token } )

    } catch (error) {

        console.error(error);
        res.status(500).json({ message: error.message, success: false });  

    }
}

// route for admin login
const adminUser = async (req, res) => {
    res.send('Admin Login');   
}

export { loginUser, registerUser, adminUser};