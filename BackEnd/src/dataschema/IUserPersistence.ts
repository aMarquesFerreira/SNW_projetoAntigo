import { Name } from "../domain/Name";

export interface IUserPersistence {
    name: Name;
    email: string;
    age: Date;
    size: number;
    address: string;
    postalCode: string;
    password: string;
}