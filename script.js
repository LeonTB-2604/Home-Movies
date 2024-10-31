const movieList = [
    {
        title: "Tom and Jerry (2021)",
        link: "taj2021.html" // Thay đổi đường dẫn cho phim
    },
    {
        title: "Angry Birds Movie",
        link: "abm.html" // Thay đổi đường dẫn cho phim
    },
    {
        title: "Avengers: Endgame",
        link: "ae.html" // Thay đổi đường dẫn cho phim
    },
    {
        title: "Titanic",
        link: "ttn.html" // Thay đổi đường dẫn cho phim
    },
    {
        title: "Peaky Binder",
        link: "#"
    },
    {
        title: "The Walking Dead",
        link: "#"
    }
];

// Chỉ cần giữ lại hàm tìm kiếm
function searchMovies() {
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    const resultArea = document.getElementById('movieResults');
    resultArea.innerHTML = ''; // Xóa kết quả trước đó

    const results = movieList.filter(movie => movie.title.toLowerCase().includes(keyword));

    if (results.length === 0) {
        resultArea.innerHTML = 'No results found.';
    } else {
        results.forEach(movie => {
            const div = document.createElement('div');
            const link = document.createElement('a'); // Tạo phần tử liên kết
            link.href = movie.link; // Gán đường dẫn cho liên kết
            link.textContent = movie.title; // Nội dung liên kết
            div.appendChild(link); // Thêm liên kết vào div
            resultArea.appendChild(div); // Thêm div vào kết quả
        });
    }
}
