class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    divide(a, b) {
      if (b === 0) {
        throw new Error("Cannot divide by zero.");
      }
      return a / b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  }
  
  describe('Calculator', () => {
    let calculator;
  
    beforeEach(() => {
      calculator = new Calculator();
    });
  
    describe('add', () => {
      test('should add two numbers correctly', () => {
        expect(calculator.add(2, 3)).toBe(5);
      });
  
      test('should handle negative numbers correctly', () => {
        expect(calculator.add(-5, 7)).toBe(2);
      });
  
      test('should handle zero correctly', () => {
        expect(calculator.add(10, 0)).toBe(10);
      });
    });
  
    describe('subtract', () => {
      test('should subtract two numbers correctly', () => {
        expect(calculator.subtract(5, 2)).toBe(3);
      });
  
      test('should handle negative numbers correctly', () => {
        expect(calculator.subtract(3, 7)).toBe(-4);
      });
  
      test('should handle zero correctly', () => {
        expect(calculator.subtract(10, 0)).toBe(10);
      });
    });
  
    describe('divide', () => {
      test('should divide two numbers correctly', () => {
        expect(calculator.divide(10, 2)).toBe(5);
      });
  
      test('should throw an error when dividing by zero', () => {
        expect(() => calculator.divide(5, 0)).toThrowError('Cannot divide by zero.');
      });
  
      test('should handle zero as numerator correctly', () => {
        expect(calculator.divide(0, 5)).toBe(0);
      });
    });
  
    describe('multiply', () => {
      test('should multiply two numbers correctly', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
      });
  
      test('should handle negative numbers correctly', () => {
        expect(calculator.multiply(-5, 7)).toBe(-35);
      });
  
      test('should handle zero correctly', () => {
        expect(calculator.multiply(10, 0)).toBe(0);
      });
    });
  });
  