import counterIncorrectParenthesis, { Stack } from "./counterIncorrectParenthesis";

describe('check counterIncorrectParenthesis', () => {
  it('correct sequence', () => {
    const result = counterIncorrectParenthesis('([]{})[]')
    expect(result).toStrictEqual(0);
  });

  it('incorrect sequence', () => {
    const result = counterIncorrectParenthesis('([]]')
    expect(result).toStrictEqual(2);
  });

  it('incorrect sequence 2', () => {
    const result = counterIncorrectParenthesis('((((()')
    expect(result).toStrictEqual(4);
  });

  it('incorrect sequence 3', () => {
    const result = counterIncorrectParenthesis('}{')
    expect(result).toStrictEqual(2);
  });
});

describe('check correct implementation of Stack', () => {
  const stack = new Stack();
  stack.push(8);
  stack.push(88);
  stack.push(888);
  it('correct size return', () => {
    expect(stack.size()).toEqual(3);
  });
  it('correct peek result', () => {
    expect(stack.peek()).toEqual(888);
  });
  it('correct pop result', () => {
    expect(stack.pop()).toEqual(888);
  });
  it('correct pop result', () => {
    expect(stack.pop()).toEqual(88);
  });
  it('correct pop result', () => {
    expect(stack.pop()).toEqual(8);
  });
  it('correct pop result', () => {
    expect(stack.pop()).toEqual(null);
  });
  it('correct pop result 999', () => {
    stack.push(999);
    expect(stack.pop()).toEqual(999);
  });
  it('correct size after pop 999 result', () => {
    expect(stack.size()).toEqual(0);
  });
  it('correct size after pop 99 result', () => {
    stack.push(99);
    expect(stack.size()).toEqual(1);
  });
  it('correct pop 99 result', () => {
    expect(stack.pop()).toEqual(99);
  });
  it('correct pop null result', () => {
    expect(stack.pop()).toEqual(null);
  });
  it('correct result after clear', () => {
    stack.push(123);
    stack.push(231);
    stack.clear();
    expect(stack.size()).toEqual(0);
    expect(stack.pop()).toEqual(null);
  });
  afterAll(()=> {
    stack.clear();
  })
});