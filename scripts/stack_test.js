load('scripts/stack_ADT.js');

var jess = new Stack();
jess.push('hi');
jess.push('ho');
jess.push('hum');
print('peek at jess ' + jess.peek());
jess.pop();
print('popped one, and now ' + jess.peek());
print('jess length ' + jess.length());
print('jess top ' + jess.top);
print('jess popping this: ' + jess.pop());
jess.clear();
print('cleared and now ' + jess.length());
print('peeking: ' + jess.peek());