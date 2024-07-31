import mongoose, { Mongoose } from 'mongoose';

class Database {
    private url: string;
    private connection: Mongoose | null = null;

    constructor() {
        this.url = process.env.MONGO_URL || '';
        this.connect();
    }

    async connect(): Promise<void> {
        try {
            this.connection = await mongoose.connect(this.url);
            console.log('MongoDB connected successfully');
        } catch (error) {
            console.error('MongoDB connection failed:', error);
            process.exit(1);
        }
    }

    async disconnect(): Promise<void> {
        if (this.connection) {
            try {
                await this.connection.disconnect();
                console.log('MongoDB disconnected');
            } catch (error) {
                console.error('Error disconnecting from MongoDB:', error);
            }
        }
    }
}

export default new Database();
