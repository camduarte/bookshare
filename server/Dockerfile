# Usa una imagen base oficial de OpenJDK
FROM openjdk:17-jdk-slim

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo pom.xml y el archivo maven wrapper
COPY pom.xml ./
COPY mvnw ./
COPY .mvn .mvn

# Copia el resto del código fuente del proyecto
COPY src ./src

# Descarga las dependencias de Maven y empaqueta la aplicación
RUN ./mvnw clean package -DskipTests

# Expone el puerto que tu aplicación va a usar
EXPOSE 8080

# Define el comando para ejecutar tu aplicación
CMD ["java", "-jar", "target/server-0.0.1-SNAPSHOT.war"]
