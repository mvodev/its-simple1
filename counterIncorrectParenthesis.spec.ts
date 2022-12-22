import counterIncorrectParenthesis from "./counterIncorrectParenthesis";

describe('check counterIncorrectParenthesis', () => {
  it('correct sequence', async () => {
    const result = counterIncorrectParenthesis('([]{})[]')
    expect(result).toStrictEqual(0);
  });

  it('incorrect sequence', async () => {
    const result = counterIncorrectParenthesis('([]]')
    expect(result).toStrictEqual(2);
  });

  it('incorrect sequence 2', async () => {
    const result = counterIncorrectParenthesis('((((()')
    expect(result).toStrictEqual(4);
  });

  it('incorrect sequence 3', async () => {
    const result = counterIncorrectParenthesis('}{')
    expect(result).toStrictEqual(2);
  });
});