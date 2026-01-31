# WhatsApp que vende solo - Despliegue en Vercel

Este paquete contiene todos los archivos necesarios para desplegar tu curso "WhatsApp que vende solo" en Vercel.

## Contenido del paquete

- `index.html` - Página principal del curso
- `assets/` - Archivos JavaScript y CSS
- `robots.txt` - Configuración para motores de búsqueda
- `vercel.json` - Configuración específica para Vercel (manejo de rutas SPA)

## Instrucciones de despliegue

### Opción 1: Despliegue mediante interfaz web de Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión (o crea una cuenta gratuita)
2. Haz clic en **"Add New..."** → **"Project"**
3. Selecciona la opción **"Import from ZIP"** o arrastra el archivo `whatsapp-vercel.zip`
4. Vercel detectará automáticamente la configuración y desplegará tu sitio
5. Una vez completado, recibirás una URL pública para tu curso

### Opción 2: Despliegue mediante CLI de Vercel

1. Instala Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Descomprime el archivo ZIP:
   ```bash
   unzip whatsapp-vercel.zip
   ```

3. Navega al directorio:
   ```bash
   cd whatsapp-vercel
   ```

4. Despliega con Vercel:
   ```bash
   vercel
   ```

5. Sigue las instrucciones en pantalla para completar el despliegue

## Características del sitio

- **Título**: WhatsApp que vende solo
- **Descripción**: Curso interactivo para automatizar ventas por WhatsApp sin usar WhatsApp API
- **Tecnología**: React + Vite (Single Page Application)
- **Meta tags**: Incluye Open Graph y Twitter Cards para compartir en redes sociales

## Notas importantes

- El archivo `vercel.json` está configurado para manejar correctamente las rutas de una Single Page Application (SPA)
- Todas las rutas redirigen a `index.html` para que React Router funcione correctamente
- El sitio es completamente estático y no requiere servidor backend

## Soporte

Si tienes problemas con el despliegue, consulta la [documentación oficial de Vercel](https://vercel.com/docs).

## Solución al error "invalid redirect_uri"

Si al intentar iniciar sesión en Vercel recibes un error de `redirect_uri`, es porque el sistema de autenticación de Manus está configurado para el dominio original.

**He aplicado un parche en los archivos JS** para que la autenticación siempre apunte al dominio original de Manus. Esto permitirá que la sesión se inicie correctamente incluso desde tu dominio de Vercel.

Si el error persiste, asegúrate de que estás usando la última versión de los archivos que te he enviado.
