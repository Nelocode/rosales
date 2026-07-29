$indexHtml = @"
<!-- wp:template-part {"slug":"header","theme":"seguros-rosales","tagName":"header"} /-->

<!-- Hero Section -->
    <section id="inicio" class="hero">
        <div class="container hero-grid">
            
            <!-- Hero Text -->
            <div class="hero-content">
                <span class="hero-badge">🏆 Agencia #1 en Atención Hispana</span>
                <h1>Asegure su Futuro con Confianza</h1>
                <p>Protección integral para su auto, casa y negocio. No deje que lo inesperado arruine lo que ha construido. Hablemos en su idioma.</p>
                
                <div style="display: flex; gap: 15px; justify-content: flex-start;">
                    <a href="#seguros" class="btn btn-primary btn-lg">Ver Coberturas</a>
                    <a href="tel:+16788602265" class="btn btn-white btn-lg"><i class="ph ph-phone"></i> Llamar</a>
                </div>
            </div>

            <!-- Hero Form -->
            <div class="hero-form-card">
                <h3>Solicite su Cotización</h3>
                <form id="quote-wa-form" onsubmit="return sendQuoteToWhatsApp(event)">
                    <div class="form-group">
                        <select id="quote-type" class="form-control">
                            <option value="">¿Qué desea asegurar?</option>
                            <option value="Auto / Vehículo">Auto / Vehículo</option>
                            <option value="Hogar / Casa">Hogar / Casa</option>
                            <option value="Negocio / Comercial">Negocio / Comercial</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <input type="text" id="quote-name" class="form-control" placeholder="Su Nombre Completo" required>
                    </div>
                    <div class="form-group">
                        <input type="tel" id="quote-phone" class="form-control" placeholder="Teléfono" required>
                    </div>
                    <div class="form-group">
                        <input type="email" id="quote-email" class="form-control" placeholder="Correo Electrónico">
                    </div>

                    <!-- Anti-Spam CAPTCHA -->
                    <input type="text" id="quote-hp" style="display:none !important;" tabindex="-1" autocomplete="off">
                    <div class="captcha-card">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                            <span style="font-size:0.85rem; font-weight:700; color:#1e293b;">🔒 Seguridad Anti-Spam: <span id="quote-captcha-question"></span></span>
                            <button type="button" onclick="generateCaptcha('quote')" style="background:none; border:none; cursor:pointer; font-size:0.9rem;" title="Nuevo código">🔄</button>
                        </div>
                        <input type="number" id="quote-captcha-ans" class="form-control" placeholder="Resultado de la suma" required style="font-size:0.9rem; padding:10px 12px; background:#ffffff; color:#0f172a;">
                    </div>

                    <button type="submit" class="btn btn-primary" style="width: 100%;">
                        Cotizar por WhatsApp
                    </button>
                    <p style="font-size: 0.8rem; text-align: center; margin-top: 15px; color: #666;">
                        <i class="ph ph-lock-key"></i> Sus datos están 100% seguros.
                    </p>
                </form>
            </div>
        </div>
        
        <!-- Shape Divider Bottom -->
        <div class="hero-divider">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
        </div>
    </section>

    <!-- Quick Features Strip -->
    <section class="features-strip">
        <div class="container">
            <div class="features-grid">
                <div class="feature-box">
                    <i class="ph ph-translate feature-icon"></i>
                    <div class="feature-info">
                        <h4>Atención Bilingüe</h4>
                        <p>Hablamos español e inglés para que entienda cada detalle de su póliza.</p>
                    </div>
                </div>
                <div class="feature-box">
                    <i class="ph ph-currency-dollar feature-icon"></i>
                    <div class="feature-info">
                        <h4>Mejores Precios</h4>
                        <p>Comparamos entre múltiples compañías para ahorrarle dinero.</p>
                    </div>
                </div>
                <div class="feature-box">
                    <i class="ph ph-shield-check feature-icon"></i>
                    <div class="feature-info">
                        <h4>Soporte Local</h4>
                        <p>Expertos en leyes y requisitos de seguros en Georgia.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Seguros (Services) -->
    <section id="seguros" class="section-padding">
        <div class="container">
            <div class="section-header">
                <h2>Nuestras Soluciones de Seguros</h2>
                <p>Ya sea personal o comercial, tenemos la póliza perfecta diseñada a su medida.</p>
            </div>

            <div class="services-grid">
                <!-- Auto -->
                <div class="service-card">
                    <div class="service-img-wrap">
                        <img src="https://segurosrosales.com/wp-content/uploads/2025/12/Gemini_Generated_Image_mg6y99mg6y99mg6y-scaled.png" alt="Seguro de Auto">
                    </div>
                    <div class="service-icon-float"><i class="ph ph-car"></i></div>
                    <div class="service-content">
                        <h3>Seguro de Auto</h3>
                        <p>Desde responsabilidad civil básica hasta cobertura total. Protegemos su vehículo, a sus pasajeros y su bolsillo ante cualquier incidente en la carretera.</p>
                    </div>
                </div>

                <!-- Hogar -->
                <div class="service-card">
                    <div class="service-img-wrap">
                        <img src="https://segurosrosales.com/wp-content/uploads/2025/12/Gemini_Generated_Image_148w34148w34148w-scaled.png" alt="Seguro de Hogar">
                    </div>
                    <div class="service-icon-float"><i class="ph ph-house-line"></i></div>
                    <div class="service-content">
                        <h3>Seguro de Hogar</h3>
                        <p>Su casa es su santuario. Ofrecemos protección contra incendios, robos, daños por agua y responsabilidad civil para propietarios e inquilinos.</p>
                    </div>
                </div>

                <!-- Comercial -->
                <div class="service-card">
                    <div class="service-img-wrap">
                        <img src="https://segurosrosales.com/wp-content/uploads/2025/12/Gemini_Generated_Image_khgtblkhgtblkhgt-scaled.png" alt="Seguro Comercial">
                    </div>
                    <div class="service-icon-float"><i class="ph ph-storefront"></i></div>
                    <div class="service-content">
                        <h3>Seguro Comercial</h3>
                        <p>Asegure el futuro de su empresa. Workers Comp, Responsabilidad General y Flotas Comerciales. Entendemos los retos de los negocios locales.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Claims (Reclamos) Section -->
    <section id="reclamos" class="claims-section section-padding">
        <div class="container claims-container">
            <div class="claims-text">
                <h2>¿Tuvo un Accidente?</h2>
                <p>Sabemos que un siniestro es estresante. Nuestro proceso de reclamos es rápido, empático y eficiente. Estamos disponibles para usted.</p>
                
                <div style="margin-bottom: 30px;">
                    <a href="tel:+16788602265" class="btn btn-white btn-lg" style="margin-right: 15px;">
                        <i class="ph ph-phone-call" style="font-size: 1.2rem;"></i> Llamar: (678) 860-2265
                    </a>
                </div>
                
                <p style="font-size: 0.9rem; color: #cbd5e1;">O utilice el formulario a la derecha para un contacto rápido vía WhatsApp.</p>
            </div>
            
            <!-- WhatsApp Quick Form -->
            <div class="whatsapp-form">
                <h4><i class="ph ph-whatsapp-logo" style="font-size: 1.5rem; vertical-align: middle; color: #25D366;"></i> Reporte Rápido por WhatsApp</h4>
                <p style="color: rgba(255,255,255,0.8); font-size: 0.9rem; margin-bottom: 15px;">Llene los datos y se abrirá su WhatsApp con la información lista para enviar.</p>
                
                <form id="wa-claim-form" onsubmit="return sendToWhatsApp(event)">
                    <input type="text" id="wa-name" placeholder="Su Nombre" required>
                    <input type="text" id="wa-policy" placeholder="Número de Póliza (si lo tiene)">
                    <textarea id="wa-message" placeholder="Describa brevemente el incidente..." required></textarea>
                    
                    <!-- Anti-Spam CAPTCHA -->
                    <input type="text" id="claim-hp" style="display:none !important;" tabindex="-1" autocomplete="off">
                    <div class="captcha-card-dark">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                            <span style="font-size:0.85rem; font-weight:700; color:#ffffff;">🔒 Seguridad Anti-Spam: <span id="claim-captcha-question"></span></span>
                            <button type="button" onclick="generateCaptcha('claim')" style="background:none; border:none; cursor:pointer; font-size:0.9rem; color:#ffffff;" title="Nuevo código">🔄</button>
                        </div>
                        <input type="number" id="claim-captcha-ans" style="width:100%; padding:10px; border-radius:8px; border:none; background:#ffffff; color:#0f172a; font-weight:600; font-size:0.9rem;" placeholder="Resultado de la suma" required>
                    </div>

                    <button type="submit" class="btn btn-whatsapp" style="width: 100%;">
                        Enviar a WhatsApp <i class="ph ph-paper-plane-right"></i>
                    </button>
                </form>
            </div>
        </div>
    </section>

    <!-- About Us Section -->
    <section id="nosotros" class="section-padding bg-light">
        <div class="container">
            <div class="about-split">
                <div class="about-img-group">
                    <div style="position: relative;">
                         <img src="https://segurosrosales.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-1.44.00-PM.jpeg" alt="Equipo Rosales Insurance" class="about-img-main">
                        <div class="about-exp-badge">
                            <span>15+</span>
                            <small>Años de Experiencia</small>
                        </div>
                    </div>
                </div>
                <div class="about-content">
                    <h4 style="color: var(--accent); text-transform: uppercase; letter-spacing: 1px;">Sobre Nosotros</h4>
                    <h2 style="margin-bottom: 20px; font-size: 2.2rem;">Su tranquilidad es nuestra prioridad familiar</h2>
                    <p style="margin-bottom: 20px;">Fundada con la misión de servir a la comunidad hispana en Georgia, <strong>Rosales Insurance Agency</strong> se ha convertido en un pilar de confianza. No somos simples vendedores de pólizas; somos asesores que educan.</p>
                    <p style="margin-bottom: 0;">Creemos en la transparencia y en el trato humano. Cuando usted confía en nosotros, pasa a ser parte de nuestra familia.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contacto / CTA Final -->
    <section id="contacto" class="section-padding">
        <div class="container">
            <div class="section-header">
                <h2>Hablemos Hoy Mismo</h2>
                <p>Visítenos, llámenos o envíenos un mensaje. Estamos listos para ayudarle.</p>
            </div>

            <div class="features-grid" style="text-align: center;">
                <div class="contact-card">
                    <i class="ph ph-map-pin" style="font-size: 3rem; color: var(--accent); margin-bottom: 15px;"></i>
                    <h4>Visítenos</h4>
                    <p>810 BEAVER RUIN RD NW STE B109<br>LILBURN, GA 30047</p>
                </div>
                <div class="contact-card">
                    <i class="ph ph-phone-call" style="font-size: 3rem; color: var(--accent); margin-bottom: 15px;"></i>
                    <h4>Llámenos</h4>
                    <p><a href="tel:+16788602265" style="color: var(--text-dark); font-weight: bold;">(678) 860-2265</a></p>
                </div>
                <div class="contact-card">
                    <i class="ph ph-envelope-simple" style="font-size: 3rem; color: var(--accent); margin-bottom: 15px;"></i>
                    <h4>Escríbanos</h4>
                    <p><a href="mailto:info@rosalesinsurance.com" style="color: var(--text-dark);">info@rosalesinsurance.com</a></p>
                </div>
            </div>
        </div>
    </section>

    <!-- Photo Gallery - Nuestra Oficina -->
    <section id="galeria" class="section-padding" style="background: #f8f9fa;">
        <div class="container">
            <div class="section-header">
                <h2>Nuestra Oficina</h2>
                <p>Conozca nuestras instalaciones y el equipo que lo atenderá.</p>
            </div>
            <div class="office-gallery" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 15px;">
                <div class="gallery-item" style="border-radius: 10px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); cursor: pointer; transition: transform 0.3s;">
                    <a href="https://segurosrosales.com/wp-content/uploads/2026/06/DSC05758-1536x1024.jpg" data-lightbox="office" data-title="Nuestra Oficina">
                        <img src="https://segurosrosales.com/wp-content/uploads/2026/06/DSC05758-768x512.jpg" alt="Oficina Rosales Insurance" style="width: 100%; height: 250px; object-fit: cover; display: block;">
                    </a>
                </div>
                <div class="gallery-item" style="border-radius: 10px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); cursor: pointer; transition: transform 0.3s;">
                    <a href="https://segurosrosales.com/wp-content/uploads/2026/06/DSC05805-1536x1024.jpg" data-lightbox="office" data-title="Nuestra Oficina">
                        <img src="https://segurosrosales.com/wp-content/uploads/2026/06/DSC05805-768x512.jpg" alt="Oficina Rosales Insurance" style="width: 100%; height: 250px; object-fit: cover; display: block;">
                    </a>
                </div>
                <div class="gallery-item" style="border-radius: 10px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); cursor: pointer; transition: transform 0.3s;">
                    <a href="https://segurosrosales.com/wp-content/uploads/2026/06/DSC05827-1536x1024.jpg" data-lightbox="office" data-title="Nuestra Oficina">
                        <img src="https://segurosrosales.com/wp-content/uploads/2026/06/DSC05827-768x512.jpg" alt="Oficina Rosales Insurance" style="width: 100%; height: 250px; object-fit: cover; display: block;">
                    </a>
                </div>
                <div class="gallery-item" style="border-radius: 10px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); cursor: pointer; transition: transform 0.3s;">
                    <a href="https://segurosrosales.com/wp-content/uploads/2026/06/DSC05837-1536x1024.jpg" data-lightbox="office" data-title="Nuestra Oficina">
                        <img src="https://segurosrosales.com/wp-content/uploads/2026/06/DSC05837-768x512.jpg" alt="Oficina Rosales Insurance" style="width: 100%; height: 250px; object-fit: cover; display: block;">
                    </a>
                </div>
                <div class="gallery-item" style="border-radius: 10px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); cursor: pointer; transition: transform 0.3s;">
                    <a href="https://segurosrosales.com/wp-content/uploads/2026/06/DSC05857-1536x1024.jpg" data-lightbox="office" data-title="Nuestra Oficina">
                        <img src="https://segurosrosales.com/wp-content/uploads/2026/06/DSC05857-768x512.jpg" alt="Oficina Rosales Insurance" style="width: 100%; height: 250px; object-fit: cover; display: block;">
                    </a>
                </div>
                <div class="gallery-item" style="border-radius: 10px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); cursor: pointer; transition: transform 0.3s;">
                    <a href="https://segurosrosales.com/wp-content/uploads/2026/06/DSC05859-1536x1024.jpg" data-lightbox="office" data-title="Nuestra Oficina">
                        <img src="https://segurosrosales.com/wp-content/uploads/2026/06/DSC05859-768x512.jpg" alt="Oficina Rosales Insurance" style="width: 100%; height: 250px; object-fit: cover; display: block;">
                    </a>
                </div>
                <div class="gallery-item" style="border-radius: 10px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); cursor: pointer; transition: transform 0.3s;">
                    <a href="https://segurosrosales.com/wp-content/uploads/2026/06/DSC05861-1536x1024.jpg" data-lightbox="office" data-title="Nuestra Oficina">
                        <img src="https://segurosrosales.com/wp-content/uploads/2026/06/DSC05861-768x512.jpg" alt="Oficina Rosales Insurance" style="width: 100%; height: 250px; object-fit: cover; display: block;">
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- SECCION HORARIOS -->
    <section style="padding:60px 0;background:#f8fafc;">
        <div class="container">
            <div class="section-header" style="text-align:center;margin-bottom:40px;">
                <h2>Horario de Atención</h2>
                <p>Estamos aquí para servirle.</p>
            </div>
            <div style="max-width:900px;margin:0 auto;background:#ffffff;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,0.06);overflow:hidden;border:1px solid #e2e8f0;">
                <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr;gap:0;">
                    <div style="text-align:center;padding:24px 8px;border-right:1px solid #e2e8f0;background:#ffffff;">
                        <div style="font-size:1.5rem;font-weight:700;color:#1e293b;margin-bottom:4px;">Lun</div>
                        <div style="font-size:0.85rem;color:#64748b;line-height:1.4;">10 AM<br>6 PM</div>
                    </div>
                    <div style="text-align:center;padding:24px 8px;border-right:1px solid #e2e8f0;background:#ffffff;">
                        <div style="font-size:1.5rem;font-weight:700;color:#1e293b;margin-bottom:4px;">Mar</div>
                        <div style="font-size:0.85rem;color:#64748b;line-height:1.4;">10 AM<br>6 PM</div>
                    </div>
                    <div style="text-align:center;padding:24px 8px;border-right:1px solid #e2e8f0;background:#ffffff;">
                        <div style="font-size:1.5rem;font-weight:700;color:#1e293b;margin-bottom:4px;">Mié</div>
                        <div style="font-size:0.85rem;color:#64748b;line-height:1.4;">10 AM<br>6 PM</div>
                    </div>
                    <div style="text-align:center;padding:24px 8px;border-right:1px solid #e2e8f0;background:#ffffff;">
                        <div style="font-size:1.5rem;font-weight:700;color:#1e293b;margin-bottom:4px;">Jue</div>
                        <div style="font-size:0.85rem;color:#64748b;line-height:1.4;">10 AM<br>6 PM</div>
                    </div>
                    <div style="text-align:center;padding:24px 8px;border-right:1px solid #e2e8f0;background:#ffffff;">
                        <div style="font-size:1.5rem;font-weight:700;color:#1e293b;margin-bottom:4px;">Vie</div>
                        <div style="font-size:0.85rem;color:#64748b;line-height:1.4;">10 AM<br>6 PM</div>
                    </div>
                    <div style="text-align:center;padding:24px 8px;border-right:1px solid #e2e8f0;background:#fffbeb;">
                        <div style="font-size:1.5rem;font-weight:700;color:#b45309;margin-bottom:4px;">Sáb</div>
                        <div style="font-size:0.85rem;color:#92400e;line-height:1.4;">10 AM<br>3 PM</div>
                    </div>
                    <div style="text-align:center;padding:24px 8px;background:#fef2f2;">
                        <div style="font-size:1.5rem;font-weight:700;color:#dc2626;margin-bottom:4px;">Dom</div>
                        <div style="font-size:0.85rem;color:#b91c1c;line-height:1.4;">
                            <span style="display:inline-block;background:#fef2f2;color:#dc2626;font-weight:700;font-size:0.75rem;padding:2px 10px;border-radius:20px;border:1px solid #fecaca;">Cerrado</span>
                        </div>
                    </div>
                </div>
                <div style="padding:16px 24px;background:#f8fafc;border-top:1px solid #e2e8f0;text-align:center;font-size:0.9rem;color:#64748b;">
                    <i class="ph ph-clock"></i> Horario regular · Atención personalizada
                </div>
            </div>
        </div>
    </section>

