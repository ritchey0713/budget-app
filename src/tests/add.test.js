const add = (a,b) => a + b
const generateGreeting = (name = "Anonymous") => `Hello ${name}`;

 test('should add two numbers', () => {
   const result = add(3, 4); 
    expect(result).toBe(7);
  });

  test("should print a greeting", () => {
    const result = generateGreeting("John")
    expect(result).toBe(`Hello John`)
  })

  test("should print a greeting qhwn no name is given", () => {
    const result = generateGreeting()
    expect(result).toBe(`Hello Anonymous`)
  })