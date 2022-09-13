import IFrame from '../../interfaces/Frame';

const frameMock:IFrame = {
  material: 'Ouro',
  color: 'Daquele naipe'
};

const frameMockWithId:IFrame & {_id:string } = {
  _id: '62cf1fc6498565d94eba52cd',
  material: 'Ouro',
  color: 'Daquele naipe'
};

// const frameMockArray:IFrame = {
//   material: 'Ouro',
//   color: 'Daquele naipe'
// };

// const frameMockWithIdArray:IFrame & {_id:string } = [
//   {
//   _id: '62cf1fc6498565d94eba52cd',
//   material: 'Ouro',
//   color: 'Daquele naipe'
//   },
//   {
//     _id: '62cf1fc6498565d94eba52cd',
//     material: 'Prata',
//     color: 'Mais um pra conta'
//   }
// ];

export { frameMock, frameMockWithId, 
  // frameMockArray, frameMockWithIdArray 
}