# Sử dụng Node.js làm base image
FROM node:22-alpine

# Thiết lập thư mục làm việc
WORKDIR /app

# Copy các file package.json và lock file
COPY package*.json ./

# Cập nhật npm nếu cần
RUN npm install -g npm@latest

# Cài đặt các phụ thuộc
RUN npm install

# Copy toàn bộ mã nguồn
COPY . .

# Xây dựng ứng dụng Next.js
RUN npm run build

# Lộ cổng 3000
EXPOSE 3000

# Lệnh chạy ứng dụng
CMD ["npx", "serve"]
