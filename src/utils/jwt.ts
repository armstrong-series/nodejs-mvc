import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key';

export const generateToken = (payload: object, expiresIn: string | number = '1h'): string => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

export const verifyToken = (token: string): object | string => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        throw new Error('Invalid token');
    }
};
