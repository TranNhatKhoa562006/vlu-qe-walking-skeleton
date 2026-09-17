// Hàm logic kiểm tra đăng nhập
function checkLogin(username, password) {
    if (username === 'admin' && password === '123') {
        return true;
    }
    return false;
}

// Xử lý sự kiện trên giao diện (Chỉ chạy khi ở trên trình duyệt)
if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('loginForm');
        const message = document.getElementById('message');

        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Ngăn chặn trang tải lại
            
            const user = document.getElementById('username').value;
            const pass = document.getElementById('password').value;

            if (checkLogin(user, pass)) {
                message.style.color = 'green';
                message.innerText = 'Đăng nhập thành công!';
            } else {
                message.style.color = 'red';
                message.innerText = 'Sai tài khoản hoặc mật khẩu!';
            }
        });
    });
}

// Export hàm để Jest có thể import và test (Môi trường Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = checkLogin;
}
