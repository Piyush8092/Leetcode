var regionsBySlashes = function(grid) {
    const findUp = (node) => {
        if (node === p[node]) return node;
        return p[node] = findUp(p[node]);
    };

    const dsu = (n1, n2) => {
        const up1 = findUp(n1);
        const up2 = findUp(n2);
        if (up1 === up2) {
            cnt++;
        } else {
            p[up2] = up1;
        }
    };

    const n = grid.length;
    const nn = n + 1;
    let cnt = 0;

    const p = Array.from({ length: nn * nn }, (_, i) => i);

    // Connect boundary nodes to a virtual node
    for (let i = 0; i < nn; i++) {
        for (let j = 0; j < nn; j++) {
            if (i === 0 || j === 0 || i === n || j === n) {
                dsu(0, i * nn + j);
            }
        }
    }

    // Process the grid
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '/') {
                dsu((i + 1) * nn + j, i * nn + (j + 1));
            } else if (grid[i][j] === '\\') {
                dsu(i * nn + j, (i + 1) * nn + (j + 1));
            }
        }
    }

    return cnt;
};