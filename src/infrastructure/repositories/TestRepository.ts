import { EntityTarget } from "typeorm";
import { Test } from "@entities/Test";
import { GenericRepository } from "@repositories/GenericRepository";
import { ITestRepository } from "@interfaces/repositories/ITestRepository";

export class TestRepository
  extends GenericRepository<Test>
  implements ITestRepository
{
  constructor() {
    const Entity = Test;
    super(Entity);
  }

    public async GetAll(): Promise<Test[]> {
        return await super.GetAll();
    }

    public async GetById(id?: number): Promise<Test> {
        return await super.GetById(id);
    }

    public async Create(entity: Test): Promise<Test> {
        return await super.Create(entity);
    }

    public async Update(id: number, entity: Test): Promise<Test> {
        return await super.Update(id, entity);
    }

    public async Delete(id: number): Promise<void> {
        return await super.Delete(id);
    }
    
}
