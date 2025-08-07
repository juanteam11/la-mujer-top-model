// ===================================
// CONFIGURACIÓN CENTRAL DE CONTACTO
// ===================================
// 
// Instrucciones:
// 1. Reemplaza PHONE_NUMBER con tu número de WhatsApp en formato internacional
//    Ejemplo: "+573001234567" (incluye código de país)
// 2. Reemplaza INSTAGRAM_USER con tu nombre de usuario de Instagram (sin @)
//    Ejemplo: "tu_usuario_instagram"
// 3. Reemplaza EMAIL con tu email de contacto
//    Ejemplo: "contacto@tudominio.com"

const CONTACT_CONFIG = {
    // Número de WhatsApp (formato internacional con +)
    PHONE_NUMBER: '+34627586047', // ✅ NÚMERO REAL ACTUALIZADO
    
    // Usuario de Instagram (sin @)
    INSTAGRAM_USER: 'tere.dancer', // ✅ USUARIO REAL ACTUALIZADO
    
    // Email de contacto
    EMAIL: 'mosquet.team@gmail.com' // ✅ EMAIL REAL ACTUALIZADO
};

// Funciones auxiliares para generar URLs
function getWhatsAppURL(message = '') {
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = CONTACT_CONFIG.PHONE_NUMBER.replace('+', '');
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

function getInstagramURL() {
    return `https://instagram.com/${CONTACT_CONFIG.INSTAGRAM_USER}`;
}

function getEmailURL(subject = '', body = '') {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    return `mailto:${CONTACT_CONFIG.EMAIL}?subject=${encodedSubject}&body=${encodedBody}`;
}

// ===================================
// FUNCIONES DE CONTACTO GLOBALES
// ===================================

function contactWhatsApp(message = 'Hola! Me interesa más información sobre los servicios de Thalia Dreams.') {
    window.open(getWhatsAppURL(message), '_blank');
}

function contactInstagram() {
    window.open(getInstagramURL(), '_blank');
}

function contactEmail(subject = 'Consulta sobre servicios', body = 'Hola,\n\nEstoy interesado/a en sus servicios. ¿Podrían darme más información?\n\nGracias!') {
    window.location.href = getEmailURL(subject, body);
}

// ===================================
// FUNCIÓN ESPECIAL PARA RESERVAS
// ===================================

function sendBookingEmail(bookingData) {
    const subject = '🌟 NUEVA RESERVA DE CITA - Thalia Dreams';
    
    let emailBody = `Nueva reserva recibida desde el sistema web:\n\n`;
    emailBody += `👤 CLIENTE: ${bookingData.clientName}\n`;
    emailBody += `📱 TELÉFONO: ${bookingData.clientPhone}\n`;
    emailBody += `🎯 SERVICIO: ${bookingData.serviceName}\n`;
    emailBody += `📅 FECHA: ${bookingData.formattedDate}\n`;
    emailBody += `⏰ HORA: ${bookingData.selectedTime}\n`;
    
    if (bookingData.eventDetails) {
        emailBody += `💭 DETALLES: ${bookingData.eventDetails}\n`;
    }
    
    emailBody += `\n${'='.repeat(50)}\n`;
    emailBody += `📧 GENERADO AUTOMÁTICAMENTE\n`;
    emailBody += `⚡ Contacta al cliente para confirmar disponibilidad\n`;
    emailBody += `🕒 Fecha de solicitud: ${new Date().toLocaleString('es-ES')}\n`;
    emailBody += `${'='.repeat(50)}\n\n`;
    emailBody += `Thalia Dreams - Sistema de Reservas Online`;
    
    // Abre el cliente de email para envío manual
    const emailURL = getEmailURL(subject, emailBody);
    window.open(emailURL, '_blank');
    
    return emailBody;
}
