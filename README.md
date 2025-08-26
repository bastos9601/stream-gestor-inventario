# HPlay Gestor 🚀

Una plataforma web moderna y dinámica para gestionar todas tus suscripciones streaming en un solo lugar.

## ✨ Características

- **Diseño Responsive** - Optimizado para todos los dispositivos
- **Animaciones Dinámicas** - Efectos visuales atractivos y entretenidos
- **Partículas Interactivas** - Fondo animado con partículas que reaccionan al mouse
- **Efectos de Hover** - Transiciones suaves y efectos de brillo
- **Scroll Animado** - Animaciones de entrada para cada sección
- **Botón WhatsApp** - Contacto directo para consultas sobre el servicio

## 🚀 Despliegue en Render

### Opción 1: Despliegue Automático (Recomendado)

1. **Conecta tu repositorio de GitHub:**
   - Ve a [render.com](https://render.com)
   - Crea una cuenta o inicia sesión
   - Haz clic en "New +" y selecciona "Static Site"

2. **Configura el servicio:**
   - **Name:** `hplay-gestor`
   - **Build Command:** `echo "Static site - no build required"`
   - **Publish Directory:** `.` (punto)
   - **Environment:** `Static`

3. **Variables de entorno:**
   - `NODE_VERSION`: `18.17.0`

4. **Haz clic en "Create Static Site"**

### Opción 2: Despliegue Manual

1. **Sube tus archivos:**
   ```bash
   git add .
   git commit -m "Initial commit for Render deployment"
   git push origin main
   ```

2. **Render detectará automáticamente** que es un sitio estático

## 📁 Estructura del Proyecto

```
hplay-gestor/
├── index.html          # Página principal
├── styles.css          # Estilos y animaciones
├── script.js           # Funcionalidades JavaScript
├── package.json        # Configuración de Node.js
├── render.yaml         # Configuración de Render
└── README.md           # Este archivo
```

## 🎨 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos, animaciones y efectos visuales
- **JavaScript ES6+** - Interactividad y funcionalidades
- **Font Awesome** - Iconos profesionales
- **Google Fonts** - Tipografía Inter

## 🌐 URL del Panel

El botón "Acceder a Mi Panel" redirige a:
`https://stream-gestor-iventario.onrender.com/login?next=%2F`

## 📱 Responsive Design

- **Desktop:** >1024px
- **Tablet:** 768px - 1024px
- **Móvil Grande:** 600px - 768px
- **Móvil:** <600px

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
  --primary-color: #8A2BE2;
  --secondary-color: #FFD700;
  --accent-color: #A855F7;
}
```

### Modificar Animaciones
Ajusta las duraciones en `styles.css`:
```css
.hero-content {
  animation: heroEntrance 1.5s ease-out; /* Cambia 1.5s */
}
```

## 📞 Contacto

- **WhatsApp:** +51 921 146 588
- **Email:** info@hplaygestor.com

## 📄 Licencia

MIT License - Libre para uso comercial y personal.

---

**¡Disfruta gestionando tus suscripciones streaming con HPlay Gestor!** 🎬🎵
