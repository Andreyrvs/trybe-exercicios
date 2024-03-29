import ILens from '../../interfaces/Lens';

const lensMock:ILens = {
  degree: 4,
  antiGlade: true,
  blueLightFilter: false
};

const lensMockWithId:ILens & {_id:string} = {
  _id: '62cf1fc6498565d94eba52cd',
  degree: 4,
  antiGlade: true,
  blueLightFilter: false
}

export {lensMock, lensMockWithId }