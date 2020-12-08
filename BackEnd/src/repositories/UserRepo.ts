import { Document, Model } from "mongoose";
import { Inject, Service } from "typedi";
import { IUserPersistence } from "../dataschema/IUserPersistence";
import { User } from "../domain/User";
import { UserMap } from "../mappers/UserMap";
import IUserRepo from "../services/IRepos/IUserRepo";

@Service()
export default class UserRepo implements IUserRepo {
    private models: any;

    constructor(
        @Inject('UserSchema') private UserSchema: Model<IUserPersistence & Document>,
    ) { }

    private createBaseQuery(): any {
        return {
            where: {},
        }
    }

    public async exists(user: User): Promise<boolean> {
        const query = { code: user.email };

        const userDocument = await this.UserSchema.find(query);

        return !!userDocument === true;
    }

    public async save(user: User): Promise<User> {
        const query = { email: user.email };

        const userDocument = await this.UserSchema.findOne(query);

        try {
            if (userDocument === null) {
                const rawUser: any = UserMap.toPersistence(user);

                const userCreated = await this.UserSchema.create(rawUser);

                return UserMap.toDomain(userCreated);
            } else {
                userDocument.name = user.name;
                userDocument.email = user.email;
                userDocument.age = user.age;
                userDocument.size = user.size;
                userDocument.address = user.address;
                userDocument.postalCode = user.postalCode;
                userDocument.password = user.password;
                await userDocument.save();

                return user;
            }
        } catch (err) {
            throw err;
        }
    }

    public async findAll(): Promise<User[]> {
        const usersDocumentList = await this.UserSchema.find();

        var userList: User[] = new Array;
        for (let i = 0; i < usersDocumentList.length; i++) {
            let user = await UserMap.toDomain(usersDocumentList[i]);
            userList.push(user);
        }
        
        return Promise.all(userList);
    }

    public async findByEmail(email: string): Promise<User> {
        const query = { email: email };

        const userDocument = await this.UserSchema.findOne(query);

        const user = UserMap.toDomain(userDocument);

        return user;
    }
}