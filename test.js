const test = require('tape');
test('add integers 1 and 2', (t)=>{
    t.plan(1)
    t.equal(1+1, 2)
})

test('add strings 1 and 2', (t)=>{
    t.plan(1)
    t.equal('1'+'1', 2)
})