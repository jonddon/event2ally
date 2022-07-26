import { Schema, model } from 'mongoose';

interface IUser {
  address: string;
  saved_events: any[]
}

const userSchema = new Schema<IUser>({
  address: { type: String, unique: true, required: true },
  saved_events: [{ type: Schema.Types.ObjectId, ref: 'Event' }]
});

const UserModel = model<IUser>('User', userSchema);

export default UserModel;