# U Teaming 🚀

![U Teaming Logo](./frontend/src/assets/logo%20u%20teaming.jpeg) 

-   [Introducción](#introducción)
-   [¿Qué Problema Resuelve?](#qué-problema-resuelve)
-   [Objetivo Principal](#objetivo-principal)
-   [Funcionalidades Clave](#funcionalidades-clave)
-   [Arquitectura y Metodología](#arquitectura-y-metodología)
-   [Tecnologías Principales](#tecnologías-principales)
-   [Estado Actual del Proyecto](#estado-actual-del-proyecto)
-   [Arquitectura Detallada (Boceto)](#arquitectura-detallada-boceto)
-   [Stack Tecnológico Completo (Boceto)](#stack-tecnológico-completo-boceto)
-   [Prerrequisitos (Boceto)](#prerrequisitos-boceto)
-   [Instalación y Ejecución Local (Boceto)](#instalación-y-ejecución-local-boceto)
-   [Estructura del Proyecto (Boceto)](#estructura-del-proyecto-boceto)
-   [Documentación de la API (Boceto)](#documentación-de-la-api-boceto)
-   [Cómo Contribuir](#cómo-contribuir)
-   [Autores](#autores)
-   [Licencia](#licencia)

---

## Introducción

**U Teaming** es una plataforma digital integral y multiplataforma (web, escritorio, móvil) diseñada específicamente para el entorno universitario. Su propósito es facilitar y optimizar la colaboración entre estudiantes y profesores en la gestión de proyectos académicos.

Vivimos en una era donde la colaboración efectiva y el uso inteligente de la tecnología son clave en la educación superior. U Teaming nace para responder a esta necesidad, integrando metodologías ágiles como **Scrum** y herramientas de **Inteligencia Artificial (IA)** para crear un ecosistema de trabajo académico más organizado, eficiente y enriquecedor.

## ¿Qué Problema Resuelve?

La gestión de proyectos académicos colaborativos en universidades a menudo enfrenta desafíos en organización, comunicación, seguimiento y evaluación. U Teaming aborda la pregunta:

> *¿Cómo puede una plataforma digital basada en metodologías ágiles y herramientas de inteligencia artificial optimizar la gestión de proyectos académicos colaborativos en entornos universitarios, mejorando la organización, el aprendizaje personalizado y la retroalimentación?* 

## Objetivo Principal

Implementar una plataforma digital robusta que, mediante el uso de IA y principios ágiles, optimice la gestión de proyectos académicos colaborativos, mejorando la organización del trabajo, fomentando un aprendizaje más personalizado y proporcionando retroalimentación valiosa y oportuna a los estudiantes.

## Funcionalidades Clave

U Teaming ofrecerá un conjunto de herramientas integradas para potenciar la experiencia académica:

-   **Gestión de Proyectos y Tareas:** Creación, asignación y seguimiento visual mediante tableros Kanban interactivos.
-   **Colaboración en Tiempo Real:** Chat integrado y foros de discusión por equipo/proyecto para una comunicación fluida.
-   **Inteligencia Artificial Aplicada:**
    -   Evaluación y retroalimentación automática sobre la calidad y originalidad de los entregables.
    -   Detección de contenido potencialmente generado por IA.
    -   Análisis de la dinámica de trabajo en equipo para ofrecer sugerencias.
    -   Sugerencias inteligentes para la formación de equipos.
-   **Gestión de Equipos:** Creación, administración y monitoreo del desempeño de equipos.
-   **Notificaciones Inteligentes:** Sistema de alertas personalizables en tiempo real sobre eventos importantes (nuevas tareas, mensajes, fechas límite).
-   **Integraciones:** Conexión con herramientas externas esenciales como Google Drive y GitHub.
-   **Gamificación:** Sistema de puntos, logros y rankings para motivar la participación activa.

## Arquitectura y Metodología

-   **Arquitectura:** El sistema se está desarrollando bajo una **arquitectura de microservicios** para asegurar escalabilidad, mantenibilidad y flexibilidad tecnológica.
-   **Metodología:** Seguimos un enfoque ágil basado en **Scrum**, con sprints de 2 semanas, planificación, revisiones y retrospectivas para entregar valor de forma incremental y adaptarnos a los cambios.

## Tecnologías Principales

Utilizamos un stack tecnológico moderno y robusto:

-   **Backend:** Node.js (TypeScript), NestJS, GraphQL
-   **Frontend:** React (TypeScript), React Native (para móvil)
-   **Bases de Datos:** PostgreSQL (Relacional), MongoDB (NoSQL), Redis (Cache)
-   **Inteligencia Artificial:** Python, FastAPI, TensorFlow/PyTorch/Hugging Face
-   **Infraestructura & DevOps:** Docker, Kubernetes, AWS/GCP, GitHub Actions

## Estado Actual del Proyecto

Actualmente, el proyecto se encuentra en la fase inicial de desarrollo (Sprint X). Hemos completado la planificación detallada, el diseño de la arquitectura y estamos comenzando la implementación del MVP (Producto Mínimo Viable).

---

## Arquitectura Detallada (Boceto)

La plataforma sigue una arquitectura de microservicios. Puedes encontrar un diagrama detallado de la arquitectura [https://github.com/BrayanPerez2607/U-Teaming/tree/main].

Los principales microservicios identificados son:

-   **Autenticación y Gestión de Usuarios:** [Breve descripción de responsabilidad] 
-   **Equipos:** [Breve descripción de responsabilidad] 
-   **Tareas y Entregables:** [Breve descripción de responsabilidad] 
-   **IA (Evaluación y Retroalimentación):** [Breve descripción de responsabilidad] 
-   **Notificaciones:** [Breve descripción de responsabilidad] 
-   **Integraciones Externas:** [Breve descripción de responsabilidad] 
-   **Gamificación:** [Breve descripción de responsabilidad] 
-   **Seguridad y Monitoreo:** [Breve descripción de responsabilidad]
-   **API Gateway:** [Breve descripción de responsabilidad] 

* (Nota: Rellenar las descripciones y añadir más detalles a medida que se desarrollen los servicios)*

## Stack Tecnológico Completo (Boceto)

* (Nota: Listar aquí de forma más detallada las tecnologías, bibliotecas y frameworks específicos para cada área: Frontend, Backend, BBDD, IA, DevOps, etc. Puedes basarte en la sección "Stack Tecnológico Propuesto" y "Mas Tecnologías" del documento)*

    * **Frontend (Web):** React (TypeScript), Redux/Recoil, Material UI, Yjs/ShareDB, React-Beautiful-DnD...
    * **Frontend (Móvil):** React Native, Firebase Cloud Messaging (FCM)...
    * **Backend:** Node.js (TypeScript), NestJS, GraphQL, WebSockets...
    * **Bases de Datos:** PostgreSQL, MongoDB, Redis...
    * **IA:** Python, FastAPI, TensorFlow, PyTorch, Hugging Face...
    * **Infraestructura & DevOps:** Docker, Kubernetes, AWS (S3, EC2, Load Balancer, Auto Scaling...), NGINX, GitHub Actions/CircleCI...
    * **Seguridad:** JWT, bcrypt, AES-256, HTTPS/SSL/TLS, 2FA, OAuth 2.0...
    * **Monitoreo:** Prometheus, Grafana, ELK Stack...
    * **Herramientas Adicionales:** Jira, Git/GitHub, Swagger, Google Analytics, Hotjar, JMeter...

## Prerrequisitos (Boceto)

Para ejecutar este proyecto localmente necesitarás tener instalado:

-   Node.js (vXX.X.X o superior - especificar versión)
-   npm (vX.X.X o superior) o yarn (vX.X.X o superior)
-   Docker & Docker Compose
-   Git
-   [Añadir cualquier otro software necesario, ej. Python, clientes de BD...]

## Instalación y Ejecución Local (Boceto)

Sigue estos pasos para poner en marcha el entorno de desarrollo:

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/BrayanPerez2607/U-Teaming.git](https://github.com/BrayanPerez2607/U-Teaming.git)
    cd U-Teaming
    ```

2.  **Instala dependencias (Ejemplo para un servicio Node.js):**
    *(Nota: Puede que necesites hacer esto dentro de cada carpeta de microservicio)*
    ```bash
    # Ejemplo para el servicio de autenticación
    cd services/auth-user-service
    npm install
    # o
    yarn install
    cd ../..
    ```
    *(Nota: Repetir para otros servicios y el cliente frontend)*

3.  **Configura las variables de entorno:**
    * Crea un archivo `.env` en la raíz de cada servicio (o donde se especifique).
    * Copia el contenido de `.env.example` (si existe) y rellena las variables necesarias (claves de API, secretos de JWT, URLs de bases de datos, etc.).
    ```bash
    # Ejemplo de .env para auth-user-service
    DATABASE_URL="postgresql://user:password@localhost:5432/uteaming_auth"
    JWT_SECRET="TU_SECRETO_MUY_SEGURO"
    PORT=3001
    # ...otras variables
    ```

4.  **Levanta los servicios con Docker Compose:**
    *(Asegúrate de que Docker esté corriendo)*
    ```bash
    docker-compose up -d --build
    ```
    *(Nota: El flag `-d` ejecuta en segundo plano. `--build` reconstruye las imágenes si hay cambios en los Dockerfiles)*

5.  **Accede a la aplicación:**
    * Frontend: `http://localhost:PUERTO_FRONTEND` (ej. 3000)
    * API Gateway: `http://localhost:PUERTO_GATEWAY` (ej. 3000 o 5000)

6.  **Para detener los servicios:**
    ```bash
    docker-compose down
    ```

* (Nota: Ajusta estos pasos según la estructura final y los scripts que definas en `package.json` o `docker-compose.yml`)*

## Estructura del Proyecto (Boceto)

Describir brevemente cómo está organizado el código en el repositorio.