<!-- Floating WhatsApp Widget -->
<style>
.wa-float-wrapper {
    position: fixed;
    bottom: 25px;
    left: 25px;
    z-index: 99999;
    display: flex;
    align-items: center;
    gap: 12px;
}
.wa-float-btn {
    width: 60px;
    height: 60px;
    background-color: #25D366;
    color: #ffffff !important;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
    transition: all 0.3s ease;
    text-decoration: none !important;
    position: relative;
}
.wa-float-btn:hover {
    transform: scale(1.08);
    background-color: #20ba5a;
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
}
.wa-float-pulse {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: rgba(37, 211, 102, 0.4);
    animation: waPulse 2s infinite;
    pointer-events: none;
}
@keyframes waPulse {
    0% { transform: scale(1); opacity: 0.8; }
    100% { transform: scale(1.5); opacity: 0; }
}
.wa-float-badge {
    position: absolute;
    top: -2px;
    right: -2px;
    background-color: #ef4444;
    color: #ffffff;
    font-size: 11px;
    font-weight: bold;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ffffff;
}
.wa-float-tooltip {
    background: #ffffff;
    color: #1e293b;
    padding: 10px 14px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    font-size: 13px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid #e2e8f0;
}
.captcha-card {
    background: #f8fafc;
    border: 1px solid #cbd5e1;
    border-radius: 10px;
    padding: 12px 14px;
    margin-bottom: 15px;
}
.captcha-card-dark {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 10px;
    padding: 12px 14px;
    margin-bottom: 15px;
    color: #ffffff;
}
@media (max-width: 640px) {
    .wa-float-tooltip { display: none; }
}
</style>

