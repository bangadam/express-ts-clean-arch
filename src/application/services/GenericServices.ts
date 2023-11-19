import { BaseEntity } from "@entities/BaseEntity";
import { IGenericService } from "@interfaces/services/IGenericService";

export abstract class GenericServices<Entity extends BaseEntity> implements IGenericService<Entity> {
    constructor(protected repository: IGenericService<Entity>) {}
    
    public async Create(entity: Entity): Promise<Entity> {
        return await this.repository.Create(entity);
    }

    public async GetAll(): Promise<Entity[]> {
        return await this.repository.GetAll();
    }

    public async GetById(id?: number): Promise<Entity> {
        return await this.repository.GetById(id);
    }

    public async Update(id: number, entity: Entity): Promise<Entity> {
        return await this.repository.Update(id, entity);
    }

    public async Delete(id: number): Promise<void> {
        return await this.repository.Delete(id);
    }
}