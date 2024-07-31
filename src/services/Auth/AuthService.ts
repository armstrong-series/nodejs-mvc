import User, { IUser } from '../../models/User';
import { IUserInterface } from '../../interfaces/authInteface';

class AuthService implements IUserInterface {

    async create(data: IUser): Promise<IUser> {
        const user = new User(data);
        await user.save();
        return user;
    }

    async getUserById(id: string): Promise<IUser | null> {
        return await User.findById(id);
    }

    async update(id: string, data: Partial<IUser>): Promise<IUser | null> {
        return await User.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string): Promise<void> {
        await User.findByIdAndDelete(id);
    }
}

export default new AuthService();
