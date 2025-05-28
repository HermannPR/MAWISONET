<<<<<<< HEAD
# Aplicación React con Sistema de Login

Una aplicación React moderna construida con Vite que implementa un sistema de login simple con rutas protegidas.

## 🚀 Características

- **Sistema de Login**: Autenticación simple con credenciales de prueba
- **Rutas Protegidas**: Navegación basada en estado de autenticación
- **UI Moderna**: Diseño responsivo con componentes reutilizables
- **React Router**: Navegación SPA (Single Page Application)
- **Estado Local**: Gestión de estado con React Hooks

## 🛠️ Tecnologías

- **Frontend**: React 18 + Vite
- **Routing**: React Router DOM
- **Estilos**: CSS3 con variables personalizadas
- **Estado**: useState (React Hooks)

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── AppBar.jsx      # Barra de navegación
│   ├── Boton.jsx       # Componente de botón reutilizable
│   └── Footer.jsx      # Pie de página
├── views/
│   ├── Home.jsx        # Vista principal (protegida)
│   └── Login.jsx       # Vista de login
├── App.jsx             # Componente principal con routing
├── App.css             # Estilos principales
└── main.jsx            # Punto de entrada
```

## 🚀 Instalación y Uso

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo**:
   ```bash
   npm run dev
   ```

3. **Acceder a la aplicación**:
   - Abre tu navegador en `http://localhost:5173`
   - Usa las credenciales de prueba:
     - **Usuario**: `admin`
     - **Contraseña**: `admin`

## 🔐 Credenciales de Prueba

Para acceder a la aplicación, utiliza:
- **Usuario**: admin
- **Contraseña**: admin

## 🎯 Funcionalidades

### Sistema de Login
- Formulario de autenticación con validación
- Manejo de errores y estados de carga
- Simulación de backend (puede conectarse a API real)

### Área Protegida
- Barra de navegación con información del usuario
- Dashboard con tarjetas informativas
- Opción de cerrar sesión

### Responsive Design
- Adaptable a dispositivos móviles y desktop
- Tema claro/oscuro automático según preferencias del sistema

## 🔧 Backend Simulado

La aplicación está configurada para conectarse a un backend en `http://localhost:3000/login`. 

Si no hay backend disponible, usa credenciales de fallback (`admin/admin`).

Para implementar un backend real, crea un endpoint POST que reciba:
```json
{
  "user": "admin",
  "password": "admin"
}
```

Y devuelva:
```json
{
  "isLogin": true
}
```

## 📝 Scripts Disponibles

- `npm run dev` - Ejecuta la aplicación en modo desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción

## 🔨 Desarrollo

Para expandir la aplicación, puedes:

1. **Agregar más rutas** en `App.jsx`
2. **Crear nuevos componentes** en `src/components/`
3. **Implementar backend real** para autenticación
4. **Agregar Context API** para manejo de estado global
5. **Integrar librerías de UI** como Material-UI o Chakra UI
=======
# MAWISONET
>>>>>>> e9430fbc239d990497ab818a8cc93a036b6954ee
