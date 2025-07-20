<template>
  <LegalPageLayout 
    title="Política de Privacidad"
    subtitle="Tu confianza es importante. Aquí te explicamos cómo protegemos tu información."
    last-updated="Última actualización: 1 de Julio de 2024"
  >
    <p>En juanda.pro, tu privacidad es de suma importancia para nosotros. Esta Política de Privacidad describe los tipos de información personal que podemos recopilar y cómo la utilizamos.</p>
        
    <h2>Información que recopilamos</h2>
    <p>Recopilamos información para proporcionar y mejorar nuestros servicios. Esto puede incluir:</p>
    <ul>
      <li><strong>Información que nos proporcionas directamente:</strong> como tu nombre y dirección de correo electrónico cuando te suscribes a nuestro boletín.</li>
      <li><strong>Información de uso:</strong> recopilamos información sobre cómo interactúas con nuestro sitio, como las páginas que visitas y los enlaces en los que haces clic.</li>
      <li><strong>Cookies y tecnologías similares:</strong> utilizamos cookies para ayudarnos a operar y mejorar nuestro sitio.</li>
    </ul>

    <h2>Cómo usamos tu información</h2>
    <p>Usamos la información que recopilamos para varios propósitos, incluyendo:</p>
    <ul>
      <li>Proporcionar, operar y mantener nuestro sitio web.</li>
      <li>Mejorar, personalizar y ampliar nuestro sitio web.</li>
      <li>Entender y analizar cómo utilizas nuestro sitio web.</li>
      <li>Comunicarnos contigo, ya sea directamente o a través de uno de nuestros socios, incluso para el servicio de atención al cliente, para proporcionarte actualizaciones y otra información relacionada con el sitio web, y con fines de marketing y promoción.</li>
    </ul>

    <h2>Gestión de Cookies</h2>
    <p>Puedes gestionar tus preferencias de cookies en cualquier momento. A continuación, te ofrecemos un control para que puedas ajustar tu configuración:</p>
    <CookieManager />
  </LegalPageLayout>
</template>

<script setup>
import LegalPageLayout from '@/components/LegalPageLayout.vue';
import CookieManager from '@/components/CookieManager.vue';
</script>
