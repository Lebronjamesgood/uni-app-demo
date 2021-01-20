<template>
	<view class="order-page">
		<view class="list-wrap">
			<view class="title">
				<text class="name">订单信息</text>
				<text class="cancel" :class="type == '待服务' ? 'service' : type == '已完成' ? 'complete' : ''">{{ type }}</text>
			</view>
			<view class="list-cell">
				<view class="order-li">
					<view class="name"><text>订单编号</text></view>
					<view class="value"><text>21347829375493</text></view>
				</view>
				<view class="order-li">
					<view class="name"><text>下单时间</text></view>
					<view class="value"><text>2020-09-08 12：00</text></view>
				</view>
				<view class="order-li">
					<view class="name"><text>订单金额</text></view>
					<view class="value price"><text>￥300.00</text></view>
				</view>
			</view>
		</view>
		<view class="list-wrap">
			<view class="title">
				<text class="name">预约信息</text>
				<!-- <text class="cancel">已取消</text> -->
			</view>
			<view class="list-cell">
				<view class="order-li">
					<view class="name"><text>服务类型</text></view>
					<view class="value"><text>家教服务</text></view>
				</view>
				<view class="order-li">
					<view class="name"><text>订单量</text></view>
					<view class="value"><text>22</text></view>
				</view>
				<view class="order-li">
					<view class="name"><text>服务地址</text></view>
					<view class="value"><text>凤凰城碧桂园</text></view>
				</view>
				<view class="order-li">
					<view class="name"><text>服务时间</text></view>
					<view class="value price"><text>2020-02-02 12:02:09</text></view>
				</view>
			</view>
		</view>
		<view class="list-wrap">
			<view class="title">
				<text class="name">客户信息</text>
				<!-- <text class="cancel">已取消</text> -->
			</view>
			<view class="list-cell">
				<view class="order-li">
					<view class="name"><text>预订</text></view>
					<view class="value"><text>徐文禄</text></view>
				</view>
				<view class="order-li">
					<view class="name"><text>手机号码</text></view>
					<view class="value"><text>1370989003</text></view>
				</view>
				<view class="order-li">
					<view class="name"><text>身份证号</text></view>
					<view class="value"><text>6447679130990</text></view>
				</view>
			</view>
		</view>
		<view class="list-wrap">
			<view class="title">
				<text class="name">取消信息</text>
				<!-- <text class="cancel">已取消</text> -->
			</view>
			<view class="list-cell">
				<view class="order-li">
					<view class="name"><text>取消方式</text></view>
					<view class="value"><text>后台/用户取消</text></view>
				</view>
				<view class="order-li">
					<view class="name"><text>取消时间</text></view>
					<view class="value"><text>2020-09-08 12:00:00</text></view>
				</view>
			</view>
		</view>
		<view class="btn-s" v-if="type == '待服务'">
			<view class="btn-part"><u-button :plain="false" :custom-style="customStyleServe" shape="circle">取消服务</u-button></view>
			<view class="btn-part"><u-button type="primary" shape="circle" :custom-style="customStyleServe">确认服务</u-button></view>
		</view>
		<view class="btn-s" v-if="type == '待确认'">
			<view class="btn-part"><u-button :plain="false" :custom-style="customStyle" shape="circle">拒绝</u-button></view>
			<view class="btn-part"><u-button :plain="false" :custom-style="customStyle" shape="circle">取消订单</u-button></view>
			<view class="btn-part"><u-button type="primary" shape="circle" :custom-style="confirmCustomStyle">确认订单</u-button></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			type: '',
			customStyleServe: {
				width: '165px', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
				color: '#999'
			},
			customStyle: {
				width: '98px', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
				color: '#999'
			},
			confirmCustomStyle: {
				width: '120px',
				background: '#206cfe',
				color: '#ffffff'
			}
		};
	},
	onLoad(data) {
		this.type = data.type;
	},
	methods: {}
};
</script>

<style lang="less">
page {
	background: #f5f6f7;
}
.order-page {
	.list-wrap {
		margin: 30rpx;
		padding: 40rpx 30rpx;
		background-color: #ffffff;
		border-radius: 20rpx;
		box-shadow: 0px 0px 20rpx 0px rgba(41, 41, 41, 0);
		.title {
			display: flex;
			padding-bottom: 40rpx;
			justify-content: space-between;
			border-bottom: 1px solid #e4e4e4;
			margin-bottom: 20rpx;
			.name {
				color: #333333;
				font-size: 28rpx;
				font-weight: 600;
				font-family: SourceHanSansCN, SourceHanSansCN-Mediu;
			}
			.cancel {
				font-size: 28rpx;
				color: #ff3b30;
			}
			.service {
				color: #206cfe;
			}
			.complete {
				color: #999999;
			}
		}
		.list-cell {
			margin-top: ;
			.order-li {
				display: flex;
				padding: 10rpx 0;
				justify-content: space-between;
				.name {
					text {
						color: #666;
						font-size: 28rpx;
					}
				}
				.value {
					text {
						font-size: 28rpx;
						color: #333333;
					}
				}
				.price {
					text {
						color: #ff3b30;
					}
				}
			}
		}
	}
	.btn-s {
		// width: 176rpx;
		display: flex;
		justify-content: center;
		uni-button {
			height: 88rpx;
			// border-radius: 32rpx;
			margin: 14rpx;
		}
	}
}
</style>
