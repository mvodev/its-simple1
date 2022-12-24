
type Parenthesis = '('|')'|'['|']'|'{'|'}';

class Node {
  value: any;
  next: Node | null;

  constructor(value: any){
    this.value = value;
    this.next = null;
  }
}

export class Stack {
  private first: Node|null;
  private last: Node|null;
  private sizeCounter = 0;

  constructor() {
    this.first = null;
    this.last = null;
  }

  push(value: any) {
    const newNode = new Node(value);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.sizeCounter++;
  }

  pop(){
    if (!this.first) {
      return null;
    } else {
      let value = this.first.value;
      if (this.first === this.last) {
        this.last = null;
        this.first = null;
      } else {
        let temp = this.first;
        this.first = this.first.next;
        temp.next = null;
      }
      this.sizeCounter--;
      return value;
    }
  }

  peek(){
    return this.first === null ? null : this.first.value;
  }

  size(){
    return this.sizeCounter;
  }

  clear() {
    this.sizeCounter = 0;
    this.first = null;
    this.last =  null;
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