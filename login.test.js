const checkLogin = require('./login');

describe('Kiểm thử hàm checkLogin', () => {
    test('TC01: Đăng nhập thành công với tài khoản hợp lệ', () => {
        expect(checkLogin('admin', '123')).toBe(true);
    });

    test('TC02: Đăng nhập thất bại với sai mật khẩu', () => {
        expect(checkLogin('admin', 'wrongpass')).toBe(false);
    });

    test('TC03: Đăng nhập thất bại với sai tài khoản', () => {
        expect(checkLogin('user', '123')).toBe(false);
    });

    test('TC04: Đăng nhập thất bại khi để trống thông tin', () => {
        expect(checkLogin('', '')).toBe(false);
    });
});
