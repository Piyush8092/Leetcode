function rangeSum(nums, n, left, right) {
    class MinHeap {
        constructor() {
            this.heap = [];
        }

        push(val) {
            this.heap.push(val);
            this.bubbleUp(this.heap.length - 1);
        }

        pop() {
            if (this.heap.length === 1) return this.heap.pop();
            const top = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.bubbleDown(0);
            return top;
        }

        top() {
            return this.heap[0];
        }

        bubbleUp(index) {
            while (index > 0) {
                const parentIndex = Math.floor((index - 1) / 2);
                if (this.heap[index][0] >= this.heap[parentIndex][0]) break;
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            }
        }

        bubbleDown(index) {
            const lastIndex = this.heap.length - 1;
            while (true) {
                const leftChildIndex = 2 * index + 1;
                const rightChildIndex = 2 * index + 2;
                let smallestIndex = index;

                if (leftChildIndex <= lastIndex && this.heap[leftChildIndex][0] < this.heap[smallestIndex][0]) {
                    smallestIndex = leftChildIndex;
                }

                if (rightChildIndex <= lastIndex && this.heap[rightChildIndex][0] < this.heap[smallestIndex][0]) {
                    smallestIndex = rightChildIndex;
                }

                if (smallestIndex === index) break;

                [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
                index = smallestIndex;
            }
        }
    }

    const mqueue = new MinHeap();
    for (let i = 0; i < n; i++) {
        mqueue.push([nums[i], i + 1]);
    }

    let ans = 0;
    const mod = 1e9 + 7;
    for (let i = 1; i <= right; i++) {
        const [sum, idx] = mqueue.pop();
        if (i >= left) {
            ans = (ans + sum) % mod;
        }
        if (idx < n) {
            mqueue.push([sum + nums[idx], idx + 1]);
        }
    }

    return ans;
}

// Example usage:
const nums = [1, 2, 3, 4];
const n = nums.length;
const left = 1;
const right = 5;
console.log(rangeSum(nums, n, left, right));  // Output: 13
