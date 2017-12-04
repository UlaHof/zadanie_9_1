function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {

        return "Nieprawidło dane";
    } else {
        return triangleArea = a * h / 2;
    }
}
console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(5, 8),
    triangle2Area = getTriangleArea(12, 10),
    triangle3Area = getTriangleArea(15, 8);