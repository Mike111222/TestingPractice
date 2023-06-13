function reverseString(string) {
    return string.split('').reverse().join('');
  }
  
  describe('reverseString', () => {
    test('should reverse the string', () => {
      expect(reverseString('Hello')).toBe('olleH');
    });
  });
  