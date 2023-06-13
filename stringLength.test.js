function stringLength(string) {
    const length = string.length;
    return length;
  }
  
  describe('stringLength', () => {
    test('should return the correct length of the string', () => {
      expect(stringLength("Hello")).toBe(5);
      expect(stringLength("")).toBe(0);
      expect(stringLength("Lorem ipsum dolor sit amet")).toBe(26);
    });
  });
  