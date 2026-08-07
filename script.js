document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Fungsi FAQ Interaktif (Buka-Tutup)
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            
            // Tutup semua FAQ lain jika ingin satu saja yang terbuka
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.nextElementSibling.style.maxHeight = null;
                    q.classList.remove('active');
                }
            });

            // Toggle jawaban saat ini
            question.classList.toggle('active');
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // 2. Efek Scroll Header (Menambah bayangan saat scroll)
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.05)';
        }
    });

    // 3. (Opsional) Efek Fade-in saat scroll (Agar tampilannya lebih smooth)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Seleksi elemen yang ingin dianimasikan
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in'); // Menambahkan class CSS
        observer.observe(section);
    });
});
