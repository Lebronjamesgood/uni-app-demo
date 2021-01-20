<template>
	<view class="order-page">
		<view class="tabs">
			<u-tabs-swiper
				activeColor="#206CFE"
				color="#206CFE"
				ref="tabs"
				:list="tabList"
				:current="current"
				@change="tabsChange"
				:is-scroll="false"
				swiperWidth="750"
			></u-tabs-swiper>
		</view>
		<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item" v-for="(item, index) in requestList" :key="index">
				<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom"><order-card :dataList="item"></order-card></scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import orderCard from '../components/OrderCard.vue';
export default {
	components: {
		orderCard
	},
	data() {
		return {
			current: 0,
			swiperCurrent: 0,
			dx: 0,
			requestList: [
				{
					id: 1,
					goodsList: [
						{
							orderTime: '2020-11-03 12:12:12',
							desc: '一对一数学家教',
							integral: 300,
							account: 2,
							total: 300,
							status: '待确认',
							serviceType: '上门服务',
							code: '72394543509'
						},
						{
							orderTime: '2020-11-03 12:12:12',
							desc: '一对一数学家教',
							integral: 300,
							account: 2,
							total: 300,
							status: '待确认',
							serviceType: '上门服务',
							code: '72394543509'
						},
						{
							orderTime: '2020-11-03 12:12:12',
							desc: '一对一数学家教',
							integral: 300,
							account: 2,
							total: 300,
							status: '待确认',
							serviceType: '上门服务',
							code: '72394543509'
						}
					]
				},
				{
					id: 2,
					goodsList: [
						{
							orderTime: '2020-11-03 12:12:12',
							desc: '一对一数学家教',
							integral: 300,
							account: 2,
							total: 300,
							status: '待服务',
							serviceType: '上门服务',
							code: '72394543509'
						},
						{
							orderTime: '2020-11-03 12:12:12',
							desc: '一对一数学家教',
							integral: 300,
							account: 2,
							total: 300,
							status: '待服务',
							code: '72394543509',
							serviceType: '上门服务'
						},
						{
							orderTime: '2020-11-03 12:12:12',
							desc: '一对一数学家教',
							integral: 300,
							account: 2,
							total: 300,
							code: '72394543509',
							status: '待服务',
							serviceType: '上门服务'
						}
					]
				},
				{
					id: 2,
					goodsList: [
						{
							orderTime: '2020-11-03 12:12:12',
							desc: '一对一数学家教',
							integral: 300,
							account: 2,
							total: 300,
							code: '72394543509',
							status: '已完成',
							serviceType: '上门服务'
						}
					]
				},
				{
					id: 3,
					goodsList: [
						{
							orderTime: '2020-11-03 12:12:12',
							desc: '一对一数学家教',
							integral: 300,
							account: 2,
							total: 300,
							status: '已完成',
							code: '72394543509',
							serviceType: '上门服务'
						},
						{
							orderTime: '2020-11-03 12:12:12',
							desc: '一对一数学家教',
							integral: 300,
							account: 2,
							total: 300,
							status: '待确认',
							code: '72394543509',
							serviceType: '上门服务'
						},
						{
							orderTime: '2020-11-03 12:12:12',
							desc: '一对一数学家教',
							integral: 300,
							account: 2,
							total: 300,
							code: '72394543509',
							status: '待服务',
							serviceType: '上门服务'
						}
					]
				}
			],
			tabList: [
				{
					name: '新订单'
				},
				{
					name: '待服务'
				},
				{
					name: '已完成'
				},
				{
					name: '全部'
				}
			],
			tabsHeight: 0,
			loadStatus: ['loadmore', 'loadmore', 'loadmore', 'loadmore']
		};
	},
	onLoad() {},

	methods: {
		// 页面数据
		// getOrderList(idx) {
		// 	for (let i = 0; i < 5; i++) {
		// 		let index = this.$u.random(0, this.dataList.length - 1);
		// 		let data = JSON.parse(JSON.stringify(this.dataList[index]));
		// 		data.id = this.$u.guid();
		// 		this.requestList[idx].push(data);
		// 	}
		// 	this.loadStatus.splice(this.current, 1, 'loadmore');
		// },
		// tabs通知swiper切换
		tabsChange(index) {
			this.swiperCurrent = index;
			// this.getOrderList(index);
		},
		transition({ detail: { dx } }) {
			this.$refs.tabs.setDx(dx);
		},
		animationfinish({ detail: { current } }) {
			this.$refs.tabs.setFinishCurrent(current);
			this.swiperCurrent = current;
			this.current = current;
		},
		reachBottom() {
			// 此tab为空数据
			if (this.current != 2) {
				this.loadStatus.splice(this.current, 1, 'loading');
				setTimeout(() => {
					// this.getOrderList(this.current);
				}, 1200);
			}
		}
	}
};
</script>

<style lang="less">
.order-page {
	display: flex;
	flex-direction: column;
	height: calc(100vh - var(--window-top));
	width: 100%;
}
page {
	background-color: #f5f6f7;
	overflow-y: scroll;
	height: 100%;
}
.swiper-box {
	flex: 1;
}
.swiper-item {
	height: 100%;
}
</style>
