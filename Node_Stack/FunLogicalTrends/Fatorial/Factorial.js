function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

module.exports = factorial;

// for node vanilla program we need use the module.exports for export the function
