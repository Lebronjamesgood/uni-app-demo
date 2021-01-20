<template>
	<view class="mine">
		<view class="mine-header" style="padding-bottom: 90rpx">
			<uni-nav-bar background-color="none" border="none" status-bar="false">
				<view slot="right" class="right-slot">
							<image style="width: 44rpx; height: 44rpx;" 
									src="../../../static/mine/setting.png" @click="link('/pages/tabBar/mine/mineInfoSet/setting')" />
				</view>
			</uni-nav-bar>
			<view class="header-content">
				<view class="content-left">
					<image style="width: 120rpx; height: 120rpx;"  src="../../../static/mine/profile-picture.png"></image>
					<view class="mine-name" style="line-height: 60rpx;">
						<view class="" >
							<text class="font-16">白鹤</text>
						</view>
						<view class="">
							<text class="font-14">ID:</text>
							<text class="font-14">123456</text>
						</view>
					</view>
				</view>
				
				<view class="content-right">
					<view class="right-text">
						<view @click="link('/pages/tabBar/mine/mineInfo/index')">
							<text class="font-12" style="margin-right: 6rpx">个人主页</text>
							<u-icon name="arrow-right" size="8"></u-icon>
						</view>
					</view>
				</view>
			</view>
			<view class="nav-bottom">
				<u-grid :col="3" :border="false">
					<u-grid-item class="view-item" @click="link('/pages/tabBar/mine/minePoints/index')">
						<view class="grid-num font-16">365</view>
						<view class="grid-text font-14">我的积分</view>
					</u-grid-item>
					<u-grid-item class="view-item" @click="link('/pages/tabBar/mine/mineCoupon/index')">
						<view class="grid-num font-16">2</view>
						<view class="grid-text font-14">我的优惠券</view>
					</u-grid-item>
					<u-grid-item class="view-item">
						<view class="grid-num font-16" style="position: relative;">1
							<u-badge :is-dot="true" is-center type="warning"></u-badge>
						</view>
						<view class="grid-text font-14" @click="link('/pages/message/mine/index')">消息中心</view>
					</u-grid-item>
				</u-grid>
			</view>
		</view>
		
	 <view class="mine-content">
		<view class="liked-views">
			<u-grid :col="4" :border="false">
				<u-grid-item class="view-item">
					<image src="../../../static/mine/process.png" class="img-50"></image>
					<view class="grid-text font-13">进度查询</view>
				</u-grid-item>
				<u-grid-item class="view-item" @click="link('/pages/tabBar/mine/minePointShopping/index')">
					<image src="../../../static/mine/points-shop.png" class="img-50"></image>
					<view class="grid-text font-13">积分商城</view>
				</u-grid-item>
				<u-grid-item class="view-item">
					<image src="../../../static/mine/orders.png"class="img-50"></image>
					<view class="grid-text font-13">我的订单</view>
				</u-grid-item>
				<u-grid-item class="view-item">
					<image src="../../../static/mine/shares.png" class="img-50"></image>
					<view class="grid-text font-13">我的分享</view>
				</u-grid-item>
			</u-grid>
		</view>
	</view>
	
	<view class="life-views">
		<u-grid :col="4" :border="false">
			<u-grid-item class="view-item">
				<image src="../../../static/mine/power-rate.png" class="img-50"></image>
				<view class="grid-text font-13">电费</view>
			</u-grid-item>
			<u-grid-item class="view-item">
				<image src="../../../static/mine/gas.png" class="img-50"></image>
				<view class="grid-text font-13">天然气</view>
			</u-grid-item>
			<u-grid-item class="view-item">
				<image src="../../../static/mine/phone-bill.png" class="img-50"></image>
				<view class="grid-text font-13">话费</view>
			</u-grid-item>
			<u-grid-item class="view-item">
				<image src="../../../static/mine/houses.png" class="img-50"></image>
				<view class="grid-text font-13">物业费</view>
			</u-grid-item>
		</u-grid>
	</view>
	<view class="uni-padding-wrap">
		<view class="page-section swiper">
			<view class="page-section-spacing">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item>
						<view class="swiper-item uni-bg-red" style="background-color: #F0AD4E;height: 100%;border-radius: 30rpx;">
							<image src="../../../static/mine/swiper1.png" mode=""></image>
						</view>
					</swiper-item>
					<swiper-item style="border-radius: 30rpx;">
						<image src="../../../static/mine/swiper2.png" mode=""></image>
					</swiper-item>
					<swiper-item style="border-radius: 30rpx;">
						<image src="../../../static/mine/swiper3.png" mode=""></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
				
	<view class="life-info">
		<view class="life-views-title">
			<text class="empty-text"></text>
			<text class="font-18" style="line-height: 36rpx;">生活资讯</text>
		</view>
		<view class="info-content">
			<view class="info-content-li" v-for="(item, index) in info_content" :key="index">
				<view class="info-content-top">
					<view class="info-content-left">
						<text class="font-16" style="color: #262626">{{ item.title }}</text>
					</view>
					<view class="info-content-right"><image class="imgs" :src="item.src" mode=""></image></view>
				</view>
				<view class="info-content-bottom">
					<view class="bottom-left">
						<text style="color: #868C96;font-size: 26rpx;margin-right: 24rpx;">{{ item.publish}}</text>
						<view>
							<span class="font-12 commentNum">{{ item.comment }}</span>
							<text class="font-12" style="margin-left: 8rpx;">评论</text>
						</view>
						
					</view>
					<view>
						<text style="color: #868C96;font-size: 26rpx;">{{ item.time }}</text>
					</view>
				</view>
				
			</view>
		</view>
  
  </view>
		
		         
	</view>
