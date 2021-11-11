import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

export interface UserDocument extends mongoose.Document{
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword: (candidatePassword: string) => Promise<boolean>;
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email is already in use'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long'],
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
},
{
    timestamps: true,
}
);

userSchema.pre<UserDocument>('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    return next();
})

userSchema.methods.comparePassword = async function(candidatePassword: string):Promise<boolean> {
    const user = this as UserDocument;
    return bcrypt.compare(candidatePassword, user.password).catch(() => false);
}


export default mongoose.model('User', userSchema);