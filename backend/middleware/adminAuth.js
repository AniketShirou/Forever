import jwt from 'jsonwebtoken';

const adminAuth = (req, res, next) => {
    try{
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if(!token){
            return res.json({ message: 'No authentication token, access denied', success: false });
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if(verified.id !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){ // we have to check payload id with admin email and password
            return res.json({ message: 'Token verification failed, authorization denied', success: false });
        }

        next();
    } catch (error) {
        console.error(error);
        res.json({ message: error.message, success: false });  
    }
}

export default adminAuth;