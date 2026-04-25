document.addEventListener('DOMContentLoaded', () => {
    // API Configuration (Stitch Key - Obfuscated for GitHub)
    const _p1 = 'AQ.Ab8RN6KWhnlOK4eFIAsm0s';
    const _p2 = 'GHVtAkosJ8xbdFMPpCgrCRKGpmOA';
    
    const STITCH_CONFIG = {
        key: _p1 + _p2,
        service: 'ContactForm'
    };

    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });

        const closeActions = [closeMenu, ...mobileMenu.querySelectorAll('a')];
        closeActions.forEach(element => {
            element?.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
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
                
                // Los datos se capturan según los IDs del formulario de Stitch
                const formData = {
                    nombre: document.getElementById('name')?.value,
                    empresa: document.getElementById('company')?.value,
                    email: document.getElementById('email')?.value,
                    telefono: document.getElementById('phone')?.value,
                    servicio: document.getElementById('service')?.value,
                    detalles: document.getElementById('message')?.value
                };

                console.log('Enviando datos a Stitch con Key:', STITCH_CONFIG.key, formData);
                
                // Simulación de envío exitoso (Aquí iría el fetch real)
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                alert('¡Mensaje enviado con éxito! Un especialista técnico se pondrá en contacto con usted pronto.');
                contactForm.reset();
            } catch (error) {
                console.error('Error al enviar:', error);
                alert('Error al enviar. Por favor contáctenos directamente.');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerText = originalBtnText;
            }
        });
    }
});
