# ColdBlock - Guía de Despliegue en GitHub Pages

## 🚀 Despliegue Automático

Tu proyecto está configurado para desplegarse automáticamente en **GitHub Pages**. Sigue estos pasos para publicar tu sitio:

### Prerrequisitos
- Tener instalado **Node.js** (versión 18 o superior)
- Tener instalado **Git**
- Tener una cuenta en **GitHub**

## 📦 Pasos para el Despliegue

### 1. Preparar el repositorio

```bash
# Clonar el repositorio (si aún no lo tienes)
git clone https://github.com/tu-usuario/ColdBlock.git
cd ColdBlock

# Instalar dependencias
npm install
```

### 2. Configuración automática

Tu proyecto ya incluye toda la configuración necesaria en:
- `next.config.js` - Configuración de Next.js para GitHub Pages
- `package.json` - Scripts de despliegue automático

### 3. Desplegar a producción

```bash
# Ejecutar el comando de despliegue
npm run deploy
```

**Este comando automáticamente:**
1. Construye la aplicación en modo producción
2. Elimina la carpeta `docs` anterior (si existe)
3. Copia los archivos generados a la carpeta `docs`
4. Crea el archivo `.nojekyll` necesario para GitHub Pages

### 4. Subir cambios a GitHub

```bash
# Agregar todos los cambios
git add .

# Hacer commit con un mensaje descriptivo
git commit -m "Deploy a GitHub Pages"

# Subir cambios al repositorio remoto
git push origin main
```

## 🔧 Configuración de GitHub Pages

### 1. Acceder a la configuración del repositorio
1. Ve a tu repositorio en GitHub: `https://github.com/tu-usuario/ColdBlock`
2. Haz clic en **Settings** (Configuración)
3. En el menú izquierdo, selecciona **Pages**

### 2. Configurar la fuente de despliegue
En la sección **Build and deployment**:
- **Source**: Selecciona **Deploy from a branch**
- **Branch**: Selecciona **main** y la carpeta **`/docs`**
- Haz clic en **Save**

## 🌐 URL de tu sitio

Una vez configurado, tu sitio estará disponible en:
```
https://tu-usuario.github.io/ColdBlock/
```

**Nota:** El primer despliegue puede tardar hasta 10 minutos en estar disponible.

## 🛠️ Configuración Técnica

### Estructura de archivos de despliegue
```
ColdBlock/
├── docs/                    # Archivos generados para GitHub Pages
│   ├── _next/
│   ├── .nojekyll           # Archivo necesario para deshabilitar Jekyll
│   ├── index.html
│   └── ...otros archivos
├── next.config.js          # Configuración de Next.js
├── package.json            # Scripts y dependencias
└── ...otros archivos fuente
```

### Variables de configuración
- **basePath**: `"/ColdBlock"` (en producción)
- **output**: `"export"` (exportación estática)
- **trailingSlash**: `true` (para compatibilidad con GitHub Pages)
- **images**: `unoptimized: true` (para evitar problemas con optimización)

## 🔄 Flujo de trabajo recomendado

### Para desarrollo local:
```bash
npm run dev
```
Accede a: `http://localhost:3000`

### Para probar la build de producción localmente:
```bash
npm run build
```
Sirve la carpeta `docs/` con un servidor estático

### Para desplegar actualizaciones:
1. Desarrolla y prueba localmente
2. Ejecuta `npm run deploy`
3. Haz commit y push de los cambios
4. Espera unos minutos para que GitHub Pages actualice el sitio

## ⚠️ Solución de problemas comunes

### Las imágenes no se cargan
- Verifica que uses `withBasePath()` para todas las rutas de imágenes
- Asegúrate de que `images.unoptimized: true` está configurado

### Error 404 en rutas
- Confirma que `trailingSlash: true` está activado
- Verifica que todas las rutas terminan con `/`

### El sitio no se actualiza
- Espera 5-10 minutos después del despliegue
- Limpia la caché del navegador
- Verifica que el commit se haya subido correctamente

### Problemas con estilos
- Asegúrate de que `basePath` y `assetPrefix` están configurados correctamente
- Verifica que todas las importaciones usan rutas relativas o `withBasePath()`

## 📝 Notas importantes

1. **No modifiques manualmente** la carpeta `docs/`, será sobrescrita en cada despliegue
2. El archivo `.nojekyll` es necesario para que GitHub Pages sirva archivos que comienzan con `_`
3. GitHub Pages sirve sitios estáticos, por lo que no hay funcionalidad del lado del servidor
4. La URL siempre será `tu-usuario.github.io/ColdBlock/`

## 🚀 Despliegue rápido (comando único)

```bash
npm run deploy
```
