<template>
	<view>
		<u-navbar :is-back="true" title="商家中心" title-color="#333333" title-size="36">
			<view class="slot-wrap" slot="right">
				<image src="../../../../../static/enjoyLife/center-msg.svg" mode=""></image>
				<u-badge type="error" count="3"></u-badge>
			</view>
		</u-navbar>
		<view class="container">
			<view class="top">
				<view class="general-term">小瓶子科技有限公司</view>
				<view class="contact">陈*平 136****7058</view>
				<view class="person">
					个人版
					<uni-icons type="arrowright" color="#647eba" size="12"></uni-icons>
				</view>
				<view class="num">
					<view class="line">
						2000.00
						<p>今日交易额</p>
					</view>
					<view>
						1
						<p>今日订单</p>
					</view>
				</view>
			</view>
			<view class="District-service"><district :districtList="servicelist" :heightSize="120" :widthSize="120"></district></view>
			<view class="title">我的收益</view>
			<view class="my-income">
				<view class="content">
					<view class="content-item">
						<view class="list-item">
							<image src="../../../../../static/enjoyLife/total.svg" mode=""></image>
							<view class="words">
								12388.00
								<p>累计收益（￥）</p>
							</view>
						</view>
						<view class="list-item">
							<image src="../../../../../static/enjoyLife/withdrawable.svg" mode=""></image>
							<view class="words">
								2388.00
								<p>可提现金额（￥）</p>
							</view>
						</view>
					</view>
					<view class="line-charts">
						<p>本周收益趋势</p>
						<line-charts></line-charts>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import data from '../../data.js';
import lineCharts from '../../components/lineChart.vue';
export default {
	components: {
		lineCharts
	},
	data() {
		return {
			servicelist: []
		};
	},
	mounted() {
		this.servicelist = data.businessCenter.servicelist;
	},
	methods: {
		back() {
			uni.navigateBack({
				delta: 1
			});
		},
		goPath(path) {
			if (path) {
				uni.navigateTo({
					url: path
				});
			} else {
				uni.showToast({
					title: '暂未开发,敬请期待……',
					icon: 'none'
				});
			}
		}
	}
};
</script>

<style lang="less" scoped>
.slot-wrap {
	padding-right: 30rpx;
	image {
		width: 48rpx;
		height: 48rpx;
		vertical-align: middle;
	}
}
.container {
	background-color: #ffffff;
}
.top {
	width: 100%;
	height: 364rpx;
	padding: 12rpx 0;
	background: url(../../../../../static/enjoyLife/center-top.png) no-repeat;
	background-size: 100% 100%;
	color: #314268;
}
.general-term {
	font-size: 36rpx;
	font-weight: 700;
	text-align: center;
	color: #314268;
	line-height: 54rpx;
	margin-top: 40rpx;
}
.contact {
	font-size: 26rpx;
	text-align: center;
	color: #475b88;
	line-height: 50rpx;
}
.person {
	width: 136rpx;
	height: 48rpx;
	background: #abbfef;
	border-radius: 26rpx 0 0 26rpx;
	font-size: 24rpx;
	color: #647eba;
	text-indent: 24rpx;
	line-height: 48rpx;
	float: right;
	position: relative;
	top: -100rpx;
}
.num {
	display: flex;
	font-size: 32rpx;
	text-align: center;
	margin-top: 50rpx;
}
.line {
	border-right: 1rpx solid #bac8e8;
}
.num view {
	width: 50%;
}
.num p {
	margin: 10rpx auto;
	font-size: 26rpx;
}
.District-service {
	padding: 10rpx 0;
	background: #ffffff;
	position: relative;
	top: -36rpx;
	border-radius: 40rpx;
}
.title {
	font-size: 36rpx;
	font-weight: 500;
	text-align: left;
	color: #333333;
	line-height: 36rpx;
	border-left: 6rpx solid #206cfe;
	text-indent: 24rpx;
}
.my-income {
	padding: 0 30rpx;
}
.content {
	margin: 40rpx 0;
	background: #ffffff;
	border-radius: 20px;
	box-shadow: 0px 0px 20px 0px rgba(41, 41, 41, 0.05);
}
.content-item {
	display: flex;
	padding: 26rpx 16rpx;
	image {
		width: 112rpx;
		height: 112rpx;
		vertical-align: middle;
	}
	.list-item {
		width: 50%;
		display: flex;
	}
	.words {
		font-size: 34rpx;
		font-weight: 500;
		text-align: left;
		color: #333333;
		line-height: 62rpx;
		p {
			font-size: 24rpx;
			font-weight: 400;
			line-height: 36rpx;
		}
	}
}
.line-charts p {
	font-size: 30rpx;
	font-weight: 500;
	text-align: left;
	color: #293653;
	line-height: 48rpx;
	text-indent: 30rpx;
}
</style>
