// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    noHead(head) {
        this.head = head;
        return this.head
    }
    addToHead(val) {
        // Add node of val to head of linked list
        const newNode = new SinglyLinkedNode(val, null)
        if (!this.head) {
            this.noHead(newNode)
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++
        return this
        // Write your hypothesis on the time complexity of this method here
        // o(1) time complexity, because you're just pointing to current data.
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list
        const newNode = new SinglyLinkedNode(val, null);

        if (!this.head) {
            this.noHead(newNode)
        }
        else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
            current = newNode
        }
        this.length++
        return this
        // o(1) because you're also just pointing to pre-established data
    }

    removeFromHead() {
        // Remove node at head
        if (this.head) {
            const removedHead = this.head
            this.head = this.head.next
            this.length--
            return removedHead
        }
        else {
            return undefined
        }
        // Write your hypothesis on the time complexity of this method here
        // o(1) because you're accessing already established data with just using pointers
 }

    removeFromTail() {
        // Remove node at tail
        if (this.head && this.length === 1) {
            const current = this.head
            this.head = null;
            this.length--
            return current
        }
        else if (this.head) {
            let current = this.head;
            let prev = null;
            while (current.next) {
                prev = current
                current = current.next
            }
            prev.next = null;
            this.length--
            return current
        }
        else {
            return undefined
        }

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        return this.head ? this.head.value : undefined
        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        if (this.head) {
            let current = this.head;
            while (current.next) {
                console.log(current.value)
                current = current.next
            }
            console.log(current.value)
            return
        }
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
