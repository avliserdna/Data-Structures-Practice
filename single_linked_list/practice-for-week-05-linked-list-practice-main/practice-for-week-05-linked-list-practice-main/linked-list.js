class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // this.head = new LinkedListNode(val, null) =
    // this.length++
    const newLinkedListNode = new LinkedListNode(val, null)
    newLinkedListNode.next = this.head
    this.head = newLinkedListNode
    this.length++
  }

  addToTail(val) {
  const newLinkedListNode = new LinkedListNode(val, null)
  if (!this.head) {
    this.head = newLinkedListNode
    this.length++
  }
  else {
    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = newLinkedListNode
    this.length++
  }

  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
