# 使用 Node.js 20 版本的官方镜像作为基础镜像
FROM node:20

# RUN apk add --no-cache libc6-compat

# 设置工作目录为 /data
WORKDIR /app

# 复制当前目录下的所有文件到容器的 /data 目录中
COPY . /app

# 创建 logs 目录
RUN mkdir -p app/logs

RUN npm cache clean --force 
RUN npm config set strict-ssl false

# 全局安装 pnpm
RUN npm install -g pnpm 
# --registry=https://registry.npm.taobao.org
# 安装pm2
RUN npm install -g pm2 

# 使用 pnpm 安装项目依赖
RUN pnpm install

# 运行项目构建命令
# RUN pnpm run build
