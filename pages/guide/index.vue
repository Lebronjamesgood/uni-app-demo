<template>
	<view class="guide">
		
		<!-- <u-swiper height="1500" :list="guidelList" border-radius="0"></u-swiper> -->
		<swiper
			class="swiper"
			autoplay="false"
			:indicator-dots="true"
			interval="3000"
			circular="false"
			:current="tabIndex"
			@change="changeIndicatorDots"
			v-if="guidelList.length > 0"
		>
			<swiper-item class="item" v-for="(item, index) in guidelList" :key="index"><image :src="item" mode="aspectFill"></image></swiper-item>
		</swiper>
		<text class="skipItem" @click="openIndex()">跳过</text>
		<view class="company">@Copyright2021 北京中电兴发科技有限公司</view>
	</view>
	<!-- v-show="tabIndex === 4" -->
</template>

<script>
export default {
	components: {},
	data() {
		return {
			guidelList: [
				'../../static/advertisement/adv1.webp',
				'../../static/advertisement/adv2.webp',
				'../../static/advertisement/adv3.webp',
				'../../static/advertisement/adv4.webp',
				'../../static/advertisement/adv5.webp'
			],
			tabIndex: 0,
			timer: '',
			defaultCarouseList: [
				{
					image: '../../static/images/expose/zwtp.jpg'
				}
			]
		};
	},
	onLoad() {
		this.getList();
	},
	methods: {
		getList() {
			this.timer = setTimeout(() => {
				uni.switchTab({
					url: '/pages/tabBar/home/index'
				});
			}, 15000);
		},
		changeIndicatorDots(e) {
			this.tabIndex = e.detail.current;
		},
		openIndex() {
			clearTimeout(this.timer);
			uni.switchTab({
				url: '/pages/tabBar/home/index'
			});
		}
	}
};
</script>

<style lang="stylus" scoped>
 /deep/.uni-swiper-dot-active
   width 16rpx !important
   height 8rpx !important
   border-radius 4rpx !important
   background #fff !important
 /deep/.uni-swiper-dot
   width 8rpx 
   height 8rpx 
   background rgba(255,255,255,0.50)
.guide
	width 100%
	height 100vh
.swiper
	height 100vh
.skipItem
	position fixed
	right 30rpx
	top 60rpx
	opacity 0.4
	background #000000
	border-radius 48rpx
	padding 20rpx 47rpx
	font-size 32rpx
	font-weight 400
	color #ffffff
	line-height 48rpx
	letter-spacing 1rpx
.company
	opacity 0.7
	font-size 24rpx
	font-weight Normal
	color #ffffff
	line-height 36rpx
	letter-spacing 1rpx
	position fixed
	bottom 40rpx
	margin 0 calc((100% - 560rpx) /2)
uni-image
	width 100%
	height 100vh
/deep/div
	background-size 100% 100% !important
</style>
