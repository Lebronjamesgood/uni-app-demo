<template>
	<view class="mine-info">
		<view class="nav-info">
			<uni-nav-bar background-color="none" border="none" status-bar="false" @clickLeft="goBack">
				<view style="text-align: center;width: 100%;">
					个人主页
				</view>
				<view slot="left">
					<u-icon class="jsBack" name="arrow-left" width="54" height="54"></u-icon>
				</view>
				<view slot="right">
				</view>
			</uni-nav-bar>
			<view class="info-status-top">
				<view class="left">
					<view class="top">
						<text class="font-20">白鹤</text>
					</view>
					<view class="bot">
						<text class="font-12 bot-text" style="margin-right: 24rpx;">凤凰县</text>
						<text class="font-12 bot-text">136****7058</text>
					</view>
				</view>
				<view class="right">
					<u-image src="../../../../static/mine/profile-picture.png" width="120" height="120" style="margin-right: 48rpx;"></u-image>
					<u-image src="../../../../static/mine/arrow-right.png" width="18" height="20"></u-image>
				</view>
			</view>
			<view class="info-status-bot">
				<u-grid :col="4" :border="false">
						<u-grid-item>
							<u-image src="../../../../static/mine/shibie.png" width="120" height="120"></u-image>
							<view class="grid-text font-13">人脸认证</view>
						</u-grid-item>
						<u-grid-item>
							<u-image src="../../../../static/mine/bank.png" width="120" height="120"></u-image>
							<view class="grid-text font-13">银行卡认证</view>
						</u-grid-item>
						<u-grid-item>
							<u-image src="../../../../static/mine/zhizhao.png" width="120" height="120"></u-image>
							<view class="grid-text font-13">营业执照普通</view>
						</u-grid-item>
						<u-grid-item>
							<u-image src="../../../../static/mine/zhifaren.png" width="120" height="120"></u-image>
							<view class="grid-text font-13">营业执照法人</view>
						</u-grid-item>
					</u-grid>
			</view>
		</view>
		<view class="content-info">
			<u-cell-group>
				<u-cell-item  title="我的收货地址" arrow-direction="right">
					<u-image slot="icon" src="../../../../static/mine/mine-adress.png" width="104" height="104"></u-image>
				</u-cell-item>
				<u-cell-item  title="账号安全" arrow-direction="right">
					<u-image slot="icon" src="../../../../static/mine/zhanghao.png" width="104" height="104"></u-image>
				</u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
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
/deep/.u-grid-item {
	background: none!important;
}	
/deep/.uni-navbar__content {
	background: none!important;
	border-bottom: none;
}
/deep/ .uni-navbar__header-btns {
	padding: 0 30rpx;
}
/deep/.u-border-bottom:after {
	  border: none;
}
/deep/.u-cell_title {
	margin-left: 32rpx;
}
/deep/.u-cell {
	box-shadow: 0px 0px 20rpx 0px rgba(41,41,41,0.05);
}
/deep/.u-flex {
	padding: 0 30rpx;
}
.nav-info {
	background: url(../../../../static/mine/info-bg.webp) no-repeat;
	background-size: 100% 100%;
	.info-status-top {
		padding: 40rpx 48rpx 17rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.left {
			.bot {
				margin-top: 24rpx;
				.bot-text {
					color: #5B6377;
				}
			}
		}
		.right {
			display: flex;
			justify-content: space-around;
			align-items: center;
		}
	}
	.info-status-bot {
		
	}
}
</style>
