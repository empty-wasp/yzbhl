# FROM node:18 AS base

# # 安装依赖
# FROM base as install

# RUN apk add --no-cache libc6-compat

# WORKDIR /app

# COPY package.json pnpm-lock.yaml* ./

# RUN yarn global add pnpm && pnpm i --frozen-lockfile;

# RUN echo "🎉 安 🎉 装 🎉 依 🎉 赖 🎉 成 🎉 功 🎉"


# # 启动项目
# FROM base as runner

# WORKDIR /app

# ENV NODE_ENV production

# COPY .output ./.output
# COPY --from=install /app/node_modules ./node_modules

# # RUN npx nuxi preview
# CMD [ "node", ".output/server/index.mjs" ]

# RUN echo "🎉 部 🎉 署 🎉 成 🎉 功 🎉"


# 使用 Node.js 18 版本的官方镜像作为基础镜像
FROM node:18

# 设置工作目录为 /data
WORKDIR /app

# 复制当前目录下的所有文件到容器的 /data 目录中
COPY . /app

# 创建 logs 目录
RUN mkdir -p data/logs

# 安装pm2
RUN npm install pm2 -g

# 全局安装 pnpm
# RUN npm install -g pnpm
RUN yarn global add pnpm && pnpm i;

# 使用 pnpm 安装项目依赖
# RUN pnpm install

# 运行项目构建命令
# RUN pnpm run build
