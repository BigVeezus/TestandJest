import { getStringInfo, toUpperCase } from "../app/utils";

describe("Utils test suite", () => {
  it("should return uppercase", () => {
    // arrange:
    const sut = toUpperCase;
    const expected = "ABC";

    // act:
    const actual = sut("abc");

    // assert:
    expect(actual).toBe(expected);
  });

  it.only("should return info for valid string", () => {
    const actual = getStringInfo("My-String");

    expect(actual.lowerCase).toBe("my-string");
    expect(actual.extraInfo).toStrictEqual({});

    expect(actual.characters.length).toBe(9);
    expect(actual.characters).toHaveLength(9);

    expect(actual.characters).toEqual([
      "M",
      "y",
      "-",
      "S",
      "t",
      "r",
      "i",
      "n",
      "g",
    ]);

    expect(actual.characters).toEqual(
      expect.arrayContaining(["-", "S", "t", "r", "i", "n", "g", "M", "y"])
    );

    expect(actual.extraInfo).not.toBe(undefined);
    expect(actual.extraInfo).toBeTruthy();
  });
});