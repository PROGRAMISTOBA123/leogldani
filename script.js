'use strict';

document.querySelector('#Copy').addEventListener('click', () => {
    navigator.clipboard.writeText('598565020')
    Copy.textContent = 'დაკოპირდა ✓';
})

document.querySelector('#Copy1').addEventListener('click', () => {
    navigator.clipboard.writeText('41.7931015,44.827340799999995')
    Copy1.textContent = 'დაკოპირდა ✓';
})

document.querySelector('#Copy2').addEventListener('click', () => {
    navigator.clipboard.writeText('8HH6QRVG+6W')
    Copy2.textContent = 'დაკოპირდა ✓'
})