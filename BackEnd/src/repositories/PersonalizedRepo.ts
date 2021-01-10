import { Document, Model } from "mongoose";
import { Inject, Service } from "typedi";
import { IPersonalizedPersistence } from "../dataschema/IPersonalizedPersistence";
import { Personalized } from "../domain/Personalized";
import { PersonalizedMap } from "../mappers/PersonalizedMap";
import IPersonalizedRepo from "../services/IRepos/IPersonalizedRepo";

@Service()
export default class PersonalizedRepo implements IPersonalizedRepo {
    private models: any;

    constructor(
        @Inject('PersonalizedSchema') private PersonalizedSchema: Model<IPersonalizedPersistence & Document>,
    ) { }

    private createBaseQuery(): any {
        return {
            where: {},
        }
    }

    public async save(personalized: Personalized): Promise<Personalized> {
        const query = { id: personalized.id };

        const personalizedDocument = await this.PersonalizedSchema.findOne(query);

        try {
            if (personalizedDocument === null) {
                const rawPersonalized: any = PersonalizedMap.toPersistence(personalized);
                const sneakersCreated = await this.PersonalizedSchema.create(rawPersonalized);
                
                return PersonalizedMap.toDomain(sneakersCreated);
            }else{
                personalizedDocument.name = personalized.name;
                personalizedDocument.size = personalized.size;
                personalizedDocument.author = personalized.author;                
                await personalizedDocument.save();
                return personalized;
            }
        }catch (e) {
            throw e;
        }
    }

    public async exists(personalized: Personalized): Promise<boolean> {
        const query = { id : personalized.id };
        const personalizedDocument = await this.PersonalizedSchema.findOne(query);

        return !!personalizedDocument === true;
    }

    public async findAll(): Promise<Personalized[]> {
        const personalizedDocumentList = await this.PersonalizedSchema.find();
        var personalizedList: Personalized[] = new Array;
        for (let i = 0; i < personalizedDocumentList.length; i++) {
            let personalized = await PersonalizedMap.toDomain(personalizedDocumentList[i]);
            personalizedList.push(personalized);
        }
        
        return Promise.all(personalizedList);
    }

    public async findPersonalizedByName(name: string): Promise<Personalized> {
        const query = { name: name };

        const personalizedDocument = await this.PersonalizedSchema.findOne(query);

        const personalized = PersonalizedMap.toDomain(personalizedDocument);
        return personalized;

    }

    
    public async findPersonalizedByAuthor(author: string): Promise<Personalized> {
        const query = { author: author };

        const personalizedDocument = await this.PersonalizedSchema.findOne(query);

        const personalized =PersonalizedMap.toDomain(personalizedDocument);
        return personalized;

    }

    public async findPersonalizedBySize(size: number): Promise<Personalized> {
        const query = { size: size };

        const personalizedDocument = await this.PersonalizedSchema.findOne(query);

        const personalized = PersonalizedMap.toDomain(personalizedDocument);
        return personalized;

    }
}