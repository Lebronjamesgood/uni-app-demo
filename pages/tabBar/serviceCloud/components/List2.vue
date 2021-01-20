<template>
	<view class="expose-list">
		<view class="expose-item"  v-for="(item, index) of list" :key="index" @click="goPath(item.id, item, index)">
			<view class="status" v-if="item.status!==null">{{ item.status }}</view>
			<image :src="item.img" mode=""></image>
			<view class="right-info">
				<view class="title">{{item.title}}</view>
				<view class="desc">
					<text class="from">{{item.from}}·</text>
					<text class="time">{{item.time}}</text>
				</view>
				<view class="isTaskLike">
					<view class="info">
						<image src="../../../../static/serviceCloud/comm-mini.svg"/>
						<view class="txt">{{item.comment}}</view>
					</view>
					<view class="info" @click.stop="isTaskLike(index)" >
						<image src="../../../../static/serviceCloud/like-mini.svg" v-if="!item.isThumb"/>
						<image src="../../../../static/serviceCloud/like-mini-cur.svg" v-else/>
						<view class="txt">{{item.like}}+</view>
					</view>
				</view>
			</view>
		</view>
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
			from: {
				type: Number,
				required: true,
				default: () => 0
			},
			offset: {
				type: Number,
				required: true,
				default: () => 0
			},
			isExpose: {
				type: Boolean,
				required: true,
				default: () => false
			}
		},
		data() {
			return {
			};
		},
		onShow() {
			console.log(this.isExpose)
		},
		methods: {
			goPath(id, item, index) {
				uni.navigateTo({
					url: '/pages/tabBar/serviceCloud/expose/detail/index?item='+ JSON.stringify(item)
				});
			},
			isTaskLike(index) {
				if (this.list[index].isThumb) {
					this.list[index].isThumb = false
					this.list[index].like = Number(this.list[index].like) - 1
				} else {
					this.list[index].isThumb = true
					this.list[index].like = Number(this.list[index].like) + 1
				}
			}
		}
	};
</script>

<style lang="less" scoped>
	.expose-list {
		padding-left: 30rpx;
		padding-right: 30rpx;
	}
	.expose-item {
		display: flex;
		padding-top: 30rpx;
		padding-bottom: 30rpx;
		border-bottom: solid 1px #F2F2F2;
		position: relative;
		.status {
			position: absolute;
			background-color: #558EFB;
			border-top-left-radius: 12rpx;
			border-bottom-right-radius: 12rpx;
			width: 88rpx;
			height: 40rpx;
			text-align: center;
			line-height: 40rpx;
			z-index: 2;
			color: #FFFFFF;
			font-size: 24rpx;
		}
		uni-image {
			width: 240rpx;
			height: 180rpx;
			margin-right: 24rpx;
			border-radius: 12rpx;
		}
		.right-info {
			flex: 1;
			.title {
				font-size: 30rpx;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				line-clamp: 1;
				-webkit-box-orient: vertical;
				color: #333333;
				font-family: SourceHanSansCN, SourceHanSansCN-Normal;
				line-height: 46rpx;
				margin-bottom: 42rpx;
				font-weight: 500;
			}
			.desc {
				display: flex;
				font-size: 26rpx;
				color: #868C96;
				font-family: SourceHanSansCN, SourceHanSansCN-Normal;
				.from {
					font-size: 26rpx;
				}
				.time {
					font-size: 26rpx;
				}
			}
			.isTaskLike {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 28rpx;
				line-height: 36rpx;
				justify-content: flex-start;
				.info {
					// flex: 1;
					text-align: center;
					flex-direction: row;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					width: 130rpx;
					.txt {
						font-size: 24rpx;
						color: #868C96;
						font-family: SourceHanSansCN, SourceHanSansCN-Normal;
					}
				}
				uni-image {
					width: 30rpx;
					height: 30rpx;
					margin-right: 0px;
				}
			}
		}
	}
	.expose-item:last-child {
		// border-bottom: 0px;
	}
</style>
