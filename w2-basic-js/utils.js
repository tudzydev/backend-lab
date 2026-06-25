export const PI = 3.14159;

export const add = (a, b) => a + b;

export const multiply = (a, b) => a * b;

export const divide = (a, b) => {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
};

export const subtract = (a, b) => a - b;

export const calculateCircleArea = (radius) => PI * radius * radius;

export const mod = (a, b) => a % b;

// export function calculateCircleArea(radius) {
//     return PI * raduis * radius;
// }

// export function add(a, b) {
//     return a + b;
// }

// export function multiply(a, b) {
//     return a * b;
// }

// export function divide(a, b) {
//     if (b === 0) {
//         throw new Error('Cannot divide by zero');
//     }
//     return a / b;
// }

// export function subtract(a, b) {
//     return a - b;
// }