</template>

<script>
export default {
	data() {
		return {
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			info_content: [
				{
					title: '冬季流感高发季节，预防小妙招',
					publish: '口袋医生',
					time: '2020-12-10',
					comment: '20',
					src: require('../../../static/mine/index-list-img1.jpg')
				},
				{
					title: '公积金贷款后辞职了，房贷会变为商贷吗',
					publish: '网易财经',
					time: '2020-12-10',
					comment: '3',
					src: require('../../../static/home/u104.png')
				},
				{
					title: '脱贫攻坚！根植乡土·社责意识计划之凤凰县樟坡村',
					publish: '@品橙旅游',
					time: '2020-12-10',
					comment: '100',
					src: require('../../../static/mine/index-list-img3.png')
				},
				{
					title: '人大代表建议免费接种新冠疫苗，国家给答复了',
					publish: '人民网',
					time: '2020-12-10',
					comment: '76',
					src: require('../../../static/mine/index-list-img2.png')
				}
			]
		};
	},
	methods:{
		link(url){
			uni.navigateTo({
				url:url
			})
		},
	},
  onPullDownRefresh() {
		console.log('refresh');
		setTimeout(function () {
			uni.stopPullDownRefresh();
		}, 1000);
	}
};
</script>

<style lang="less" scoped>
page {
	overflow-y: auto;
}
/deep/ .uni-navbar--border {
	border: none;
}
/deep/.uni-navbar__header-btns {
	width: 44rpx;
	height: 44rpx;
	margin-right: 30rpx;
	margin-bottom: 18rpx;
}
/deep/ .uni-navbar__content {
	background: none;
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
.right-slot {
	width: 44rpx;
	height: 44rpx;
}
.img-50 {
	width: 100rpx;
	height: 100rpx;
}
.mine-header {
	background: url(../../../static/mine/top-bg.webp) no-repeat;
	background-size: 100% 100%;
}
.nav-top {
	display: flex;
	justify-content: space-around;
}
.header-content {
	padding: 0 30rpx;
	display: flex;
	justify-content: space-between;
	.content-left {
		display: flex;
		justify-content: flex-start;
		color: #FFFFFF;
		.mine-name {
			margin-left: 30rpx;
		}
	}
	.content-right {
		line-height: 32rpx;
		.right-text {
			padding: 8rpx 14rpx 8rpx 20rpx;
			font-size: 24rpx;
			color: #FFFFFF;
			background-color: #74AFFF;
			border-radius: 28rpx;
		}
	}
}
.nav-bottom {
	margin-top: 30rpx;
	.view-item {
		color: #FFFFFF;
		background: none!important;
	}
	.grid-num {
		padding-bottom: 26rpx;
	}
}
.mine-content {
	margin-top: -90rpx;
	padding: 0 20rpx;
	.liked-views {
		border-radius: 20rpx;
		padding: 0px 28rpx;
		background-color: #FFFFFF;
		box-shadow: -20rpx 20rpx 20rpx -24rpx;
		.grid-text {
			margin-top: 20rpx;
		}
	}
	
}
.life-views {
	padding: 0 30rpx;
	background-color: none;
	.view-item {
		background: none!important;
		padding: 0;
		margin-bottom: 10rpx;
		.grid-text {
			margin-top: 20rpx;
		}
	}
}
.uni-padding-wrap {
	padding: 0 30rpx;
	.swiper {
		height: 168rpx;
		border-radius: 30rpx;
	}
}

/deep/.uni-swiper-dots {
	left: auto;
	right: 0;
	bottom: 16rpx;
	.uni-swiper-dot {
		background-color: #FFFFFF;
		opacity: 0.5;
		width: 8rpx;
		height: 8rpx;
	}
	.uni-swiper-dot-active {
		width: 16rpx;
		background-color: #FFFFFF;
		border-radius: 4rpx;
		opacity: 1;
	}
}
/deep/ .swiper-item {
	border-radius: 30rpx;
	overflow: hidden;
}
.life-info {
	margin-top: 40rpx;
}
.life-views-title {
	display: flex;
	align-items: center;
	.empty-text {
		display: inline-block;
		width: 6rpx;
		height: 36rpx;
		background-color: #206CFE;
		margin-right: 24rpx;
	}
}
.info-content {
	padding: 20rpx;
	.info-content-li {
		margin: 20rpx 0;
		padding: 20rpx;
		border-bottom: 1rpx solid #f2f2f2;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		.info-content-top {
			display: flex;
			justify-content: space-between;
			.info-content-left {
				margin-right: 24rpx;
				width: calc(100% - 264rpx);
			}
			.info-content-right {
				.imgs {
					width: 240rpx;
					height: 140rpx;
				}
			}
		}
		.info-content-bottom {
			display: flex;
			justify-content: space-between;
			margin-top: 10rpx;
			padding-bottom: 20rpx;
			.bottom-left {
				display: flex;
				justify-content: flex-start;
			}
			.commentNum {
				position: relative;
			}
			.commentNum::after {
				 content: '';
				display: inline-block;
				position: absolute;
				left: calc(50% - 11rpx);
				width: 22rpx;
				height: 4rpx;
				bottom: -14rpx;
				background: url(../../../static/mine/line.png) no-repeat;
				background-size: 100% 100%;
			}
		}
		// .info-content-left {
		// 	display: flex;
		// 	flex-direction: column;
		// 	justify-content: space-between;
		// 	margin-right: 24rpx;
		// 	width: calc(100% - 264rpx);
			
		// }
	}
}
</style>