<div class="wa-float-wrapper">
    <a href="https://wa.me/16788602265?text=Hola!%20Me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20un%20seguro" target="_blank" rel="noopener noreferrer" class="wa-float-btn" aria-label="Chat WhatsApp">
        <span class="wa-float-pulse"></span>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.137 4.155 4.18-1.096z"/></svg>
        <span class="wa-float-badge">1</span>
    </a>
    <div class="wa-float-tooltip">
        <span style="width:8px;height:8px;background:#25D366;border-radius:50%;display:inline-block;"></span>
        ¿Necesitas ayuda? Chatea con nosotros
    </div>
</div>

<script>
var captchaStore = {
  quote: { n1: 0, n2: 0 },
  claim: { n1: 0, n2: 0 }
};

function generateCaptcha(type) {
  var n1 = Math.floor(Math.random() * 10) + 1;
  var n2 = Math.floor(Math.random() * 10) + 1;
  captchaStore[type] = { n1: n1, n2: n2 };
  var labelEl = document.getElementById(type + '-captcha-question');
  if (labelEl) {
    labelEl.textContent = n1 + " + " + n2 + " = ?";
  }
}

function sendQuoteToWhatsApp(e) {
  if (e) e.preventDefault();
  var hp = document.getElementById('quote-hp')?.value || '';
  if (hp.trim() !== '') return false;

  var userAns = parseInt(document.getElementById('quote-captcha-ans')?.value || '', 10);
  var expected = captchaStore.quote.n1 + captchaStore.quote.n2;

  if (isNaN(userAns) || userAns !== expected) {
    alert('⚠️ Por favor resuelva la suma de seguridad (anti-spam) correctamente.');
    generateCaptcha('quote');
    return false;
  }

  var type = document.getElementById('quote-type')?.value || 'No especificado';
  var name = document.getElementById('quote-name')?.value || '';
  var phone = document.getElementById('quote-phone')?.value || '';
  var email = document.getElementById('quote-email')?.value || '';

  var msg = "Hola! Quiero una cotización de seguro.%0A%0A" +
            "Tipo: " + encodeURIComponent(type) + "%0A" +
            "Nombre: " + encodeURIComponent(name) + "%0A" +
            "Teléfono: " + encodeURIComponent(phone) + "%0A" +
            "Email: " + encodeURIComponent(email);

  window.open("https://wa.me/16788602265?text=" + msg, "_blank");
  return false;
}

