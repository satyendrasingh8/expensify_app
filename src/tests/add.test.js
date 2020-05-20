const add = (a,b) => a+b;
const generateGreeting = (name='Anonymus') => `Hello, ${name}`;

test ('should add two numbers',()=> {
   const result =add(3,4);
  expect(result).toBe(7);
});

test('testing my name',()=> {
     const generateGreetingResult =  generateGreeting("Satyendra singh");
   expect(generateGreetingResult).toBe('Hello, Satyendra singh');
});
test('Anonymus test case',()=>{
const result = generateGreeting();
expect(result).toBe('Hello, Anonymus')

})