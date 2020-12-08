import { Inject, Service } from "typedi";
import config from "../../config";
import { Result } from "../core/logic/Result";
import { User } from "../domain/User";
import { IUserDTO } from "../dto/IUserDTO";
import { UserMap } from "../mappers/UserMap";
import IUserRepo from "./IRepos/IUserRepo";
import IUserService from "./IServices/IUserService";

@Service()
export default class UserService implements IUserService {
    constructor(
        @Inject(config.repos.user.name) private userRepo: IUserRepo
    ) { }
    
    
        
    public async createUser(userDTO: IUserDTO): Promise<Result<IUserDTO>> {
        try {
            
            const userOrError = await User.create(userDTO);

            if (userOrError.isFailure) {
                return Result.fail<IUserDTO>(userOrError.errorValue());
            }

            const userResult = userOrError.getValue();

            await this.userRepo.save(userResult);

            const userDTOResult =UserMap.toDTO(userResult) as IUserDTO;
            return Result.ok<IUserDTO>(userDTOResult)
        } catch (e) {
            throw e;
        }
    }

    public async updateUser(userDTO: IUserDTO): Promise<Result<IUserDTO>> {
        throw new Error("Method not implemented.");
    }

    public async getAllUsers(): Promise<Result<IUserDTO[]>> {
        try { 
            const userList = this.userRepo.findAll();

            let userDTOList: IUserDTO[] = new Array;

            (await userList).forEach(function (value) {
                userDTOList.push(UserMap.toDTO(value) as IUserDTO);               
            });

            return Result.ok<IUserDTO[]>(userDTOList)
        } catch (e) {
            throw e;
        }
    }

    public async getUserByEmail(email: string): Promise<Result<IUserDTO>> {
        try {
            const user = await this.userRepo.findByEmail(email);
      
            const userDTOResult = UserMap.toDTO(user) as IUserDTO;
      
            return Result.ok<IUserDTO>(userDTOResult);
      
          } catch (e) {
            throw e;
          }
    }
    
}