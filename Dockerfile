FROM node:18-alpine AS base

# 安装依赖
FROM base as install

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./

RUN yarn global add pnpm && pnpm i --frozen-lockfile;

RUN echo "🎉 安 🎉 装 🎉 依 🎉 赖 🎉 成 🎉 功 🎉"


# 启动项目
FROM base as runner

WORKDIR /app

ENV NODE_ENV production

COPY .output ./.output
COPY --from=install /app/node_modules ./node_modules

CMD [ "npx", "nuxi" , "preview"]

RUN echo "🎉 部 🎉 署 🎉 成 🎉 功 🎉"