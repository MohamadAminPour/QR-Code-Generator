let QRCode_input = document.querySelector('.QRCode-input');
let QRCode_btn = document.querySelector('.QRCode-btn');
let QRCode_img = document.querySelector('.QRCode-img');

QRCode_input.addEventListener('change', () => {
    if (!QRCode_input.value) {
        QRCode_img.src = ''
    }
})

QRCode_btn.addEventListener('click', () => {
    QRCode_btn.innerHTML = 'Generating QR Code...';
  
    setTimeout(() => {
        QRCode_img.src = `http://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${QRCode_input.value}`
        QRCode_btn.innerHTML = 'Generate QR Code';
    }, 1500);
})

