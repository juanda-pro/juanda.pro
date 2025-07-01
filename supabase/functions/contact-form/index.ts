import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { corsHeaders } from '../_shared/cors.ts'
import { Resend } from 'https://esm.sh/resend@3.2.0'

console.log(`Function 'contact-form' up and running!`);

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const TO_EMAIL = Deno.env.get('TO_EMAIL')

const resend = new Resend(RESEND_API_KEY)

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      throw new Error('Missing required fields: name, email, subject, or message')
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Requerido por Resend, puede ser cualquier cosa en el dominio verificado
      to: TO_EMAIL,
      reply_to: email,
      subject: `Nuevo Mensaje de ${name}: ${subject}`,
      html: `<p>Has recibido un nuevo mensaje de tu portfolio:</p>
             <p><strong>Nombre:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Asunto:</strong> ${subject}</p>
             <p><strong>Mensaje:</strong></p>
             <p>${message.replace(/\n/g, '<br>')}</p>`,
    });

    if (error) {
      console.error({ error })
      throw new Error(error.message)
    }

    return new Response(JSON.stringify({ message: 'Email sent successfully', details: data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500, // Internal Server Error es más apropiado aquí
    })
  }
})
