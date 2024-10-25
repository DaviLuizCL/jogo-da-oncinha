FROM ubuntu:22.04

WORKDIR /app

# Instalando dependências básicas
RUN apt-get update && apt-get install -y \
  curl \
  wget \
  gnupg \
  software-properties-common \
  openjdk-21-jdk \
  mysql-server

# Instalando Maven
RUN wget https://dlcdn.apache.org/maven/maven-3/3.9.9/binaries/apache-maven-3.9.9-bin.tar.gz && \
  tar -xvf apache-maven-3.9.9-bin.tar.gz && \
  mv apache-maven-3.9.9 /opt/ && \
  rm apache-maven-3.9.9-bin.tar.gz

ENV M2_HOME=/opt/apache-maven-3.9.9
ENV PATH="$M2_HOME/bin:$PATH"

# Instalando Node.js (via NVM)
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash && \
  export NVM_DIR="$HOME/.nvm" && \
  [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && \
  [ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion" && \
  nvm install 21 && \
  npm install -g npm@latest @angular/cli

# Configurando MySQL
RUN service mysql start && \
mysql -u root -p'root' -e "CREATE DATABASE IF NOT EXISTS oncinha;" && \
mysql -u root -p'root' -e "FLUSH PRIVILEGES;"


# Copiando projeto para dentro do container
COPY . .

# Comando de inicialização
CMD ["mysqld"]
