import { Range } from './range';
let x=0;
let y=10;
describe('Range', () => {
  it('should create an instance', () => {
    expect(new Range(x,y)).toBeTruthy();
  });
});
