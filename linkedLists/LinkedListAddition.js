/* eslint-disable complexity */
const test1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: {
        val: 9,
        next: {
          val: 9,
          next: null,
        },
      },
    },
  },
};

const test2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 8,
      next: null,
    },
  },
};

const addTwoNumbers = function(l1, l2) {
  let list;
  let n1 = l1;
  let n2 = l2;
  let carry = 0;
  let currNode = null;

  while (n1 || n2 || carry) {
    let sum = 0;

    if (n1 && n2) sum += n1.val + n2.val + carry;
    else if (n1 || n2) sum += n1.val + carry || n2.val + carry;
    else sum = carry;

    if (sum > 9) {
      sum -= 10;
      carry = 1;
    } else {
      carry = 0;
    }

    let newNode = new Node(sum);

    if (!currNode) {
      list = newNode;
      currNode = list;
    }

    currNode.next = newNode;
    currNode = currNode.next;
    if (n1) n1 = n1.next;
    if (n2) n2 = n2.next;
  }
  console.log(list);
  return list;
};

function Node(val) {
  this.val = val;
  this.next = null;
}

addTwoNumbers(test1, test2);
