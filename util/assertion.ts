import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

export class Assertion{
    static get expect(){
        chai.use(chaiAsPromised);
        return chai.expect;
    }
}
