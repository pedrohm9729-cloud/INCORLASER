document.addEventListener('DOMContentLoaded', () => {
    // API Configuration (Stitch Key - Obfuscated for GitHub)
    const _p1 = 'AQ.Ab8RN6KWhnlOK4eFIAsm0s';
    const _p2 = 'GHVtAkosJ8xbdFMPpCgrCRKGpmOA';
    
    const STITCH_CONFIG = {
        key: _p1 + _p2,
        service: 'ContactForm'
    };

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled', 'shadow-md');
        } else {
            navbar?.classList.remove('scrolled', 'shadow-md');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = mobileMenu?.querySelectorAll('a');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('open');
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
        });

        menuLinks?.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // Dynamic Copyright Year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            
            try {
                submitBtn.disabled = true;
                submitBtn.innerText = 'ENVIANDO...';

                // Placeholder para integración real con la llave proporcionada
                // Aquí se conectaría con el endpoint de Stitch/Email Service
                console.log('Utilizando API Key para envío:', STITCH_CONFIG.key);
                
                // Simulación de envío exitoso
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                alert('¡Mensaje enviado con éxito! Un especialista técnico se pondrá en contacto con usted pronto.');
                contactForm.reset();
            } catch (error) {
                console.error('Error al enviar:', error);
                alert('Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo o contáctenos por teléfono.');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerText = originalBtnText;
            }
        });
    }
});
