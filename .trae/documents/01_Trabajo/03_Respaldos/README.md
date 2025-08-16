# Respaldos del Proyecto

Esta carpeta contiene información sobre los respaldos y procedimientos de backup del proyecto.

## Tipos de Respaldos

### 1. Código Fuente
- **Repositorio Git:** Control de versiones principal
- **Mirrors:** Repositorios espejo en diferentes plataformas
- **Frecuencia:** Automático con cada commit

### 2. Base de Datos (Supabase)
- **Backups automáticos:** Configurados en Supabase
- **Exports manuales:** Procedimientos de exportación
- **Frecuencia:** Diaria (automática) + semanal (manual)

### 3. Assets y Contenido
- **Imágenes y archivos estáticos**
- **Contenido del blog**
- **Configuraciones**

### 4. Configuraciones de Deployment
- **Vercel settings**
- **Variables de entorno**
- **Configuraciones de dominio**

## Procedimientos de Restauración

### Restauración de Código
1. Clonar repositorio desde backup
2. Instalar dependencias: `npm install`
3. Configurar variables de entorno
4. Ejecutar build: `npm run build`

### Restauración de Base de Datos
1. Acceder al panel de Supabase
2. Utilizar función de restore
3. Verificar integridad de datos
4. Actualizar conexiones si es necesario

## Cronograma de Respaldos

- **Diario:** Código fuente (automático)
- **Diario:** Base de datos (automático)
- **Semanal:** Export manual completo
- **Mensual:** Verificación de integridad
- **Trimestral:** Prueba de restauración completa

## Responsabilidades

- **Desarrollador:** Commits regulares, verificación de backups
- **Sistema:** Backups automáticos
- **Administrador:** Verificaciones periódicas, pruebas de restauración