function sendToWhatsApp(e) {
  if (e) e.preventDefault();
  var hp = document.getElementById('claim-hp')?.value || '';
  if (hp.trim() !== '') return false;

  var userAns = parseInt(document.getElementById('claim-captcha-ans')?.value || '', 10);
  var expected = captchaStore.claim.n1 + captchaStore.claim.n2;

  if (isNaN(userAns) || userAns !== expected) {
    alert('⚠️ Por favor resuelva la suma de seguridad (anti-spam) correctamente.');
    generateCaptcha('claim');
    return false;
  }

  var name = document.getElementById('wa-name')?.value || '';
  var policy = document.getElementById('wa-policy')?.value || '';
  var message = document.getElementById('wa-message')?.value || '';

  var msg = "Hola! Reporte de incidente / reclamo:%0A%0A" +
            "Nombre: " + encodeURIComponent(name) + "%0A" +
            "Póliza: " + encodeURIComponent(policy) + "%0A" +
            "Mensaje: " + encodeURIComponent(message);

  window.open("https://wa.me/16788602265?text=" + msg, "_blank");
  return false;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        generateCaptcha('quote');
        generateCaptcha('claim');
    });
} else {
    generateCaptcha('quote');
    generateCaptcha('claim');
}
</script>

<!-- wp:template-part {"slug":"footer","theme":"seguros-rosales","tagName":"footer"} /-->
"@

$bodyObj = @{ content = $indexHtml }
$body = $bodyObj | ConvertTo-Json -Depth 10

$pair = "hermes:ISdZvSb8HTOxgWn2nr6kSnwN"
$encodedCredentials = [System.Convert]::ToBase64String([System.Text.Encoding]::ASCII.GetBytes($pair))
$headers = @{
    Authorization = "Basic $encodedCredentials"
    "Content-Type" = "application/json; charset=utf-8"
}

$response = Invoke-RestMethod -Uri "https://segurosrosales.com/wp-json/wp/v2/templates/seguros-rosales//index" -Method Post -Headers $headers -Body ([System.Text.Encoding]::UTF8.GetBytes($body))
Write-Output "Index update status: $($response.status)"
