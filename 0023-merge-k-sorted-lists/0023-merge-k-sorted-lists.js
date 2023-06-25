/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  insert(key, value) {
    this.heap.push({ key, value });
    this.heapifyUp(this.heap.length - 1);
  }

  extractMin() {
    const min = this.heap[0];
    const last = this.heap.pop();
    if (!this.isEmpty()) {
      this.heap[0] = last;
      this.heapifyDown(0);
    }
    return min.value;
  }

  heapifyUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].key > this.heap[index].key) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown(index) {
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;
    let smallest = index;

    if (leftChild < this.heap.length && this.heap[leftChild].key < this.heap[smallest].key) {
      smallest = leftChild;
    }

    if (rightChild < this.heap.length && this.heap[rightChild].key < this.heap[smallest].key) {
      smallest = rightChild;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}


var mergeKLists = function(lists) {
    // Create a min heap
  const heap = new MinHeap();

  // Push the first node from each linked list into the heap
  for (let i = 0; i < lists.length; i++) {
    if (lists[i]) {
      heap.insert(lists[i].val, lists[i]);
    }
  }

  // Initialize a dummy node and pointer
  const dummy = new ListNode();
  let curr = dummy;

  // Merge the lists
  while (!heap.isEmpty()) {
    // Remove the node with the smallest value from the heap
    const node = heap.extractMin();

    // Append the node to the merged list
    curr.next = node;
    curr = curr.next;

    // If the removed node has a next node, add it to the heap
    if (node.next) {
      heap.insert(node.next.val, node.next);
    }
  }

  return dummy.next;
};