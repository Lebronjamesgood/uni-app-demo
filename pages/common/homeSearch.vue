<template>
	<view>
		<u-navbar :is-back="true" :title-bold="true">
			<view class="slot-wrap">
				<view class="search-wrap">
					<!-- 如果使用u-search组件，必须要给v-model绑定一个变量 -->
					<u-search search-icon-color="#c0c0c0" bg-color="#f6f7f9" placeholder-color="#c0c0c0" action-style="searchStyle" :show-action="showAction" placeholder="输入查询内容" height="56" :action-style="{ color: '#000' }"></u-search>
				</view>
			</view>
		</u-navbar>

		<view class="hot-search">
			<view class="title">
				<view class="title-history">
					<!-- <view class="image-history"><image src="../../static/serach/history.png" mode="" /></view> -->
					<text>历史搜索</text>
				</view>
				<view class="title-history" @click="clearHistory">
					<view class="image-history"><image src="../../static/serach/clear.png" mode="" /></view>
				</view>
			</view>
			<view class="hot-search-content">
				<view class="txt" v-show="dataFlag" v-for="(item,index) in serachList" :key="index">{{ item }}</view>
				<view class="hot-txt" v-show="!dataFlag"><u-empty text="暂无历史搜索" mode="history"></u-empty></view>
			</view>
		</view>
		<view class="hot-search">
			<view class="title-hot">
				<!-- <view class="image-history"><image src="../../static/serach/hot.png" mode="" /></view> -->
				<text>热门搜索</text>
			</view>
			<view class="hot-search-content">
				<!-- <view class="hot-txt"><u-empty text="暂无历史搜索" mode="history"></u-empty></view> -->
				<view class="txt" v-show="dataFlag" v-for="(item,index) in serachList" :key="index">{{ item }}</view>
				<view class="hot-txt" v-show="!dataFlag"><u-empty text="暂无热门搜索记录" mode="history"></u-empty></view>
			</view>
		</view>
		<u-modal v-model="show" :show-cancel-button="true" @confirm="confirm" :content="content"></u-modal>
	</view>
</template>

<script>
export default {
	data() {
		return {
			showAction:true,
			dataFlag:true,
			show:false,
			searchStyle:{
				color:"#333333"
			},
			content: '确定要清除当前历史及记录吗？',
			serachList: ['凤凰猕猴桃', '古城美景', '风景古城']
		};
	},
	methods: {
		confirm(){
			this.dataFlag = false;
		},
		clearHistory(){
			this.show = true;
		},
		backHistory() {
			uni.navigateBack();
		}
	}
};
</script>

<style lang="scss">
/deep/.uni-navbar__header-btns {
	/deep/ .u-content {
		border-radius: 60rpx !important;
	}
	.u-input {
		width: 400rpx;
	}
}
.left {
	display: flex;
	align-items: center;
}
/deep/ .uni-navbar__header-btns-left {
	margin-right: 0;
	width: 400rpx;
}
/deep/ .uni-navbar__header-container {
	flex: inherit;
}
.hot-search {
	margin: 40rpx;
	.title {
		display: flex;
		justify-content: space-between;
		.title-history {
			display: flex;
			align-items: center;
			margin-bottom: 20rpx;
			text {
				font-size: 36rpx;
				color: #333333;
				font-weight: 500;
			}
			.image-history {
				width: 40rpx;
				height: 40rpx;
			}
		}
	}
	.title-hot {
		display: flex;
		align-items: center;
		margin-bottom: 20rpx;
		text {
			font-size: 36rpx;
			color: #333333;
			font-weight: 500;;
		}
		.image-history {
			width: 30rpx;
			height: 30rpx;
			margin-right: 20rpx;
		}
	}
	.hot-search-content {
		background: #ffffff;
		display: flex;
		
		.hot-txt {
			width: 100%;
		}
		.txt {
			background: #eeeff2;
			margin: 20rpx 32rpx 20rpx 0;
			padding: 16rpx 14rpx;
			height: 52rpx;
			border-radius: 8rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 24rpx;
		}
	}
}
.slot-wrap {
		display: flex;
		align-items: center;
		flex: 1;
	}
.search-wrap {
		margin: 0 20rpx;
		flex: 1;
	}
</style>
