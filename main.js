window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const sticker = document.querySelector('.sticker_container');
        const sound = document.getElementById('stickerSound');

        if (sticker) {
            sticker.classList.add('active');
        }

        if (sound) {
            sound.play().catch(error => {
                console.log("Браузер заблокировал звук до клика пользователя по сайту:", error);
            });
        }
    }, 2000);
});