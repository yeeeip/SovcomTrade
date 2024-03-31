FROM maven:3.9.5-amazoncorretto-17 as maven_build
WORKDIR /app

COPY backend/CurrencyApplication/pom.xml .

RUN mvn clean package -Dmaven.main.skip -Dmaven.test.skip && rm -r target

COPY backend/CurrencyApplication/src ./src
RUN mvn clean package -Dmaven.test.skip

FROM openjdk:17-jdk-slim
WORKDIR /app

COPY --from=maven_build /app/target/*.jar .

CMD [ "java", "-jar", "CurrencyApplication-0.0.1-SNAPSHOT.jar"]