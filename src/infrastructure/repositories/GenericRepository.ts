import { BaseEntity } from "@entities/BaseEntity";
import { IGenericRepository } from "@interfaces/repositories/IGenericRepository";
import { AppDataSource } from "infrastructure/typeorm.config";
import { Repository, Entity, EntityTarget, FindOptionsWhere } from 'typeorm';


export abstract class GenericRepository<T extends BaseEntity>implements IGenericRepository<T> {

    protected repository: Repository<T>;

    constructor(
        private Entity: EntityTarget<T>
    ) {
        this.repository = AppDataSource.getRepository(this.Entity);
    }

    public async Create(entity: T): Promise<T> {
        return await this.repository.save(entity);
    }

    public async GetAll(): Promise<T[]> {
        return await this.repository.find();
    }

    async GetById(id?: number): Promise<T> {
        const criteria = { where: {id: id} as FindOptionsWhere<T> };
        return await this.repository.findOne(criteria);
    }

    public async Update(id: number, entity: T): Promise<T> {
        await this.repository.update(id, entity as any);
        return await this.GetById(id);
    }

    public async Delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }

    protected async getEntityType(): Promise<EntityTarget<T>> {
        return this.Entity;
    }
}