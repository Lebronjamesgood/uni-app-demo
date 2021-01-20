<template>
	<view>
		<view class="order-card">
			<view class="card-list">
				<view class="card-li" v-for="(item, index) in dataList.goodsList" :key="index" @click="toDetail(item.status)">
					<view class="card-title">
						<text class="order-time">{{ item.orderTime }}</text>
						<text class="order-status" :class="item.status == '待服务' ? 'service' : item.status == '已完成' ? 'complete' : ''">{{ item.status }}</text>
					</view>
					<view class="main">
						<view class="order-img">
							<u-image
								border-radius="12"
								src="../../../../static/enjoyLife/card.png"
								style="width: 240rpx;
							height: 180rpx;"
							></u-image>
						</view>
						<view class="order-detail">
							<view class="order-wrap">
								<text class="order-desc">{{ item.desc }}</text>
								<view>
									<text class="service-type">{{ item.serviceType }}</text>
								</view>
							</view>
							<view class="order-integral">
								<text class="integral">￥{{ item.integral.toFixed(2) }}</text>
								<text class="account">x{{ item.account }}</text>
							</view>
						</view>
					</view>
					<view class="total">
						<text class="total-account">订单编号</text>
						<text class="order-code">{{ item.code }}</text>
					</view>
					<view class="total">
						<text class="total-account">订单金额</text>
						<text class="total-integral">￥{{ item.total.toFixed(2) }}</text>
					</view>
					<view class="btn">
						<view></view>
						<view class="btn-s" v-if="item.status == '待确认'">
							<view class="btn-part"><u-button @click="refesueOrder" :plain="false" style="color: #999;" shape="circle">拒绝</u-button></view>
							<view class="btn-part"><u-button :plain="false" style="color: #999;" shape="circle">取消订单</u-button></view>
							<view class="btn-part"><u-button @click="confirmOrder" :plain="false" style="color:#ff3b30;" shape="circle">确认订单</u-button></view>
						</view>
						<view class="btn-s" v-if="item.status == '待服务'">
							<view class="btn-part"><u-button :plain="false" style="color: #999;" shape="circle">取消服务</u-button></view>
							<view class="btn-part"><u-button @click="toDetail(item.status)" :plain="false" style="color: #999;" shape="circle">查看详情</u-button></view>
						</view>
						<view class="btn-s" v-if="item.status == '已完成'">
							<view class="btn-part"> <u-button @click="toDetail(item.status)"  :plain="false" style="color: #999;" shape="circle">查看详情</u-button></view>
						</view>
					</view>
				</view>
			</view>
			<u-modal v-model="show" :show-cancel-button="false" @confirm="confirm" :content="content"></u-modal>
			<u-modal v-model="refesueShow" :show-cancel-button="true">
				<view class="slot-content"><u-input type="textarea" height="240" :auto-height="true" v-model="value" placeholder="必填,请输入理由" /></view>
			</u-modal>
		</view>
	</view>
</template>

<script>
export default {
	name: 'UniNavBar',
	props: {
		dataList: {
			type: Object,
			required: true,
			default: () => {}
		}
	},
	data() {
		return {
			show: false,
			refesueShow: false,
			content: '您已了解订单信息及服务时间，确认订单？',
			value: '',
			height: 200
		};
	},
	methods: {
		// 输入拒绝理由确认
		confirm() {
			if (this.value != '') {
			} else {
				this.refesueShow = false;
			}
		},
		//拒绝订单
		refesueOrder() {
			this.refesueShow = true;
		},
		//确认订单
		confirmOrder() {
			this.show = true;
		},
		toDetail(type) {
			uni.navigateTo({
				url: './orderDetail?type=' + type
			});
		}
		// scroll-view到底部加载更多
	}
};
</script>

<style lang="less" scoped>
.order-card {
	.u-input {
		background: #f8f8f8;
		padding: 20rpx !important;
		margin: 40rpx;
	}
	.card-list {
		.card-li {
			padding: 40rpx 30rpx 30rpx;
			background-color: #ffffff;
			margin: 30rpx;
			border-radius: 20rpx;
			box-shadow: 0px 0px 12rpx 0px rgba(60, 61, 68, 0.09);
			.card-title {
				display: flex;
				justify-content: space-between;
				height: 28rpx;
				line-height: 42rpx;
				.order-time {
					font-size: 28rpx;
					color: #666666;
				}
				.order-status {
					color: #ff3b30;
					font-size: 30rpx;
				}
				.service {
					color: #206cfe;
				}
				.complete {
					color: #999999;
				}
			}
			.main {
				display: flex;
				margin-top: 28rpx;
				.order-img {
					margin-right: 24rpx;
					image {
						width: 240rpx;
						height: 180rpx;
						border-radius: 12rpx;
					}
				}
				.order-detail {
					display: flex;
					flex-direction: column;
					padding-bottom: 18rpx;
					justify-content: space-between;
					.order-integral {
						height: 36rpx;
						.account {
							font-size: 24rpx;
						}
					}
					.order-wrap {
						display: flex;
						flex-direction: column;
						.order-desc {
							width: 366rpx;

							font-weight: 500;
							font-size: 30rpx;
							color: #333333;
							line-height: 24px;
						}
						.service-type {
							margin-top: 20rpx;
							background: #ffffff;
							border: 1px solid #206cfe;
							border-radius: 4px;
							font-size: 24rpx;
							color: #206cfe;
							padding: 7rpx 10rpx;
							line-height: 64rpx;
						}
					}
					.order-integral {
						display: flex;
						justify-content: space-between;
					}
				}
			}
			.total {
				margin: 8rpx 0;
				padding-left: 148rpx;
				display: flex;
				justify-content: space-between;
				.total-integral {
					color: #ff3b30;
					font-weight: 700;
					font-size: 28rpx;
				}
				.order-code {
					color: #333333;
					font-size: 24rpx;
				}
				.total-account {
					font-size: 24rpx;
					color: #333333;
				}
			}
			.btn {
				display: flex;
				justify-content: space-between;
				.btn-s {
					display: flex;
					justify-content: right;
					.btn-part {
						margin-left: 20rpx;
					}
					uni-button {
						width: 176rpx;
						height: 64rpx;
						border-radius: 32rpx;
					}
				}
			}
		}
	}
}
</style>
