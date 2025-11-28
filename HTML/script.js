document.addEventListener('DOMContentLoaded', () => {
    // Tüm Kopyala butonlarını seç
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Butonun yanındaki <code> etiketini bul
            const codeElement = button.parentElement.querySelector('code');
            
            if (codeElement) {
                const textToCopy = codeElement.textContent.trim();
                
                // Kopyalama işlemini gerçekleştir
                navigator.clipboard.writeText(textToCopy)
                    .then(() => {
                        // Buton metnini değiştir ve geri yükle
                        const originalText = button.textContent;
                        button.textContent = 'KOPYALANDI!';
                        button.style.backgroundColor = '#28a745'; // Yeşil yap
                        
                        setTimeout(() => {
                            button.textContent = originalText;
                            button.style.backgroundColor = '#007bff'; // Orijinal maviye geri dön
                        }, 1500);
                    })
                    .catch(err => {
                        console.error('Kopyalama başarısız oldu:', err);
                        alert('Kopyalama başarısız oldu.');
                    });
            }
        });
    });

    console.log('SCORPION TOOLKIT Kılavuz scriptleri yüklendi.');
});