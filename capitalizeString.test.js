describe('capitalize', () => {
    test('should capitalize the first character of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('world')).toBe('World');
      expect(capitalize('javascript')).toBe('Javascript');
    });
  });

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  