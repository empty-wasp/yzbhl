<template>
  <ul :class="ui.wrapper">
    <li :class="ui.item.wrapper" v-for="(item, index) in list">
      <div
        :class="`${ui.item.container} ${
          (index + 1) % 2 === 0 ? 'even' : 'odd'
        }`"
      >
        <div :class="ui.item.label.base">
          <span :class="ui.item.label.tip">{{ item.label }}</span>
          <p>
            <span :class="ui.item.label.time">{{ item.time }}</span>
          </p>
        </div>
        <div :class="ui.item.label.desc">
          {{ item.description }}
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
const list = [
  {
    time: "2013年",
    label: "BHL 成立",
    description: "中国华南地区日本、美国某品牌授权经销商",
  },
  {
    time: "2017年",
    label: "营业额超3000万",
    description: "在航天领域及汽车零部件行业年营业额超3000万",
  },
  {
    time: "2018年",
    label: "自主研发BHL测量系统",
    description: "自主研发品牌在线测量系统上机成功测试。",
  },
  {
    time: "2019年",
    label: "BHL测量系统，正式销售",
    description:
      "BHL品牌红外线测量系统正式开始市场销售，与创新模具加工厂深度合作。",
  },
  {
    time: "2020年",
    label: "BHL测量系统，销量破3000",
    description: "BHL品牌测量系统各种专利商标正式下证书及成功突破销量3000套。",
  },
  {
    time: "2021年",
    label: "工厂升级",
    description:
      "BHL品牌创新模具加工厂正式升级成立苏州古博特精密机械有限公司。",
  },
];

const wrapperBefore = "before:w-2 before:h-full";
const tipBefore = "lg:before:hidden ulg:after:hidden";
const ui = {
  wrapper: `timeline relative ulg:py-12 max-w-2xl my-0 mx-auto ${wrapperBefore}`,
  item: {
    wrapper:
      "lis relative lg:after:hidden ulg:before:hidden py-4 ulg:py-8 w-full block text-center lg:flex lg:odd:justify-start lg:even:justify-end lg:odd:text-right",
    container: "w-full group lg:w-5/12 ",
    label: {
      base: "relative block lg:flex group-[.odd]:flex-row-reverse",
      tip: `tip relative py-1.5 px-2.5 rounded-md bg-[#F8F8F8]  font-semibold ulg:bg-white ${tipBefore}`,
      time: "py-1 px-1.5 bg-[#F8F8F8] text-xs text-primary ",
      desc: "text-xs ulg:p-3 ulg:bg-[#f5f5f5] ulg:mx-10 mt-3",
    },
  },
};
</script>

<style scoped lang="scss">
.timeline::before {
  content: " ";
  display: block;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  background: linear-gradient(
    to bottom,
    rgba(80, 80, 80, 0) 0%,
    rgb(80, 80, 80) 8%,
    rgb(80, 80, 80) 92%,
    rgba(80, 80, 80, 0) 100%
  );
  z-index: -1;
}

.lis {
  &::after {
    position: absolute;
    left: 50%;
    bottom: 100%;
    content: " ";
    width: 16px;
    height: 16px;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 10px;
    border: 5px solid #3b82f6;
  }

  &::before {
    position: absolute;
    left: 50%;
    top: 36px;
    content: " ";
    width: 16px;
    height: 16px;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 10px;
    border: 5px solid #3b82f6;
  }
}

.tip::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 100%;
  height: 0;
  width: 0;
  transform: translateX(-50%);
  border: solid transparent;
  border-bottom-color: #f8f8f8;
  border-width: 8px;
}

.odd {
  .tip {
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
    &::after {
      content: "";
      position: absolute;
      left: 100%;
      top: 50%;
      height: 0;
      width: 0;
      transform: translateY(-50%);
      border: solid transparent;
      border-left-color: #f8f8f8;
      border-width: 8px;
    }
  }
}
.even {
  .tip {
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
    &::after {
      content: "";
      position: absolute;
      right: 100%;
      top: 50%;
      height: 0;
      width: 0;
      transform: translateY(-50%);
      border: solid transparent;
      border-right-color: #f8f8f8;
      border-width: 8px;
    }
  }
}
</style>
