<template>
	<view class="list" :class="from === '爆料'? 'expose-list': ''">
		<view  v-if="from === '爆料'" class="item" v-for="(item, index) of newList" :key="index" @click="goPath(item.id, item, index)">
				<view class="onhand">
					<view class="time" v-if="item.time!==null">{{ item.time }}</view>
					<view class="time" v-else>暂无</view>
					<view class="showStatus" :class="item.status === '待处理' ? 'statusNot' : 'status'">{{item.status}}</view>
					<view class="newsTitle" v-if="item.status === '已处理'">
						<u-button type="primary" plain shape="circle" @click="toEvaluate(item)" >评价</u-button>
					</view>
				</view>
				<image :src="item.img" class="image"></image>
				<view class="title">{{ item.title }}</view>
		</view>
		<view v-if="from === '信息'"  class="item" v-for="(item, index) of newList" :key="index" @click="goPath(item.id, item, index)" :class="from === '信息'? 'change-item': ''">
			<view class="mdzz">
				<view class="details" :class="showDes ? '' : 'notShowDes'">
					<view class="title">{{ item.title }}</view>
				</view>
				<image :src="item.img" class="image"></image>
			</view>
			<view class="details detail-change" :class="showDes ? '' : 'notShowDes'">
				<view class="bottom" v-if="showDes">
					<view class="info">
						<view class="desc info" v-if="item.from!==null">
							<text class="from">{{ item.from }}</text>
							<view class="comment">
								<text>{{ item.comment }}</text>
								评论
							</view>
						</view>
						<view class="desc info" v-else>暂无</view>
					</view>
					<text class="time">{{item.time}}</text>
				</view>
			</view>
		</view>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				required: true,
				default: () => []
			},
			showDes: {
				type: Boolean,
				required: true,
				default: () => true
			},
			from: {
				type: String,
				required: true,
				default: () => ''
			}
		},
		data() {
			return {
			};
		},
		computed: {
		    newList: function() {
		      return this.sortKey(this.list, "time");
		    }
		},
		methods: {
			goPath(id, item, index) {
				if (this.from === '爆料'&&item.status === '已处理') {
					uni.navigateTo({
						url: '/pages/tabBar/serviceCloud/brokeNews/detail/index?item='+ JSON.stringify(item)
					});
				} else if (this.from === '爆料'&&item.status === '待处理'){
					this.$refs.uToast.show({
						title:'待处理',
						type: 'warning'
					});
				}
			},
			sortKey(array, key) {
			    return array.sort(function(a, b) {
			       var x = a[key];
			       var y = b[key];
			       return x > y ? -1 : x < y ? 1 : 0;
			    });
			},
			toEvaluate(item) {
				if (this.from === '爆料') {
					uni.navigateTo({
						url: '/pages/tabBar/serviceCloud/brokeNews/detail/index?item='+ JSON.stringify(item)
					});
				}
			}
		}
	};
</script>

