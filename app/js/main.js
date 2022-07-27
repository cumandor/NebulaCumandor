$(document).ready(function() {
    $('.header__top-burger').click(function(event) {
        $('.header__top-burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

window.onload = function() {
    setTimeout(function() {
        var preloader = document.getElementById('page-preloader');
        if( !preloader.classList.contains('done'))
        {
            preloader.classList.add('done');
        }
    }, 1000);

    const uploadFile = document.getElementById('upload-file');
    const uploadBtn = document.getElementById('upload-btn');
    const uploadText = document.getElementById('upload-text');

    uploadBtn.addEventListener('click', function() {
        uploadFile.click();
    });

    uploadFile.addEventListener('change', function () {
        if(uploadFile.value) {
            uploadText.innerText = uploadFile.value.match(/[\/\\]([\w\d\s\.\-(\)]+)$/)[1];
        }else {
            uploadText.innerText = "File not loaded";
        }
    });
}

