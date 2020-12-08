import { Name } from "../domain/Name";

export interface IUserDTO {
    name: Name;
    email: string;
    age: Date;
    size: number;
    address: string;
    postalCode: string;
    password: string;
}