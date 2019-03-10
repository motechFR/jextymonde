import { Document, Schema, Model, model, Types } from "mongoose";
import { MongoError, ObjectID } from "mongodb";

export interface IUserDocument extends Document {
    fName: string;
    preferredMeal: string;
}


export interface IUser extends IUserDocument {

    changeUserPreference(meal: string): void

}

export interface IUserModel extends Model<IUser> {
    /**
     * @param user
     */
    findUsersByMeal(meal: string): Promise<Array<IUser>>
}

export const userSchema: Schema = new Schema({
    fName: {required: true, type: String},
    preferredMeal: {type: String, default: "lasagna"}
}, {timestamps: true})





userSchema.static("findUsersByMeal", function(meal: string): Promise<Array<IUser>> {
    return new Promise((resolve, reject) => {

        model<IUser, IUserModel>("Dream", userSchema)
        .find({preferredMeal: meal})
        .then((users) => {
            if (users.length > 0) {
                resolve(users);
            } else {
                reject("No users like this meal")
            }
        })
    })
})



userSchema.method("changeUserPreference", function(this: IUser, meal: string): void {
    this.preferredMeal = meal;
})

export const User: IUserModel = model<IUser, IUserModel>("Dream", userSchema);