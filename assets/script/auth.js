$(document).ready(function() {
    const userData = localStorage.getItem('user');
    if (!userData) window.location.href = './admin-login.html'
})