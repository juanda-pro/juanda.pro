# Guía de Seguridad

## Variables de Entorno

### Configuración Requerida

Este proyecto utiliza variables de entorno para manejar información sensible. **NUNCA** hardcodees URLs, tokens o claves API directamente en el código.

#### Variables Obligatorias

```bash
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Webhook Configuration
VITE_WEBHOOK_URL=your_webhook_url_here
VITE_WEBHOOK_TOKEN=your_webhook_token_here
```

#### Variables Opcionales

```bash
# CV/Resume Configuration
# URL to your CV/Resume PDF file
# Leave empty to disable CV download functionality
VITE_CV_URL=https://your-domain.com/path/to/your-cv.pdf
```

### Configuración del Entorno

1. Copia `.env.example` a `.env`:
   ```bash
   cp .env.example .env
   ```

2. Completa las variables con tus valores reales

3. **IMPORTANTE**: El archivo `.env` está en `.gitignore` y NO debe ser commitado

## Medidas de Seguridad Implementadas

### 1. Enlaces Externos Seguros
- Todos los enlaces externos incluyen `target="_blank" rel="noopener noreferrer"`
- Previene ataques de tabnabbing y acceso no autorizado

### 2. Validación de URLs
- Las URLs de CV se validan antes de usar
- Si `VITE_CV_URL` está vacía, la funcionalidad se deshabilita automáticamente

### 3. Gestión de Tokens
- Tokens de webhook almacenados en variables de entorno
- Headers de autenticación implementados correctamente

### 4. Configuración de CORS
- Verificar configuración del servidor para permitir solo dominios autorizados

## Recomendaciones Adicionales

### Para Desarrollo
- Usar valores de prueba en `.env` local
- No compartir archivos `.env` reales
- Rotar tokens periódicamente

### Para Producción
- Configurar variables de entorno en el servidor/plataforma de deployment
- Usar HTTPS para todas las comunicaciones
- Implementar rate limiting en APIs
- Monitorear logs de seguridad

## Reporte de Vulnerabilidades

Si encuentras una vulnerabilidad de seguridad:
1. NO la publiques públicamente
2. Contacta directamente al mantenedor
3. Proporciona detalles técnicos y pasos para reproducir

## Auditoría de Seguridad

### Última Revisión
- **Fecha**: Enero 2025
- **Estado**: ✅ Sin vulnerabilidades críticas detectadas
- **Próxima Revisión**: Recomendada cada 3 meses

### Elementos Verificados
- ✅ URLs hardcodeadas eliminadas
- ✅ Variables de entorno configuradas
- ✅ Enlaces externos seguros
- ✅ Tokens protegidos
- ✅ Archivo `.env` en `.gitignore`