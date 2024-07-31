import mongoose, { Document, Schema, Model } from 'mongoose';


export interface IUser extends Document {
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}


const userSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, 
});



const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;
