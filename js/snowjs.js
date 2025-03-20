const snowContainer = document.querySelector('.snow-container');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snow');
    
    // Thiết lập kích thước ngẫu nhiên cho bông tuyết
    const size = Math.random() * 10 + 5; // Kích thước từ 5px đến 15px
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    
    // Thiết lập vị trí ngẫu nhiên trên màn hình
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    
    // Thêm bông tuyết vào container
    snowContainer.appendChild(snowflake);
    
    // Animation cho bông tuyết
    snowflake.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
    
    // Xóa bông tuyết sau khi nó rơi
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

// Tạo bông tuyết mỗi 300ms
setInterval(createSnowflake, 300);

