

build:
	docker build -t petarnenov/fileserver .

up:
	docker compose up -d

down:
	docker compose down
