import { Schema, model } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

interface IUser {
  wallet_address: string;
  email: string;
  saved_events: any[]
}

const userSchema = new Schema<IUser>({
  wallet_address: { type: String, unique: true, required: true },
  email: { type: String, unique: true, uniqueCaseInsensitive: true, required: true },
  saved_events: [{ type: Schema.Types.ObjectId, ref: 'Event' }]
});
userSchema.plugin(uniqueValidator);

const UserModel = model<IUser>('User', userSchema);

export default UserModel;