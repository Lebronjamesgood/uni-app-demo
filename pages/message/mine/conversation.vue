<template>
	<view class="conversation">
		<u-navbar :is-back="true" title-size="36" title="对话" :title-color="backColor"  :back-icon-color="backColor">
			<view class="navbar-right" slot="right" >
				<view class="right-item" ><image src="../../../static/message/email.svg"></image></view>
			</view>
		</u-navbar>

		<view class="talkList">
			<view class="item " v-for="(item, index) in conversationList" :key="index" v-if="conversationList.length > 0">
				<view class="item-left"><image :src="item.imageUrl" mode=""></image></view>
				<view class="item-right">
					<view class="top">
						<view class="item-name">
							{{ item.name }}
							<text class="item-desc">{{ item.dept }}</text>
							<text class="official-banner" v-if="item.name === '我的客服'">官方</text>
						</view>
						<view class="item-upd">{{ timestampFormat(item.updateTime) }}</view>
					</view>
					<view class="content">
						<view class="item-cot">{{ item.lastContent }}</view>
						<view class="item-isActive" v-if="item.isActive && item.isActive > 0">{{ item.activeNum }}</view>
					</view>
				</view>
			</view>
			<view class="empty" v-if="conversationList.length <= 0">
				<view class=""><image src="../../../static/message/empty.png" mode=""></image></view>
				<view class="text">空空如也……</view>
			</view>
		</view>
	</view>
</template>

<script>
import data from '../data.js';
export default {
	data() {
		return {
			conversationList: data.mine_data.infoList,
			backColor:'#333333'
		};
	},
	methods: {
		
		timestampFormat(timestamp) {
			// 补全为13位
			timestamp = timestamp.replace(/-/g, '/');
			var arrTimestamp = (Date.parse(timestamp) + '').split('');
			for (var start = 0; start < 13; start++) {
				if (!arrTimestamp[start]) {
					arrTimestamp[start] = '0';
				}
			}

			timestamp = arrTimestamp.join('') * 1;

			var minute = 1000 * 60;
			var hour = minute * 60;
			var day = hour * 24;
			var month = day * 30;
			var now = new Date().getTime();
			var diffValue = now - timestamp;

			// 如果本地时间反而小于变量时间
			if (diffValue < 0) {
				return '不久前';
			}

			// 计算差异时间的量级
			var monthC = diffValue / month;
			var weekC = diffValue / (7 * day);
			var dayC = diffValue / day;
			var hourC = diffValue / hour;
			var minC = diffValue / minute;

			// 数值补0方法
			var zero = function(value) {
				if (value < 10) {
					return '0' + value;
				}
				return value;
			};

			// 使用
			if (monthC > 12) {
				// 超过1年，直接显示年月日
				return (function() {
					var date = new Date(timestamp);
					return date.getFullYear() + '年' + zero(date.getMonth() + 1) + '月' + zero(date.getDate()) + '日';
				})();
			} else if (monthC >= 1) {
				return parseInt(monthC) + '月前';
			} else if (weekC >= 1) {
				return parseInt(weekC) + '周前';
			} else if (dayC >= 1) {
				return parseInt(dayC) + '天前';
			} else if (hourC >= 1) {
				return parseInt(hourC) + '小时前';
			} else if (minC >= 1) {
				return parseInt(minC) + '分钟前';
			}
			return '刚刚';
		}
	}
};
</script>

<style lang="scss">
.conversation {
	.right-item {
		padding-right: 30rpx;
		uni-image {
			width: 48rpx;
			height: 48rpx;
		}
	}
	.empty {
		margin: 180rpx 110rpx 0 112rpx;
		uni-image {
			width: 528rpx;
			height: 424rpx;
		}
		.text {
			display: flex;
			justify-content: center;
			font-size: 32rpx;
			font-family: SourceHanSansCN, SourceHanSansCN-Regular;
			font-weight: 400;

			color: #aeaeae;
			line-height: 48rpx;
		}
		
	}
	.talkList {
		padding: 31rpx 30rpx;
		.item {
			border-bottom: 1rpx solid #f2f2f2;
			padding: 31rpx 0;
			display: flex;
			uni-image {
				width: 120rpx;
				height: 120rpx;
				border-radius: 50%;
			}
			.item-left {
				padding-right: 31rpx;
			}
			.item-right {
				width: calc(100% - 151rpx);
				.top,
				.content {
					display: flex;
				}
				.top {
					.item-name {
						width: calc(100% - 114rpx);
						font-size: 32rpx;
						font-weight: 500;
						text-align: left;
						color: #000000;
						line-height: 48rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						.item-desc {
							font-size: 24rpx;
							font-weight: 400;
							text-align: left;
							color: #626262;
							line-height: 36rpx;
							padding-left: 16rpx;
						}
						.official-banner {
							padding: 0 6rpx;
							background: #206cfe;
							border-radius: 8rpx;
							font-size: 24rpx;
							font-weight: 400;
							color: #ffffff;
							line-height: 36rpx;
						}
					}
					.item-upd {
						font-size: 24rpx;
						font-weight: 400;
						text-align: right;
						color: #bbbbbb;
						line-height: 48rpx;
						position: fixed;
						right: 30rpx;
					}
				}

				.content {
					padding-top: 18rpx;
					.item-cot {
						width: calc(100% - 114rpx);
						font-size: 28rpx;
						font-weight: 400;
						text-align: left;
						color: #909090;
						line-height: 42rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.item-isActive {
						position: fixed;
						right: 30rpx;
						width: 30rpx;
						height: 30rpx;
						background: #ff3b30;
						border-radius: 50%;
						font-size: 24rpx;
						font-weight: 400;
						text-align: center;
						color: #ffffff;
						line-height: 30rpx;
					}
				}
			}
		}
	}
}
</style>
