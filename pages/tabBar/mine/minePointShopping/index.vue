<template>
	<view>
		<uni-nav-bar background-color="none" border="none" status-bar="false" @clickLeft="goBack">
			<view class="nav-bar-content">
				<text class="font-18" style="margin-right: 32rpx;">积分商城</text>
				<u-search placeholder="输入查询内容" v-model="keyword" :show-action="false"></u-search>
			</view>
			<view slot="left">
				<u-icon class="jsBack" name="arrow-left" width="54" height="54"></u-icon>
			</view>
			<view slot="right" class="right" name="right">
			</view>
		</uni-nav-bar>
		
		<view class="swiper">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item>
					<view class="swiper-item" style="height: 100%">
						<image src="../../../../static/mine/shop-swiper1.svg" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<image src="../../../../static/mine/shop-swiper2.svg" mode=""></image>
				</swiper-item>
				<swiper-item >
					<image src="../../../../static/mine/shop-swiper3.svg" mode=""></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="swiper-next">
			<u-grid :col="4" :border="false">
					<u-grid-item>
						<u-image src="../../../../static/mine/shibie.png" width="138" height="134"></u-image>
						<view class="grid-text font-13">家居日常</view>
					</u-grid-item>
					<u-grid-item @click="link('/pages/tabBar/mine/minePointShopping/entertainment')">
						<u-image src="../../../../static/mine/bank.png" width="138" height="134"></u-image>
						<view class="grid-text font-13">休闲娱乐</view>
					</u-grid-item>
					<u-grid-item>
						<u-image src="../../../../static/mine/zhizhao.png" width="138" height="134"></u-image>
						<view class="grid-text font-13">美食特惠</view>
					</u-grid-item>
					<u-grid-item>
						<u-image src="../../../../static/mine/zhifaren.png" width="138" height="134"></u-image>
						<view class="grid-text font-13">教育培训</view>
					</u-grid-item>
				</u-grid>
		</view>
		
		<view class="exchange-sorce">
			<view class="exchange-sorce-title">
				<view class="exchange-sorce-left">
					<text class="empty-text"></text>
					<text class="font-18" style="line-height: 36rpx;">生活资讯</text>
				</view>
				<view class="exchange-sorce-right font-12">
					<text class="font-12">更多</text>
					<u-icon name="arrow-right" ></u-icon>
				</view>
			</view>
			<view class="exchange-sorce-content">
				<u-grid :col="4" :border="false">
						<u-grid-item>
							<u-image src="../../../../static/mine/jimu.png" width="152" height="160"></u-image>
							<view class="grid-text font-13">积木</view>
						</u-grid-item>
						<u-grid-item>
							<u-image src="../../../../static/mine/shoubiao.png" width="152" height="160"></u-image>
							<view class="grid-text font-13">手表</view>
						</u-grid-item>
						<u-grid-item>
							<u-image src="../../../../static/mine/huazhuanghe.png" width="152" height="160"></u-image>
							<view class="grid-text font-13">化妆盒</view>
						</u-grid-item>
						<u-grid-item>
							<u-image src="../../../../static/mine/danjianbao.png" width="152" height="160"></u-image>
							<view class="grid-text font-13">单肩包</view>
						</u-grid-item>
					</u-grid>
			</view>
		</view>
		
		<view class="exchange-sorce">
			<view class="exchange-sorce-title">
				<view class="exchange-sorce-left">
					<text class="empty-text"></text>
					<text class="font-18" style="line-height: 36rpx;">票券专场</text>
				</view>
				<view class="exchange-sorce-right font-12">
					<text class="font-12">更多</text>
					<u-icon name="arrow-right" ></u-icon>
				</view>
			</view>
			<view class="exchange-sorce-content">
				<u-grid :col="3" :border="false">
						<u-grid-item>
							<u-image src="../../../../static/mine/ticket-1.png" width="208" height="160"></u-image>
							<view class="grid-text font-13">骑行免单券</view>
						</u-grid-item>
						<u-grid-item>
							<u-image src="../../../../static/mine/shop-swiper2.png" width="208" height="160"></u-image>
							<view class="grid-text font-13">全国免费洗车</view>
						</u-grid-item>
						<u-grid-item>
							<u-image src="../../../../static/mine/shop-swiper3.png" width="208" height="160"></u-image>
							<view class="grid-text font-13">豪华学习礼包</view>
						</u-grid-item>
					</u-grid>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '',
				indicatorDots: true,
				autoplay: false,
				interval: 2000,
				duration: 500,
			}
		},
		methods: {
			link(url){
				uni.navigateTo({
					url:url
				})
			},
			goBack() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
page {
	overflow-y: auto;
}
.font-12 {
	font-size: 24rpx;
}
.font-13 {
	font-size: 26rpx;
}
.font-14 {
	font-size: 28rpx;
}
.font-16 {
	font-size: 32rpx;
}
.font-18 {
	font-size: 36rpx;
}
.font-20 {
	font-size: 40rpx;
}
/deep/ .uni-navbar__header-btns {
	margin: 0 20rpx 0 10rpx;
	width: 44rpx;
}
/deep/.uni-navbar__header-btns:last-child {
	width: 0;
	padding: 0;
}
.nav-bar-content {
	display: flex;
	justify-content: flex-start;
	width: 100%;
	padding-bottom: 12rpx;
	padding-top: 12rpx;
}
.swiper {
	height: 280rpx;
}
/deep/.uni-swiper-dots {
	.uni-swiper-dot {
		background-color: #FFFFFF;
		opacity: 0.5;
		width: 8rpx;
		height: 8rpx;
	}
	.uni-swiper-dot-active {
		width: 16rpx;
		background-color: #FFFFFF;
		opacity: 1;
		border-radius: 4rpx;
	}
}
.swiper-next {
	padding: 0 10rpx 60rpx;
}
.exchange-sorce-title {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-right: 30rpx;
	.empty-text {
		display: inline-block;
		width: 6rpx;
		height: 36rpx;
		background-color: #206CFE;
		margin-right: 24rpx;
	}
	.exchange-sorce-left {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.exchange-sorce-right {
		color: #36383A;
	}
}
.exchange-sorce-content {
	margin: 30rpx;	
	border-radius: 20px;
	box-shadow: 0px 4px 30px 0px rgba(26,33,73,0.09); 
	
}
.grid-text {
	margin-top: 20rpx;
}
</style>
