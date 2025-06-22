import {sum} from "../sum";
test('Sum function should caculate the sum of two number', () => { 

    const result = sum(3,7);

    //Assertion
    expect(result).toBe(10);
 })