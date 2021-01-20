<template>
	<view class="transport-services">
		<nav-bar :isBack="true" title="找师傅" searchMargin="0 0 0 32rpx"></nav-bar>
		<u-swiper height="280" :list="info" border-radius="0"></u-swiper>
		<district :districtList="listmaster" :heightSize="56" :widthSize="56"></district>
		<view>
			<view class="title"><view class="words">到家精选</view></view>
			<view class="goods">
				<view class="goods-item" v-for="(item, index) in homeselect" :key="index"><image :src="item" mode=""></image></view>
			</view>
		</view>
		<view class="selected-reco">
			<view class="title"><view class="words">精选推荐</view></view>
			<view class="container">
				<v-tabs
					v-model="index"
					auto
					:tabs="tabObjectList"
					@change="objectChange"
					lineColor="#206CFE"
					activeColor="#206CFE"
					color="#333333"
					height="48px"
					fontSize="30rpx"
					activeFontSize="30rpx"
					:lineScale="0.2"
				></v-tabs>
				<!-- <view class="tabs">
					<view class="tab-text" v-for="(item, index) in tabObjectList" :key="index">
						<text class="tab-text-txt" :class="activeIndex == index ? 'active' : ''">{{ item}}</text>
						<view class="active-line" v-show="index == activeIndex"></view>
					</view>
				</view> -->
				<view class="recommend">
					<view class="reco" v-for="(item, index) in totallist" :key="index">
						<view class="reco-item">
							<image :src="item.imgUrl"></image>
							<view>{{ item.content }}</view>
							<p>
								<image src="../../../../static/enjoyLife/lookingMaster/money-icon.png" mode=""></image>
								{{ item.num }}
								<span>{{ item.integral }}</span>
							</p>
						</view>
					</view>
				</view>
				<view class="is-empty" v-if="empty">
					<image src="../../../../static/enjoyLife/empty.png" mode=""></image>
					<span>暂无数据~</span>
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
			activeIndex: 0,
			listmaster: [],
			info: [],
			homeselect: [],
			index: 0,
			tabObjectList: ['全部', '保洁清洗', '家电维修', '管道疏通', '房屋维修'],
			totallist: [],
			empty: false
		};
	},
	mounted() {
		this.listmaster = data.lookingMaster.listmaster;
		this.info = data.lookingMaster.info;
		this.homeselect = data.lookingMaster.homeselect;
		const list1 = data.lookingMaster.selectedrecommend.list1;
		const list2 = data.lookingMaster.selectedrecommend.list2;
		const list3 = data.lookingMaster.selectedrecommend.list3;
		const list4 = data.lookingMaster.selectedrecommend.list4;
		this.totallist = list1.concat(list2, list3, list4);
	},
	methods: {
		objectChange(index) {
			this.totallist = [];
			this.empty = false;
			const list1 = data.lookingMaster.selectedrecommend.list1;
			const list2 = data.lookingMaster.selectedrecommend.list2;
			const list3 = data.lookingMaster.selectedrecommend.list3;
			const list4 = data.lookingMaster.selectedrecommend.list4;
			if (index === '0' || index === 0) {
				this.totallist = list1.concat(list2, list3, list4);
			}
			if (index === '1' || index === 1) {
				this.totallist = list1;
			}
			if (index === '2' || index === 2) {
				this.totallist = list2;
			}
			if (index === '3' || index === 3) {
				this.totallist = list3;
			}
			if (index === '4' || index === 4) {
				this.totallist = list4;
			}
			if (this.totallist.length === 0) {
				this.empty = true;
			}
		}
	}
};
</script>
<style lang="scss" scoped>
.transport-services {
	background-color: #ffffff;
}
.District-service {
	background-color: #f1f1f1f1;
}
.title {
	// width: 100%;
	// height: 100rpx;

	// font-size: 36rpx;
	// font-weight: 500;
	// text-align: left;
	// color: #333333;
	// line-height: 54px;
	// background-color: #f1f1f1f1;
	// margin: 24rpx auto;/

	margin-top: 40rpx;
	margin-bottom: 40rpx;
}
.words {
	// width: 144rpx;
	// height: 36rpx;
	font-size: 36rpx;
	font-family: SourceHanSansCN, SourceHanSansCN-Medium;
	font-weight: 500;
	text-align: left;
	color: #333333;
	line-height: 54rpx;
	background: #ffffff;
	margin-left: 30rpx;
}

.tabs {
	display: flex;
	padding: 32rpx 50rpx;
	background-color: #ffffff;
	height: 96rpx;
	.tab-text {
		margin-right: 164rpx;
		line-height: 32rpx;
		.tab-text-txt {
			color: #333333;
			font-size: 30rpx;
		}
	}
	.active {
		color: #206cfe !important;
	}
	.active-line {
		
		background: url(../../../../static/enjoyLife/line.svg);
		background-size: 100%;
		height: 8rpx;
		width: 48rpx;
		margin: 16rpx auto 8rpx;
	}
}
.goods {
	display: flex;
	justify-content: space-around;
	margin: 15px 15px 0;
}
.goods-item {
	width: 100%;
	// width: 300rpx;
	// padding: 0 24rpx 24rpx;
	// text-align: center;
	// line-height: 72rpx;
	// border: 1px dotted #f1f1f1f1;
	&:first-child {
		padding-right: 6px;
	}
}
// .goods-item p {
// 	color: #f08152;
// }
.goods-item image {
	width: 100%;
	height: 200rpx;
}
.recommend {
	min-height: 300rpx;
	margin: 24rpx;
	display: flex;
	justify-content: flex-start;
	flex-flow: row wrap;
}
.recommend image {
	width: 100%;
	height: 250rpx;
	margin-bottom: 24rpx;
}
.reco {
	width: 50%;
}
.reco-item {
	border: 1px dotted #f1f1f1f1;
	box-shadow: 0px 0px 20px 0px rgba(26, 33, 73, 0.05);
	margin: 12rpx;
	padding: 12rpx;
}
.reco-item view {
	line-height: 48rpx;
	height: 96rpx;
}
.reco-item p {
	color: #f08152;
	image {
		width: 26rpx;
		height: 32rpx;
		margin-bottom: 0rpx;
		margin-right: 11rpx;
	}
	span {
		font-size: 24rpx;
		color: #999999;
		margin-left: 12rpx;
		text-decoration: line-through;
	}
}
// .reco-item span {
// 	font-size: 24rpx;
// 	color: #999999;

// 	text-decoration: line-through;
// }
// .reco-item p span {
// 	font-size: 24rpx;
// 	margin-left: 12rpx;
// 	line-height: 48rpx;
// 	color: #666666;
// 	text-decoration: none;
// }
.is-empty {
	text-align: center;
}
.is-empty image {
	width: 250rpx;
	height: 200rpx;
	margin: 50rpx auto;
}
.is-empty span {
	display: block;
}
</style>
