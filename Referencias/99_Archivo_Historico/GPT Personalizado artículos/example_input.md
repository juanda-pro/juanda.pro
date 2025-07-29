# Guía de Flujo de Trabajo con el Agente de Contenido

Este documento te muestra cómo interactuar con el agente en su nuevo modo de dos pasos.

---

### PASO 1: Proporcionar el Texto en Bruto

Simplemente pega el texto de tu artículo.

**TU ENTRADA:**
```
El Minimalismo Digital no es sobre eliminar la tecnología, sino sobre usarla con intención. En un mundo saturado de notificaciones y distracciones, aprender a enfocar nuestra atención es la habilidad más importante del siglo XXI. Se trata de ser el guardián de tu propio tiempo y energía.

El Problema de la Sobrecarga Digital

Vivimos en una economía de la atención. Las aplicaciones y plataformas están diseñadas para capturar nuestro tiempo, a menudo sin aportar un valor real a cambio. Esto nos lleva a un estado de fatiga constante y a una productividad decreciente. El primer paso es reconocer que "estar ocupado" no es lo mismo que "ser productivo".

Estrategias para un Enfoque Intencional

Aquí hay tres estrategias prácticas para empezar:

1.  Auditoría Digital: Revisa cada aplicación en tu teléfono y pregúntate: ¿Me aporta esto un valor real o solo me roba tiempo?
2.  Bloques de Tiempo: Dedica bloques de tiempo específicos para tareas de alta concentración, sin interrupciones.
3.  Notificaciones Desactivadas: Desactiva todas las notificaciones no esenciales. Tú decides cuándo revisar tus mensajes, no tu teléfono.

Una cita para reflexionar:

"La tecnología no es buena ni mala. Es una herramienta. El problema es que a menudo nos convertimos nosotros en la herramienta."

El verdadero objetivo es construir una vida digital que apoye tus metas, en lugar de sabotearlas. Recuerda que cada "no" a una distracción es un "sí" a lo que realmente importa. Este es el núcleo del minimalismo digital. Para empezar, solo necesitas tomar una decisión consciente.
```

**RESPUESTA ESPERADA DEL AGENTE (SOLO HTML):**
```html
<p class="lead">El Minimalismo Digital no es sobre eliminar la tecnología, sino sobre usarla con intención. En un mundo saturado de notificaciones y distracciones, aprender a enfocar nuestra atención es la habilidad más importante del siglo XXI. Se trata de ser el guardián de tu propio tiempo y energía.</p><h2>El Problema de la Sobrecarga Digital</h2><p>Vivimos en una economía de la atención. Las aplicaciones y plataformas están diseñadas para capturar nuestro tiempo, a menudo sin aportar un valor real a cambio. Esto nos lleva a un estado de fatiga constante y a una productividad decreciente. El primer paso es reconocer que <span class="underline-yellow">"estar ocupado" no es lo mismo que "ser productivo"</span>.</p><h2>Estrategias para un Enfoque Intencional</h2><p>Aquí hay tres estrategias prácticas para empezar:</p><ol><li>Auditoría Digital: Revisa cada aplicación en tu teléfono y pregúntate: ¿Me aporta esto un valor real o solo me roba tiempo?</li><li>Bloques de Tiempo: Dedica bloques de tiempo específicos para tareas de alta concentración, sin interrupciones.</li><li>Notificaciones Desactivadas: Desactiva todas las notificaciones no esenciales. Tú decides cuándo revisar tus mensajes, no tu teléfono.</li></ol><blockquote><p>La tecnología no es buena ni mala. Es una herramienta. El problema es que a menudo nos convertimos nosotros en la herramienta.</p></blockquote><p>El verdadero objetivo es construir una vida digital que apoye tus metas, en lugar de sabotearlas. Recuerda que cada "no" a una distracción es un "sí" a lo que realmente importa. Este es el núcleo del minimalismo digital. Para empezar, solo necesitas <span class="underline-pink">tomar una decisión consciente</span>.</p>
```

---

### PASO 2: Iniciar la Generación de SQL

Una vez que el agente te dé el HTML, revisa que esté correcto. Luego, dale la señal para continuar.

**TU ENTRADA:**
```
CONTINUAR
```

**RESPUESTA ESPERADA DEL AGENTE (PREGUNTAS):**
```
¿Cuál es el título principal para este artículo?
¿En qué categoría clasificarías este artículo? (ej: Desarrollo, IA, Productividad)
```

**TU ENTRADA (RESPUESTAS):**
```
Título: Minimalismo Digital: Recupera tu Atención
Categoría: Productividad
```

**RESPUESTA FINAL ESPERADA DEL AGENTE (SOLO SQL):**
```sql
INSERT INTO articles (published_at, is_published, title, slug, category, description, image_url, content)
VALUES (
  NOW(),
  true,
  'Minimalismo Digital: Recupera tu Atención',
  'minimalismo-digital-recupera-tu-atencion',
  'Productividad',
  'El Minimalismo Digital no es sobre eliminar la tecnología, sino sobre usarla con intención. En un mundo saturado de notificaciones y distracciones, aprender a enfocar nuestra atención es la habilidad más importante del siglo XXI. Se trata de ser el guardián de tu propio tiempo y energía.',
  '',
  '<p class="lead">El Minimalismo Digital no es sobre eliminar la tecnología, sino sobre usarla con intención. En un mundo saturado de notificaciones y distracciones, aprender a enfocar nuestra atención es la habilidad más importante del siglo XXI. Se trata de ser el guardián de tu propio tiempo y energía.</p><h2>El Problema de la Sobrecarga Digital</h2><p>Vivimos en una economía de la atención. Las aplicaciones y plataformas están diseñadas para capturar nuestro tiempo, a menudo sin aportar un valor real a cambio. Esto nos lleva a un estado de fatiga constante y a una productividad decreciente. El primer paso es reconocer que <span class="underline-yellow">"estar ocupado" no es lo mismo que "ser productivo"</span>.</p><h2>Estrategias para un Enfoque Intencional</h2><p>Aquí hay tres estrategias prácticas para empezar:</p><ol><li>Auditoría Digital: Revisa cada aplicación en tu teléfono y pregúntate: ¿Me aporta esto un valor real o solo me roba tiempo?</li><li>Bloques de Tiempo: Dedica bloques de tiempo específicos para tareas de alta concentración, sin interrupciones.</li><li>Notificaciones Desactivadas: Desactiva todas las notificaciones no esenciales. Tú decides cuándo revisar tus mensajes, no tu teléfono.</li></ol><blockquote><p>La tecnología no es buena ni mala. Es una herramienta. El problema es que a menudo nos convertimos nosotros en la herramienta.</p></blockquote><p>El verdadero objetivo es construir una vida digital que apoye tus metas, en lugar de sabotearlas. Recuerda que cada "no" a una distracción es un "sí" a lo que realmente importa. Este es el núcleo del minimalismo digital. Para empezar, solo necesitas <span class="underline-pink">tomar una decisión consciente</span>.</p>'
);
```
