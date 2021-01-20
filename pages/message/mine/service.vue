<template>
	<view class="service">
		<u-navbar :is-back="true" title-size="36" :title="title" :title-color="backColor"  :back-icon-color="backColor"></u-navbar>
		<view class="container">
			<view class="item " v-for="(item, index) in dataList" :key="index">
				<view class=" time">
					<text class="item-time">{{ item.updTime }}</text>
				</view>
				<view class="item-cot" v-if="activeIndex===2">
					<view class="item-header" >
						<view class="item-title">{{ item.title }}</view>
						<view class="item-type">{{ item.type }}</view>
					</view>
					<view class="item-center"><image :src="item.imageUrl" mode=""></image></view>
					<view class="item-footer"  v-if="activeIndex===2">{{ item.content }}</view>
					
				</view>
				
				<view class="item-cot-activity" v-if="activeIndex===1">
					<view class="item-activity-header"><image :src="item.imageUrl" mode=""></image></view>
					<view class="item-activity-content" >
						<view class="item-activity-title">{{ item.title }}</view>
						
						<view class="item-activity-cot">
							<view >
								活动时间：{{item.activityTime}}
							</view>
							<view >
								活动详情：{{item.content}}
							</view>
							
						</view>
						<view class="item-type">{{ item.type }}</view>
					</view>
					
					<view class="item-footer"  v-if="activeIndex===2">{{ item.content }}</view>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import data from '../data.js';
export default {
	data() {
		return {
			activeIndex:0,
			title: '',
			dataList: [],
			backColor:'#333333'
		};
	},
	onLoad: function(option) {
		//option为object类型，会序列化上个页面传递的参数	
		if(option.type==="activity"){
			this.title="活动"
			this.dataList=data.mine_data.activeList
			this.activeIndex=1
		}
		else if(option.type==="service"){
			this.title="服务通知"
			this.dataList=data.mine_data.serviceList
			this.activeIndex=2
		}
	},
	methods:{
	}
};
</script>

<style lang="scss">
.service {
	.container {
		margin: 30rpx;
		.item {
			padding-bottom: 60rpx;
			.time {
				display: flex;
				justify-content: center;
			}
			.item-time {
				background: rgba(232, 232, 232, 0.8);
				border-radius: 20rpx;
				padding: 8rpx 32rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #ffffff;
				line-height: 36rpx;
			}
			.item-cot {
				background: #ffffff;
				box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(41, 41, 41, 0.05);
				padding: 32rpx 30rpx;
				margin-top: 32rpx;
				.item-header {
					display: flex;
					justify-content: space-between;
					padding-bottom: 36rpx;
					.item-title {
						font-size: 28rpx;
						font-weight: 500;
						color: #1d1d1d;
						line-height: 28rpx;
					}
					.item-type {
						background: #206cfe;
						border-radius: 8rpx;
						font-size: 24rpx;
						font-weight: 400;
						color: #ffffff;
						line-height: 36rpx;
						padding: 5rpx 8rpx;
					}
				}
				.item-footer {
					padding-top: 12rpx;
					font-size: 24rpx;
					font-weight: 400;
					color: #585858;
					line-height: 40rpx;
					text-align: justify;
				}
				uni-image {
					width: 630rpx;
					height: 238rpx;
				}
			}
			.item-cot-activity{
				background: #ffffff;
				box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(41, 41, 41, 0.05);
				padding: 32rpx 30rpx;
				margin-top: 32rpx;
				.item-activity-content{
					padding-top: 32rpx;
					.item-activity-title{
						font-size: 28rpx;
						font-weight: 500;
						color: #1d1d1d;
						line-height: 28rpx;
					}
					.item-activity-cot{
						padding-top: 18rpx;
						font-size: 24rpx;
						font-weight: 400;
						text-align: justify;
						color: #585858;
						line-height: 40rpx;
					}
				}
				uni-image {
					width: 630rpx;
					height: 238rpx;
				}
			}
		}
	}
}
</style>
