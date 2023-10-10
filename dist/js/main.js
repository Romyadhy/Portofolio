// TesSOched
// const socket = new WebSocket('ws:http://127.0.0.1:5502/public/'); // Ganti dengan URL server WebSocket yang sesuai

// console.log(socket);

// Koneksi WebSocket pertama
const socket1 = new WebSocket('ws://127.0.0.1:5500/ML/ws');

// Koneksi WebSocket kedua
const socket2 = new WebSocket('ws://127.0.0.1:5502/public/');

console.log(socket1);
console.log(socket2);


  

// NAVBAR
let list = document.querySelector('ul');
const navList = document.getElementById('list-nav');
// console.log(navList);


function Menu(e) {
    if (e.name === 'menu') {
        e.name = 'close';
        list.classList.add('top-[80px]');
        list.style.opacity = '100';
        // list.classList.add('opacity-100');
    } else {
        e.name = 'menu';
        list.classList.remove('top-[80px]');
        list.style.opacity = '0';
        // list.classList.remove('opacity-100');
    }
}


