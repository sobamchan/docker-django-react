FROM python:3.5.1
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
ADD requirements.txt /code/
RUN pip install -r requirements.txt
RUN apt-get update -qq && apt-get install -y npm nodejs
ADD . /code/
