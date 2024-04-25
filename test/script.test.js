// Dynamically import modules, so they can be reset between test runs
// https://github.com/facebook/jest/issues/3236
// https://www.npmjs.com/package/babel-plugin-dynamic-import-node
let getName;
let getAnswer;

beforeEach(() => {
  return import("../Submission/script").then((module) => {
    getName = module.getName;
    getAnswer = module.getAnswer;
    jest.resetModules();
  });
});

describe("getName", () => {
  it("should return the name entered", () => {
    const name = "John Lennon";
    const result = getName(name);
    expect(result).toEqual(name);
  });

  it("should return the same name on multiple function calls", () => {
    const name = "John Lennon";
    const result = getName(name);
    const result1 = getName("George Harrison");

    expect(result).toEqual(name);
    expect(result1).toEqual(name);
  });

  it("should always return the first parameter that is passed in", () => {
    const name = "Paul McCartney";
    const result = getName(name);
    const result1 = getName("John Lennon");

    expect(result).toEqual(name);
    expect(result1).toEqual(name);
  });
});