<style lang="less" scoped>
	.list {
		padding: 0px 6rpx;
		background-color: #ffffff;
		.item {
			padding: 32rpx 0rpx;
			padding-bottom: 28rpx;
			box-sizing: border-box;
			min-height: 142rpx;
			background: #ffffff;
			display: flex;
			position: relative;
			border-bottom: solid 1px #F2F2F2;
			/deep/.image {
				width: 240rpx !important;
				height: 180rpx !important;
				margin-left: 24rpx;
				border-radius: 8rpx;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.details {
				flex: 1;
				font-size: 22rpx;
				font-weight: 400;
				color: #868C96;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				overflow: hidden;
				position: relative;
				.bottom {
					display: flex;
					align-items: center;
					height: 36px;
					font-family: SourceHanSansCN, SourceHanSansCN-Normal;
				}
				.title {
					font-size: 32rpx;
					color: #262626;
					text-overflow: -o-ellipsis-lastline;
					overflow: hidden;
					text-overflow: ellipsis;
					-webkit-line-clamp: 2;
					line-clamp: 2;
					-webkit-box-orient: vertical;
					line-height: 48rpx;
					margin-bottom: 60rpx;
					display: inline-block;
					font-family: SourceHanSansCN, SourceHanSansCN-Normal;
					font-weight: 500;
				}
				.comment {
					color: #36383A;
					text-align: right;
					font-size: 24rpx;
					flex: 1;
					uni-text {
						position: relative;
						margin-right: 8rpx;
						color: #36383A;
						font-weight: 500;
						font-family: SourceHanSansCN, SourceHanSansCN-Normal;
						font-size: 24rpx;
						line-height: 36rpx;
					}
					uni-text::after {
						background-color: #206CFE;
						display: block;
						position: absolute;
						left: 2px;
						right: 2px;
						content: '-';
						bottom: -3px;
						color: transparent;
						height: 2px;
					}
				}
				.desc {
					font-size: 26rpx;
					color: #868C96;
					flex: 1;
					word-break: break-word;
					text-overflow: -o-ellipsis-lastline;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 3;
					line-clamp: 3;
					-webkit-box-orient: vertical;
					font-family: SourceHanSansCN, SourceHanSansCN-Normal;
				}
				.time {
					-webkit-line-clamp: initial;
					line-clamp: initial;
					font-family: SourceHanSansCN, SourceHanSansCN-Normal;
				}
				.info {
					display: flex;
					position: relative;
					font-size: 26rpx;
					justify-content: center;
					align-items: center;
					font-family: SourceHanSansCN, SourceHanSansCN-Normal;
					.from {
						text-overflow: -o-ellipsis-lastline;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						line-clamp: 2;
						-webkit-box-orient: vertical;
						width: 120rpx;
						font-size: 26rpx;
						font-family: SourceHanSansCN, SourceHanSansCN-Normal;
					}
					.dot {
						display: block;
						width: 3px;
						height: 3px;
						border-radius: 50px;
						background-color: #868C96;
					}
					.time {
					  flex: 1; 
					  font-size: 26rpx;
					  font-family: SourceHanSansCN, SourceHanSansCN-Normal;
					}
				}
			}
		}
	}
	.notShowDes {
		/deep/.title{
			width: 74%;
		}
	}
	.onhand {
		.time {
			text-align: right;
		}
		.showStatus {
			position: absolute;
			top: 10rpx;
			right: 30rpx;
		}
		.status {
			color: #09A72A;
		}
		.statusNot {
			color: #F02020;
		}
		.newsTitle {
			text-align: right;
			margin-top: 20rpx;
			uni-button {
				height: 60rpx;
				line-height: 60rpx;
				display: inline-block;
			}
		}
	}
	.expose-list {
		background-color: #F5F6F7;
		.onhand {
			display: inline-block;
			width: 100%;
			.time {
				position: absolute;
				top: 20rpx;
				left: 30rpx;
				font-size: 28rpx;
				color: #666666;
				font-family: SourceHanSansCN, SourceHanSansCN-Normal;
			}
			.statusNot {
				// flex: 1;
				font-size: 30rpx;
				color: #FF3B30;
				font-weight: 500;
				font-family: SourceHanSansCN, SourceHanSansCN-Normal;
				top: 20rpx;
				right: 30rpx;
			}
			.status {
				top: 20rpx;
				right: 30rpx;
				color: #558EFB;
				font-weight: 500;
				font-family: SourceHanSansCN, SourceHanSansCN-Normal;
			}
			/deep/uni-button {
				position: absolute;
				bottom: 32rpx;
				right: 30rpx;
				background-color: #C0C0C0;
				width: 164rpx !important;
				height: 56rpx !important;
				line-height: 56rpx;
				color: 28rpx !important;
				color: #333333 !important;
				background-color: #FFFFFF !important;
			}
			/deep/.u-hairline-border:after {
				border: solid 1px #C0C0C0;
			}
			.newsTitle {
				margin-top: 0px;
			}
		}
		.item {
			display: inline-block;
			width: 690rpx;
			box-shadow: 0 0 10rpx rgba(41,41,41,0.05);
			margin: 30rpx 30rpx 0 30rpx;
			border-radius: 20rpx;
			padding: 0px;
			padding: 40rpx 30rpx;
			.image {
				width: 240rpx !important;
				height: 180rpx !important;
				margin-left: 0px;
				margin-right: 24rpx;
			}
			.title {
				font-size: 30rpx;
				color: #333333;
				font-family: SourceHanSansCN, SourceHanSansCN-Normal;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				line-clamp: 2;
				-webkit-box-orient: vertical;
				display: inline-block;
				width: 366rpx;
				vertical-align: top;
			}
		}
	}
	// 01.14改动
	.list {
		/deep/.change-item {
			flex-direction: column;
			position: relative;
			height: 278rpx;
			.mdzz {
				flex: 1;
				display: flex;
			}
			.image {
				width: 240rpx !important;
				height: 140rpx !important;
				border-radius: 0px;
			}
			.detail-change {
				position: absolute;
				bottom: 14rpx;
				width: 100%;
			}
			.details {
				.title {
					margin-bottom: 0px;
					text-overflow: -o-ellipsis-lastline;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 3;
					line-clamp: 3;
					-webkit-box-orient: vertical;
				}
				.time {
					font-size: 24rpx;
					color: #868C96;
				}
				.info {
					flex: 1;
					justify-content: flex-start;
					height: 100%;
					.comment {
						flex: initial;
						uni-text:after {
							background: url("../../../../static/serviceCloud/line_bg.svg") 0px 0px no-repeat;
							background-size: 100% 100%;
						}
					}
					.from {
						width: auto;
						margin-right: 24rpx;
						max-width: 60%;
						-webkit-line-clamp: 1;
						line-clamp: 1;
						font-size: 24rpx;
						color: #868C96;
					}
				}
			}
		}
	}
	
</style>