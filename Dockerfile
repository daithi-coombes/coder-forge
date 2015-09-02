#
# Ubuntu Dockerfile
#
# https://github.com/dockerfile/ubuntu
#

# Pull base image.
FROM ubuntu:14.04

# Install.
RUN \
  apt-get install -y curl
  curl --silent --location https://deb.nodesource.com/setup_0.12 | sudo bash -
  apt-get install --yes nodejs
  apt-get install --yes build-essential
  apt-get install --yes npm

# Add files.
ADD root/.bashrc /root/.bashrc
ADD root/.gitconfig /root/.gitconfig
ADD root/.scripts /root/.scripts

# Set environment variables.
ENV HOME /root

# Define working directory.
WORKDIR /root

# Define default command.
CMD ["bash"]
