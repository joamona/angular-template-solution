# pull official base image
FROM node:23-alpine3.20

# ARG USER_ID sets the USER_ID variable in the Dockerfile, 
#    reading the value from the USER_ID arg variable.
# This arg variable is set in the djangoapi->build->args section 
#    of the docker-compose.yml file
#    The username is set in the .env.dev file
ARG USER_ID
ARG GROUP_ID
ARG USERNAME

# Crear grupo y usuario con los mismos UID y GID que el host
RUN addgroup -g 1001 joamona && adduser -D -u 1001 -G joamona joamona

RUN npm install -g @angular/cli

WORKDIR /home/joamona

# Set the user to copy the files to the container,
# so the owner of the files is the user and not root
# and the user in the host match with the user in the container
USER joamona
COPY . .
