$(document).ready(function () {
    $('#loginForm').on('submit', function (e) {
        e.preventDefault(); // Ngăn chặn việc submit form để kiểm tra
        const username = $('#username').val();
        const password = $('#password').val();

        if (username && password) {
            alert('Đăng nhập với tên: ' + username);
        } else {
            alert('Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu');
        }
    });
});
