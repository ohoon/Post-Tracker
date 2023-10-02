sudo docker-compose down

sudo docker rmi 0hoon5661/post-tracker-backend:latest
sudo docker rmi 0hoon5661/post-tracker-frontend:latest
sudo docker rmi 0hoon5661/post-tracker-nginx:latest

sudo docker pull 0hoon5661/post-tracker-backend:latest
sudo docker pull 0hoon5661/post-tracker-frontend:latest
sudo docker pull 0hoon5661/post-tracker-nginx:latest

sudo docker-compose up --build

sudo docker rmi -f $(docker images -f "dangling=true" -q) || true