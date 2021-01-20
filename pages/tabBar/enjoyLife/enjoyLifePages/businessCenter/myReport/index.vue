<template>
	<view>
		<view class="container">
			<view class="content">
				<!-- <image src="../../../../../../static/enjoyLife/icon.svg" mode=""></image> -->
				<view>
					<p>136****7058 的小店</p>
					<span>注册于2020年11月11日</span>
				</view>
			</view>
			<view class="card-item">
				<view class="title">我的收益</view>
				<view class="my-income">
					<view class="my-content">
						<view class="content-item">
							<view class="list-item">
								<image src="../../../../../../static/enjoyLife/total.svg" mode=""></image>
								<view class="words">
									12388.00
									<p>累计收益（￥）</p>
								</view>
							</view>
							<view class="list-item">
								<image src="../../../../../../static/enjoyLife/withdrawable.svg" mode=""></image>
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
			<view>
				<view class="title">经营数据汇总</view>
				<view class="content-data">
					<u-table>
						<u-tr>
							<u-th>
								<text>22</text>
								单
							</u-th>
							<u-th>
								<text>22</text>
								元
							</u-th>
							<u-th>
								<text>22</text>
								次
							</u-th>
						</u-tr>
						<u-tr>
							<u-td>累计完成单</u-td>
							<u-td>累计订单收入</u-td>
							<u-td>累计评价数</u-td>
						</u-tr>
					</u-table>
				</view>
			</view>
			<view>
				<view class="title">服务售卖统计</view>
				<view class="content-data">
					<u-table>
						<u-tr>
							<u-th>
								<text>22</text>
								单
							</u-th>
							<u-th>
								<text>22</text>
								单
							</u-th>
							<u-th>
								<text>22</text>
								单
							</u-th>
						</u-tr>
						<u-tr>
							<u-td>发布服务</u-td>
							<u-td>在售服务</u-td>
							<u-td>未上线服务</u-td>
						</u-tr>
					</u-table>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import lineCharts from '../../../components/lineChart.vue';
export default {
	components: {
		lineCharts
	},
	data() {
		return {};
	},
	mounted() {},
	methods: {}
};
</script>

<style lang="less" scoped>
.content {
	padding: 24rpx;
	display: flex;
	line-height: 48rpx;
	image {
		width: 100rpx;
		height: 100rpx;
		margin-right: 24rpx;
	}
}
.content-data {
	background-color: #ffffff;
	padding: 0rpx;
	box-shadow: 0 0 20rpx rgba(41, 41, 41, 0.05);
	border-radius: 20rpx;
	width: 690rpx;
	height: 148rpx;
	margin: 40rpx auto;
	.u-table {
		border: 0px;
		border-left: 0px !important;
		border-top: 0px !important;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		font-family: SourceHanSansCN, SourceHanSansCN-Normal;
		/deep/.u-tr {
			border: 0px;
			border-left: 0px !important;
			border-top: 0px !important;
		}
		/deep/.u-td {
			border-right: 0px !important;
			border-bottom: 0px !important;
			font-size: 24rpx;
			color: #787878;
			position: relative;
		}
		/deep/.u-th {
			border-right: 0px !important;
			border-bottom: 0px !important;
			background-color: transparent;
			font-size: 24rpx;
			color: #2e2e2e;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: baseline;
			font-weight: initial;
			position: relative;
			uni-text {
				font-size: 36rpx;
				color: #206cfe;
				font-family: SourceHanSansCN, SourceHanSansCN-Normal;
				font-weight: 500;
			}
		}
		.u-th::after {
			background-color: #eeeeee;
			display: block;
			position: absolute;
			right: 0px;
			content: '|';
			top: 30rpx;
			color: transparent;
			width: 1px;
			height: 44rpx;
		}
		.u-th:last-child::after {
			width: 0px;
			height: 0px;
		}
		.u-td::after {
			background-color: #eeeeee;
			display: block;
			position: absolute;
			right: 0px;
			content: '|';
			top: 0rpx;
			color: transparent;
			width: 1px;
			height: 44rpx;
		}
		.u-td:last-child::after {
			width: 0px;
			height: 0px;
		}
	}
}
.title {
	font-size: 36rpx;
	font-weight: 500;
	text-align: left;
	color: #333333;
	line-height: 36rpx;
	// border-left: 6rpx solid #206cfe;
	text-indent: 30rpx;
	padding-top: 30rpx;
	position: relative;
}
.title::before {
	background-color: #206cfe;
	display: block;
	position: absolute;
	left: 0px;
	content: '|';
	top: 30rpx;
	color: transparent;
	width: 3px;
	height: 36rpx;
}
.my-income {
	margin: 40rpx 30rpx;
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
			color: #333333;
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
.container {
	padding: 0px;
	background: linear-gradient(180deg, #ffffff, #f5f6f7);
}
.content {
	background: url('../../../../../../static/enjoyLife/reportBg.svg') center center no-repeat;
	height: 340rpx;
	padding: 0px;
	uni-view {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	p {
		font-size: 36rpx;
		color: #314268;
		font-family: SourceHanSansCN, SourceHanSansCN-Normal;
		line-height: 36rpx;
		margin-bottom: 32rpx;
		font-weight: 500;
	}
	span {
		font-size: 26rpx;
		color: #314268;
		font-family: SourceHanSansCN, SourceHanSansCN-Normal;
		line-height: 40rpx;
	}
}
.card-item {
	background: linear-gradient(180deg, #ffffff, #f5f6f7);
	border-top-left-radius: 40rpx;
	border-top-right-radius: 40rpx;
	margin-top: -66rpx;
	.my-income {
		box-shadow: none;
		border-radius: 0px;
		margin: 0px;
		box-shadow: 0 0 20rpx rgba(41, 41, 41, 0.05);
		border-radius: 20rpx;
		width: 690rpx;
		height: 690rpx;
		margin: 40rpx auto;
	}
}
.line-charts {
	p {
		font-size: 30rpx;
		color: #293653;
	}
}
</style>
