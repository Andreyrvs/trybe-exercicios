import { expect } from 'chai';
import sinon from 'sinon';
import LensModel from '../../../models/Lens';
import { Model } from 'mongoose';
import { lensMock, lensMockWithId } from '../../mocks/lensMock';

describe('Lens Model', () => {
  const lensModel = new LensModel();

  before(()=> {
    sinon.stub(Model, 'create').resolves(lensMockWithId);
    // sinon.stub(Model, 'findOne').resolves(lensMockWithId);
  });

  after(()=>{
    sinon.restore();
  });

  describe('creating a frame', () => {
    it('successfully created',async () => {
      const newLens = await lensModel.create(lensMock)
      expect(newLens).to.be.deep.equal(lensMockWithId)
    })
  })
})