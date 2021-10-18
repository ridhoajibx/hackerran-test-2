function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    if ((x2 - x1) * (v2 - v1) < 0 && (x2 - x1) % (v2 - v1) == 0) {
        return "YES"
    } 
    return "NO";
}

console.log(kangaroo(0, 3, 4, 2));