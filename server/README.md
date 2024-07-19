## Guía de desarrollo

### Requisitos
- GIT
https://git-scm.com/downloads
- Java 17
https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html
- Configurar varibale de entorno `JAVA_HOME` necesaria para la ejecución del comando `mvnw`

### Instalación
1. **Bajar proyecto:**
```bash
git clone https://github.com/camduarte/bookshare.git
```
2. **Branch de desarrollo equipo Backend**
```bash
git switch dev-backend
```
4. **Eliminar compilación anterior, descargar las dependencias, compilar el código y empaquetar el proyecto:** (Ejecución desde la ubicación del pom.xml)
```bash
mvnw clean package
```
5. **Levantar aplicación** (Ejecución desde la ubicación del pom.xml):
```bash
mvnw spring-boot:run
```
5. **Verificar ejecución en el log**:
```bash
Tomcat started on port 8080 (http) with context path '/'
Started ServerApplication in 4.382 seconds (process running for 4.778)
```
6. **Detener aplicación**:
```bash
ctrl + c
```
7. **Verificar que el proceso haya terminado**
```bash
ps aux | grep java
```
8. **Si aún existen procesos relacionados a la aplicación**
```bash
kill -9 <PID>
```
### H2 Database
- Cliente web
```bash
http://localhost:8080/h2-console
```
- JDBC URL
```bash
jdbc:h2:mem:bookshare
``` 
- Nombre de la DDBB
```bash
bookshare
```
- Credenciales
```bash
usuario: root
contraseña: root
```
## Estructura del Proyecto
```
server
├── HELP.md
├── mvnw
├── mvnw.cmd
├── pom.xml
└── src
    ├── main
    │   ├── java
    │   │   └── com
    │   │       └── hackatong7
    │   │           └── server
    │   │               ├── application
    │   │               │   ├── dto        --> dto: Objetos de transferencia de datos que se utilizan para transportar datos entre las capas.
    │   │               │   └── service    --> Lógica de negocio y servicios de la aplicación. Interfaz.
    │   │               │       └── impl   --> Implementaciones de los servicios.
    │   │               ├── crosscutting   --> Clases y componentes que son transversales a varias capas, como excepciones y utilidades comunes.  
    │   │               ├── domain
    │   │               │   └── entity    --> Modelos
    │   │               ├── infrastructure
    │   │               │   ├── config --> Configuraciones de la aplicación.
    │   │               │   │   └── WebSecurityConfig.java
    │   │               │   ├── security    --> Componentes de seguridad como JWT.
    │   │               │   └── utils    --> Utilidades de infraestructura.
    │   │               ├── persistence
    │   │               │   ├── dao         --> DAO. Interfaz
    │   │               │   │   └── impl    --> DAO. Implementación
    │   │               │   └── repository  --> Repositorios Spring Data JPA.
    │   │               ├── presentation
    │   │               │   └── controller    --> API REST
    │   │               ├── ServerApplication.java
    │   │               └── ServletInitializer.java
    │   ├── resources
    │   │   ├── application.properties
    │   │   ├── json  --> Datos de prueba json.
    │   │   ├── sql  --> Datos de prueba sql.
    │   │   ├── static
    │   │   └── templates
    │   └── webapp
    └── test
        └── java
            └── com
                └── hackatong7
                    └── server
```
### Sobre los Branch
- main - producción
- dev - desarrollo general
- dev-frontend - desarrollo frontend
- dev-backend  - desarrollo backend

