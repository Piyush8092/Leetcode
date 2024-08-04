class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    return partition(lists, 0, lists.length - 1);
}

function partition(lists, start, end) {
    if (start === end) return lists[start];
    if (start < end) {
        const mid = Math.floor((start + end) / 2);
        const left = partition(lists, start, mid);
        const right = partition(lists, mid + 1, end);
        return merge(left, right);
    } else {
        return null;
    }
}

function merge(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val < l2.val) {
        l1.next = merge(l1.next, l2);
        return l1;
    } else {
        l2.next = merge(l1, l2.next);
        return l2;
    }
}

// Example usage:
const lists = [
    new ListNode(1, new ListNode(4, new ListNode(5))),
    new ListNode(1, new ListNode(3, new ListNode(4))),
    new ListNode(2, new ListNode(6))
];
const mergedList = mergeKLists(lists);

// Function to print the merged linked list
function printList(node) {
    let current = node;
    const result = [];
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

printList(mergedList);  // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6
