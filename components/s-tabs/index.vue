<template>
  <div class="s-tabs" :class="customClass">
    <div class="s-tabs-nav-wrap" :class="{'is-fixed':fixed}" :style="{height:height+'rpx'}">
      <scroll-view
        class="s-tabs-nav-scroll-view"
        :style="{height:height+'rpx',background}"
        :show-scrollbar="false"
        scroll-with-animation
        scroll-x
        :scroll-left="scrollLeft"
      >
        <div class="s-tabs-nav-container">
          <div class="s-tabs-nav-list">
            <template v-if="!slotTitle">
              <div
                v-for="(item,index) of navInfoList"
                :class="['s-tab-nav',{'is-disabled':item.disabled},{'is-active':active==index}]"
                :style="'color:'+(active==index?activeColor:color)"
                :key="index"
                @click="navClick(index,item)"
              >{{item.title}}</div>
            </template>
            <slot v-else></slot>
          </div>
          <div
            v-if="bar"
            class="s-tabs-active-bar"
            :style="{
              width:calcBarWidth+'px',
              height:barHeight+'rpx',
              background:barColor,
              borderRadius:barBorderRadius+'rpx',
              transform:'translateX('+barLeft+'px)'
            }"
          ></div>
        </div>
      </scroll-view>
    </div>
    <div v-if="!slotTitle" class="s-tabs-content-wrap" :style="transform + transition">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 's-tabs',
  props: {
    // class
    customClass: {
      type: String,
      default: ''
    },
    // 是否固定导航
    fixed: {
      type: Boolean,
      default: false
    },
    // v-model双向绑定
    value: {
      default: 0
    },
    // 使子组件s-tab的slot成为导航的填充内容
    slotTitle: {
      type: Boolean,
      default: false
    },
    // 导航颜色
    color: {
      type: String,
      default: '#333'
    },
    // 导航背景色
    background: {
      type: String,
      default: 'transparent'
    },
    // 导航选中颜色
    activeColor: {
      type: String,
      default: '#406BDC'
    },
    // 导航高度 rpx
    height: {
      type: Number,
      default: 80
    },
    // 内容部分是否动画切换
    effect: {
      type: Boolean,
      default: false
    },
    // 内容部分动画切换时间
    duration: {
      type: Number,
      default: 0.3
    },
    // 内容部分是否开启延迟渲染（首次切换到标签时才触发内容渲染）
    lazyRender: {
      type: Boolean,
      default: true
    },
    // 是否显示底部条
    bar: {
      type: Boolean,
      default: true
    },
    // 底部条颜色
    barColor: {
      type: String,
      default: '#406BDC'
    },
    // 底部条宽度 rpx
    barWidth: {
      default: 60
    },
    // 底部条高度 rpx
    barHeight: {
      default: 4
    },
    // 底部条圆角 rpx
    barBorderRadius: {
      default: 3
    }
  },
  data () {
    this.navContextList = [];
    return {
      active: 0,
      diffLeft: 0,
      scrollLeft: 0,
      barLeft: 0,
      navInfoList: [],
      lockScroll: false
    };
  },
  computed: {
    calcBarWidth () {
      return this.navInfoList[this.active] ? uni.upx2px(this.barWidth) : 0;
    },
    transform () {
      return `transform: translate3d(${-100 * this.active}%, 0, 0);`;
    },
    transition () {
      return this.effect ? `transition-duration: ${this.duration}s;` : '';
    }
  },
  provide () {
    return {
      $tabs: this
    };
  },
  watch: {
    value (index) {
      this.active = this.value;
      this.renderContent();
      this.scrollByIndex();
    }
  },
  methods: {
    navClick (index, item) {
      if (index !== this.active && !item.disabled) {
        this.active = index;
        this.$emit('input', index);
        this.$emit('change', index);
        this.renderContent();
        this.scrollByIndex();
      }
    },
    renderContent () {
      this.$nextTick(() => {
        const item = this.navContextList[this.active];
        if (item && !item.info.isRender) {
          item.info.isRender = true;
          this.$emit('render', this.active);
        }
      });
    },
    scrollByIndex (isInit) {
      if (this.lockScroll) return;
      this.lockScroll = true;
      this.$nextTick(() => {
        const query = () => uni.createSelectorQuery().in(this);
        query().select('.s-tabs-nav-wrap').boundingClientRect().exec(([wrap]) => {
          query().select('.s-tabs-nav-list').boundingClientRect().exec(([view]) => {
            if (isInit) {
              this.diffLeft = view.left - wrap.left;
            }
            const setNavScroll = (item) => {
              if (item) {
                const centerLeft = (wrap.width - item.width) / 2;

                this.scrollLeft = Math.abs(view.left - wrap.left - this.diffLeft) + item.left - centerLeft - wrap.left;

                this.barLeft = this.scrollLeft + centerLeft + (item.width - this.calcBarWidth) / 2;
              }
              this.lockScroll = false;
            };
            if (this.slotTitle) {
              const navContext = this.navContextList[this.active];
              if (navContext) {
                uni.createSelectorQuery().in(navContext).select('.s-tab-nav').boundingClientRect().exec(([item]) => {
                  setNavScroll(item);
                });
              } else {
                this.lockScroll = false;
              }
            } else {
              query().selectAll('.s-tab-nav').boundingClientRect().exec(([list]) => {
                setNavScroll(list[this.active]);
              });
            }
          });
        });
      });
    }
  },
  created () {
    this.active = this.value;
  },
  mounted () {
    this.renderContent();
    this.scrollByIndex(true);
  }
};
</script>

<style lang="scss" scoped>
.s-tabs-nav-wrap {
  &.is-fixed {
    .s-tabs-nav-scroll-view {
      width: 100%;
      white-space: nowrap;
      position: fixed;
      box-sizing: border-box;
      z-index: 9;
    }
  }
}
.s-tabs-nav-scroll-view {
  ::-webkit-scrollbar {
    display: none;
  }
}
.s-tabs-nav-container {
  position: relative;
  height: 100%;
}
.s-tabs-nav-list {
  min-width: 100%;
  height: 100%;
  display: inline-flex;
  box-sizing: border-box;
  ::v-deep s-tab {
    height: 100%;
    flex: 1 0 0;
  }
}
.s-tab-nav {
  height: 100%;
  flex: 1 0 0;
  display: flex;
  font-size: 26rpx;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;

  &.is-disabled {
    color: #c8c9cc;
  }
}
.s-tabs-active-bar {
  position: absolute;
  bottom: 0;
  border-radius: 6rpx;
  transition: all 0.3s;
}
.s-tabs-content-wrap {
  display: flex;
  white-space: nowrap;
  ::v-deep s-tab {
    width: 100%;
    flex-shrink: 0;
    box-sizing: border-box;
  }
}
</style>
