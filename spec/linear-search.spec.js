const { linearSearch, globalLinearSearch } = require('../linear-search');

describe("linearSearch()", function() {
  it("returns first index of item in array", function() {
    let item = 3;
    let arr = [1,2,3,4,5];
    expect(linearSearch(item, arr)).toEqual(2);
    expect(linearSearch(0, arr)).toEqual(-1);
    expect(linearSearch(0, [])).toEqual(-1);
    expect(linearSearch('d', [1, 2, 'd'])).toEqual(2);
  });
});

describe("globalLinearSearch()", function() {
  it("returns array indxes of items in array", function() {
    let item = 'a';
    let arr = ['b', 'a', 'n', 'a', 'n', 'a', 's'];
    expect(globalLinearSearch(item, arr)).toEqual([1, 3, 5]);
    expect(globalLinearSearch(2, arr)).toEqual([]);
    expect(globalLinearSearch('s', arr)).toEqual([6]);
  });
});
