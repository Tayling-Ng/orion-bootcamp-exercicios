FROM python:3.11-alpine

WORKDIR /usr/src/app

COPY requirements.txt .

RUN apk add --no-cache gcc musl-dev && \
    pip install --no-cache-dir -r requirements.txt && \
    apk del gcc musl-dev 

COPY . .

EXPOSE 3000

CMD ["python", "app.py"]