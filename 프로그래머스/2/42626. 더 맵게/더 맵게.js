class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        let index = 0;
        while (true) {
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;
            let smallest = index;
            if (leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[smallest]) smallest = leftIndex;
            if (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[smallest]) smallest = rightIndex;
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
        return min;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

// 스코빌 지수를 K 이상으로 만드는 함수
const solution = (scoville, K) => {
    const minHeap = new MinHeap();
    scoville.forEach(value => minHeap.push(value));

    let mixCount = 0;
    while (minHeap.size() > 1 && minHeap.peek() < K) {
        const newScoville = minHeap.pop() + minHeap.pop() * 2;
        minHeap.push(newScoville);
        mixCount++;
    }

    return minHeap.peek() >= K ? mixCount : -1;
};