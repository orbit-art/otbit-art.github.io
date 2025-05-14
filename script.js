document.addEventListener('DOMContentLoaded', function() {
    // Можно добавить интерактивность, если нужно
    console.log('Портфолио загружено!');
    
    // Пример: изменение текста через 3 секунды
    setTimeout(function() {
        document.getElementById('portfolio-text').textContent = "Скоро здесь появятся мои новые работы!";
    }, 3000);
});
