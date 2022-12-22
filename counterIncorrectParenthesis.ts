
type Parenthesis = '('|')'|'['|']'|'{'|'}';
class Stack {
  private stack: Array<Parenthesis>;

  constructor() {
    this.stack = [];
  }

  push(value: Parenthesis) {
    this.stack.push(value);
  }

  pop(){
    return this.stack.pop();
  }

  peek(){
    return this.stack[this.stack.length-1];
  }

  size(){
    return this.stack.length;
  }

}

const counterIncorrectParenthesis = (str:string) => {
  const stack = new Stack();
  for (let i = 0;i < str.length;  i++) {
    if (str[i] === '('||str[i] === '['||str[i] === '{' ) {
      stack.push(str[i] as Parenthesis);
    } else {
      const prevParenthesis = stack.peek();
      if (str[i] === ')' && prevParenthesis === '(') {
        stack.pop();
      } else if (str[i] === ']' && prevParenthesis === '[') {
        stack.pop();
      } else if (str[i] === '}' && prevParenthesis === '{') {
        stack.pop();
      } else {
        stack.push(str[i] as Parenthesis);
      }
    }
  }
  return stack.size();
}

export default counterIncorrectParenthesis;