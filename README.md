![Viniltory logo](/src/assets/Frame%2011.png "Viniltory logo")

# Polo Tecnológico: React

Aplicación realizada en `React` con `styled-components`, `redux` y `axios`, conectada a una API desarrollada en `Node.js`.

#### [API de gestión de inventario](https://github.com/uno-nueve/api-inventario) usada para la conexión con el backend del proyecto.

> Esta app consta de una parte pública para gestionar compras y devoluciones de albums; y una parte privada para el control de inventario y listado de ordenes de compra.

## Instalación

1. Clona el repositorio

```
git clone git@github.com:uno-nueve/viniltory.git
```

2. Accede al directorio e instala el proyecto y sus dependencias. Luego inicia el proyecto para poder inspeccionarlo.

```
cd viniltory
npm install
```

3. Crea un archivo `.env` y pega las variables de entorno que se encuentran en el archivo entregado en el campus.

Alternativamente, puedes visitar una versión en vivo de la apliación en [este enlace](https://viniltory.vercel.app/) de Vercel.

## Arquitectura

El proyecto utiliza una arquitectura típica de React:

```
.
└── src/
    ├── components/
    │   ├── # Componentes de React que renderizan la UI
    │   ├── common/
    │   │   └── # Componentes con propiedades comunes
    │   └── ui/
    │       └── # Styled components
    ├── contexts/
    │   └── # Contextos para elementos de UI usando Context API
    ├── hooks/
    │   └── # Custom hooks empleados en la aplicación
    ├── pages/
    │   └── # Páginas de enrutado
    ├── state/
    │   ├── # Estados manejados con Redux Toolkit
    │   └── cart/
    │       └── # Estado persistido usando redux-persist
    └── utils/
        └── # Funciones y datos reutilizables
```

_Arbol de proyecto generado [aquí.](https://tree.nathanfriend.com/)_

> Observación: En proyectos futuros donde tenga que trabajar con páginas anidadas y styled-components, optaría por una solución de [screaming architecture](https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html) ya que me encontré con varios de los problemas que se mencionan en [este artículo](https://dev.to/profydev/screaming-architecture-evolution-of-a-react-folder-structure-4g25) respecto a la complejidad y tamaño de una aplicación de React.

## Funcionamiento:

### Sección privada:

-   Ingresa con las credenciales de algunos de los usuarios por defecto.

![Login](/src/assets/Screenshot%202024-12-16%20at%2021-56-34%20Inicio%20de%20sesión.png)

-   Registra un nuevo album usando el formulario.

![Crea un nuevo album](/src/assets/Screenshot%202024-12-16%20at%2021-57-51%20Dashboard.png)

-   Lista las órdenes de compra vigentes.

![Lista de órdenes](/src/assets/Screenshot%202024-12-16%20at%2021-58-43%20Dashboard.png)

### Sección pública:

-   Accede al catálogo de albums y añade uno al carrito.

![Carrito](/src/assets/Screenshot%202024-12-16%20at%2022-00-08%20Albums.png)

-   Visita la página del album para ver más detalles.

![Detalles del album](/src/assets/Screenshot%202024-12-16%20at%2022-00-59%20Dawn%20FM%20The%20Weeknd.png)

-   En el checkout, introduce tu nombre y monto del album.

![Checkout](/src/assets/Screenshot%202024-12-16%20at%2022-03-38%20Finalizar%20compra.png)

-   Con tu número de orden, accede al area de devoluciones y busca tu orden de compra. Cuando aparezca, haz clic en devolver para modificar el estado del album que compraste.

![Devoluciones](/src/assets/Screenshot%202024-12-16%20at%2022-04-31%20Devoluciones.png)

`Written with 💙&☕`
