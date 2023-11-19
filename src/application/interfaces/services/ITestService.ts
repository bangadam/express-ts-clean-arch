import { Test } from "@entities/Test";
import { IGenericService } from "./IGenericService";

export interface ITestService extends IGenericService<Test> {
    // Add here your custom methods
}