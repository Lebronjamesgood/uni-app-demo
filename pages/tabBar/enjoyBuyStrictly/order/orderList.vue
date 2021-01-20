<template>
	<view class="order-page">
		<view class="tabs">
			<u-tabs-swiper activeColor="#206CFE" color="#206CFE" ref="tabs" :list="tabList" :current="current" @change="tabsChange" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
		</view>
		<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item" v-for="(item, index) in requestList" :key="index">
				<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom"><uni-order-card :dataList="item"></uni-order-card></scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
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
							desc: '潮州凤凰高山乌龙单丛茶 乌岽古树雪片单枞茶 单从茶 新茶',
							integral: 300,
							account: 2,
							total: 300,
							status: '待付款',
							imgsrc:require("../../../../static/enjoyBuyStrictly/png/order1.png")
						},
						{
							orderTime: '2020-11-03 12:12:12',
							desc: '湘西猕猴桃奇异果当季水果现摘非徐州香山节日优惠',
							integral: 50,
							account: 4,
							total: 50,
							status: '待发货',
							imgsrc:require("../../../../static/enjoyBuyStrictly/png/order2.png")
						},
						{
							orderTime: '2020-11-03 12:12:12',
							desc: '湘西外婆菜农家自制开胃菜腌制咸菜开味下饭菜香辣腌菜萝卜干',
							integral: 20,
							account: 7,
							total: 20,
							status: '已取消',
							imgsrc:require("../../../../static/enjoyBuyStrictly/png/order3.png")
						}
					]
				},
				{
					id: 2,
					goodsList: [
						{
							orderTime: '2020-11-03 12:12:12',
							desc: '潮州凤凰高山乌龙单丛茶 乌岽古树雪片单枞茶 单从茶 新茶',
							integral: 300,
							account: 2,
							total: 300,
							status: '待付款',
							imgsrc:require("../../../../static/enjoyBuyStrictly/png/order1.png")
						},
						{
							orderTime: '2020-11-03 12:12:12',
							desc: '湖南特产常德桃源鲁胡子剁辣椒170g×4瓶组合 调味辣椒酱开味下饭',
							integral: 300,
							account: 2,
							total: 300,
							status: '待付款',
							imgsrc:require("../../../../static/enjoyBuyStrictly/png/order4.png")
						},
						{
							orderTime: '2020-11-03 12:12:12',
							desc: '芳姐腊香干 600g湖南特产石磨柴火烟熏豆腐干豆制品农家自制',
							integral: 300,
							account: 2,
							total: 300,
							status: '待付款',
							imgsrc:require("../../../../static/enjoyBuyStrictly/png/order5.png")
						}
					]
				},
				{
					id: 2,
					goodsList: [
						{
							orderTime: '2020-11-03 12:12:12',
							desc: '正宗四川巴中南江腊肠麻辣五香广味香肠农家自制烟熏腊肉川味',
							integral: 300,
							account: 2,
							total: 300,
							status: '待发货',
							imgsrc:require("../../../../static/enjoyBuyStrictly/png/order6.png")
						}
					]
				},
				{
					id: 3,
					goodsList: [
						{
							orderTime: '2020-11-03 12:12:12',
							desc: '正宗四川巴中南江腊肠麻辣五香广味香肠农家自制烟熏腊肉川味',
							integral: 300,
							account: 2,
							total: 300,
							status: '交易关闭',
							imgsrc:require("../../../../static/enjoyBuyStrictly/png/order6.png")
						},
						{
							orderTime: '2020-11-03 12:12:12',
							desc: '湖南特产常德桃源鲁胡子剁辣椒170g×4瓶组合 调味辣椒酱开味下饭',
							integral: 300,
							account: 2,
							total: 300,
							status: '已发货',
							imgsrc:require("../../../../static/enjoyBuyStrictly/png/order4.png")
						},
						{
							orderTime: '2020-11-03 12:12:12',
							desc: '湘西猕猴桃奇异果当季水果现摘非徐州香山节日优惠',
							integral: 300,
							account: 2,
							total: 300,
							status: '已发货',
							imgsrc:require("../../../../static/enjoyBuyStrictly/png/order2.png")
						}
					]
				},
				{
					id: 4,
					status: '已取消',
					goodsList: [
						{
							orderTime: '2020-11-03 12:12:12',
							desc: '湘西外婆菜农家自制开胃菜腌制咸菜开味下饭菜香辣腌菜萝卜干',
							integral: 300,
							account: 2,
							total: 300,
							status: '已取消',
							imgsrc:require("../../../../static/enjoyBuyStrictly/png/order3.png")
						}
					]
				}
			],
			tabList: [
				{
					name: '全部'
				},
				{
					name: '待付款'
				},
				{
					name: '待发货'
				},
				{
					name: '已发货'
				},
				{
					name: '已取消'
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
			console.log(current);
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
	background-color: #f5f6f7 !important;
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
