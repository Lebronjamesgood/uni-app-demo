<template>
	<view class="order-type">
		<view class="container">
			<view class="content">
				<view class="title">接单类型</view>
				<view style="display: flex;">
					<view class="content-item" v-for="(item, index) in list" :key="index" @click="onCheck(item, index)">
						<p :class="{ active: index == n }">{{ item.type }}</p>
					</view>
				</view>
				<view class="remarks" v-if="n === 0">注：提前预约，您支持用户最早预约几小时后的服务。</view>
				<view class="remarks" v-if="n === 1">注：马上服务，订单需在接单后30分钟内提供服务，如有超时需承担客户投诉责任。</view>
			</view>
			<view class="describe" v-if="n === 0">
				<p>提前预约</p>
				<view @click="show = true" class="num">
					<p v-if="num">{{ time }}</p>
					<span v-else>请选择</span>
					<u-icon name="arrow-right" color="#c3cbcf" size="20"></u-icon>
				</view>
			</view>
			<u-select v-model="show" mode="mutil-column" :list="listOption" @confirm="confirm"></u-select>
			<!-- <p class="remarks remarks1" v-if="n === 0">注：您支持用户最早预约几小时后的服务</p> -->
			<view class="describe">
				<p>单笔起购数量（可选）</p>
				<view @click="show1 = true" class="num">
					<p v-if="num">{{ num }}</p>
					<span v-else>请选择</span>
					<u-icon name="arrow-right" color="#c3cbcf" size="20"></u-icon>
				</view>
			</view>
			<!-- <p class="remarks remarks1">注：用户下单时至少购买几份？（几份起售）</p> -->
			<u-select v-model="show1" mode="single-column" :list="listNum" @confirm="confirm1"></u-select>
		</view>
		<view class="btn-services"><u-button class="publish-services" @click="goPath()">保存</u-button></view>
	</view>
</template>

<script>
import data from '../../../../data.js';
export default {
	components: {},
	data() {
		return {
			list: [{ type: '提前预约', name: 0 }, { type: '马上服务', name: 1 }],
			n: 0,
			time: '1小时00分',
			show: false,
			listOption: [],
			num: 1,
			show1: false,
			listNum: [{ value: '1', label: 1 }, { value: '2', label: 2 }, { value: '3', label: 3 }]
		};
	},
	mounted() {
		this.listOption = data.businessCenter.myServices.listOption;
	},
	methods: {
		onCheck(item, index) {
			this.n = index;
		},
		confirm(e) {
			this.time = e[0].label + e[1].label;
		},
		confirm1(e) {
			this.num = e[0].label;
		},
		goPath() {
			uni.navigateTo({
				url: '/pages/tabBar/enjoyLife/enjoyLifePages/businessCenter/myServices/personServices/publishServices'
			});
		}
	}
};
</script>

<style lang="less" scoped>
.order-type {
	background-color: #f1f1f1;
	height: 100%;
	overflow: auto;
}
.container {
	margin: 30rpx;
	background: #ffffff;
	border-radius: 20rpx;
	padding: 30rpx 30rpx 10rpx;
	.title {
		font-size: 30rpx;
		font-weight: 500;
		color: #333333;
		line-height: 46rpx;
	}
	.content {
		padding-bottom: 30rpx;
		.content-item {
			margin-top: 24rpx;
			margin-right: 48rpx;
			background: url(../../../../../../../static/enjoyLife/select.svg) no-repeat;
			background-size: 42rpx 44rpx;
			background-position: 100% 28rpx;
		}
		p,
		.active {
			width: 184rpx;
			height: 64rpx;
			background: #ffffff;
			border: 1rpx solid #e3e3e3;
			border-radius: 8rpx;
			font-size: 30rpx;
			text-align: center;
			color: #333333;
			line-height: 64rpx;
		}
		.active {
			background: rgba(32, 108, 254, 0.1);
			border: 1rpx solid #206cfe;
			color: #206cfe;
		}
	}
	.describe {
		display: flex;
		justify-content: space-between;
		padding: 30rpx;
		border-top: 1rpx solid #ededed;
		p {
			font-weight: 500;
			color: #000000;
			span {
				margin-left: 12rpx;
			}
		}
		span {
			font-size: 24rpx;
			color: #999999;
		}
		.num {
			display: flex;
			p {
				margin-right: 14rpx;
			}
			span {
				margin-right: 14rpx;
				color: #999999;
			}
		}
	}
	.remarks {
		font-size: 24rpx;
		color: #777777;
		line-height: 36rpx;
		margin-top: 20rpx;
	}
	.remarks1 {
		text-indent: 30rpx;
		margin-top: 0;
	}
}
/deep/ .u-btn {
	width: 690rpx;
	height: 88rpx;
	background: #206cfe;
	border-radius: 44rpx;
	position: fixed;
	bottom: 20rpx;
	left: 30rpx;
	right: 30rpx;
	color: #ffffff;
}
.btn-services {
	background-color: #ffffff;
	width: 100%;
	height: 128rpx;
	z-index: 999;
	position: fixed;
	bottom: 0;
}
</style>
