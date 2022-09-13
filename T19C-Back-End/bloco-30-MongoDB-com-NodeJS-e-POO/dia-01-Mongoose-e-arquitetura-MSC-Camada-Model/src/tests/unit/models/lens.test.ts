import { expect } from 'chai';
import sinon from 'sinon';
import LensModel from '../../../models/Lens';
import { Model } from 'mongoose';
import { lensMock, lensMockWithId } from '../../mocks/lensMock';
import ILens from '../../../interfaces/Lens';

describe('Lens Model', () => {
  const lensModel = new LensModel();
  const lensList = [lensMockWithId, {
    _id: 'xxxxxxxxxxxxx',
    degree: 8,
    antiGlade: false,
    blueLightFilter: true
  }]

  before(()=> {
    sinon.stub(Model, 'create').resolves(lensMockWithId);
    sinon.stub(Model, 'findOne').resolves(lensMockWithId);
    sinon.stub(Model, 'find').resolves(lensList)
  });

  after(()=>{
    sinon.restore();
  });

  describe('creating a lens', () => {
    it('successfully created',async () => {
      const newLens = await lensModel.create(lensMock)
      expect(newLens).to.be.deep.equal(lensMockWithId)
    });
  });

  describe('searching a lens', () => {
    it('successfully found',async () => {
      const lensFound = await lensModel.readOne('62cf1fc6498565d94eba52cd');
      expect(lensFound).to.be.deep.equal(lensMockWithId);
    });

    it('_id not found',async () => {
      try {
        await lensModel.readOne('123ERRADO')
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId')
      }
    });
  });

  describe('searching lens', () => {
    it('successfully found', async () => {
      const lensFound = await lensModel.read();
      expect(lensFound).to.be.an('array');
      lensFound?.forEach((lens: ILens, index: number) => {
        expect(lens).to.be.deep.equal(lensList[index])
      });
    });
    it('_id not found', async () => {
      try {
        await lensModel.read();
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId')
      }
    });
  });

});