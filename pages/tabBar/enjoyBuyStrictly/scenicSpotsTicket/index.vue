<template>
	<view>
		<u-navbar :is-back="true" back-text="旅游购票" :title-bold="true">
			<view class="slot-wrap">
				<view class="search-wrap">
					<!-- 如果使用u-search组件，必须要给v-model绑定一个变量 -->
					<u-search :show-action="showAction" placeholder="查找您需要的服务" height="56" :action-style="{ color: '#000' }"></u-search>
				</view>
			</view>
		</u-navbar>
		<view class="service-list">
<!-- 			<view class="service-item" v-for="(item, index) in serviceList" @click="link(item.linkhref)" :key="index">
				<image :src="item.src" mode=""></image>
				<text>{{ item.title }}</text>
			</view> -->
			<view class="district">
				<view v-for="(item, index) in serviceList" :key="index" class="district-item" @click="link(item.linkhref)">
					<view class="district-icon">
						<u-image :src="item.src" height="104" width="104" @tap="goPath(item.path)"></u-image>
						<span>{{ item.title }}</span>
					</view>
					<view class="arrow"><u-icon name="arrow-right" color="#C3CBCF" size="28"></u-icon></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			showAction: true,
			serviceList: [
				{
					title: '门票',
					src: require('../../../../static/enjoyBuyStrictly/png/ticket3.png'),
					linkhref: '/pages/tabBar/enjoyBuyStrictly/scenicSpotsTicket/tickets/index'
				},
				{
					title: '车票',
					src: require('../../../../static/enjoyBuyStrictly/png/ticket2.png'),
					linkhref: '/pages/tabBar/enjoyBuyStrictly/scenicSpotsTicket/carTicket'
				},
				{
					title: '演艺票',
					src: require('../../../../static/enjoyBuyStrictly/png/ticket1.png'),
					linkhref: ''
				}
			]
		};
	},
	methods: {
		backHistory() {
			uni.navigateBack();
		},
		link(url) {
			uni.navigateTo({
				url: url
			});
		}
	}
};
</script>

<style lang="less">
page {
	background: #ffffff;
}
.service-list {
	// display: flex;
	// justify-content: space-around;
	// padding: 20rpx;
	// padding-top: 60rpx;

	// .service-item {
	// 	display: flex;
	// 	flex-direction: column;
	// 	align-items: center;
	// 	image {
	// 		width: 56rpx;
	// 		height: 56rpx;
	// 		margin-bottom: 30rpx;
	// 	}
	// }
	.district {
		.district-icon {
			display: flex;
			align-items: center;
			
			span{
				margin-left: 32rpx;
				font-size: 28rpx;
				color: #353535;
			}
		}
	}
	.district-item {
		display: flex;
		padding: 18rpx 30rpx;
		background: #ffffff;
		border-radius: 8px;
		box-shadow: 0px 0px 10px 0px rgba(41,41,41,0.05); 
		margin-top: 24rpx;
		margin: 30rpx;
		align-items: center;
		justify-content: space-between;
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
