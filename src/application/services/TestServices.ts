import { Test } from "@entities/Test";
import { GenericServices } from "@services/GenericServices";
import { ITestService } from "@interfaces/services/ITestService";

export class TestServices extends GenericServices<Test> implements ITestService {
    constructor(repository: ITestService) {
        super(repository);
    }
}