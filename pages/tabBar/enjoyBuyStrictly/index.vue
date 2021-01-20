<template>
	<view class="enjoyBuyStrictly">
		<nav-bar :isBack="isBack" :title="title" shoppingCart :messageList="messageList" :rightMsg="true" :showAction="false" :titleSize="42"></nav-bar>
		<scroll-view class="scroll-view-enjoy">
			<view class="wrap"><u-swiper height="280" border-radius="0" :list="list"></u-swiper></view>
			<view class="header-nav">
				<view class="enjoy-type">
					<view @click="clickwebsrc('https://fhhn.sdongpo.com/wap#/home')">
						<u-image src="../../../static/enjoyBuyStrictly/svg/vegetableBasket.svg" mode="aspectFill" style="width: 68px; height: 67px;"></u-image>
						<text>菜篮子</text>
					</view>
					<view @click="clickwebsrc('https://fhhn.sdongpo.com/wap#/category?category_id=145')">
						<u-image src="../../../static/enjoyBuyStrictly/svg/supermarket.svg" mode="aspectFill" style="width: 68px; height: 67px;"></u-image>
						<text>百货超市</text>
					</view>
					<view @click="link('/pages/tabBar/enjoyBuyStrictly/scenicSpotsTicket/index')">
						<u-image src="../../../static/enjoyBuyStrictly/svg/scenic.svg" mode="aspectFill" style="width: 68px; height: 67px;"></u-image>
						<text>景区门票</text>
					</view>
					<view @click="goHotel()">
						<u-image src="../../../static/enjoyBuyStrictly/svg/restaurant.svg" mode="aspectFill" style="width: 68px; height: 67px;"></u-image>
						<text>餐饮住宿</text>
					</view>
				</view>
				<view class="information-today">
					<text style="font-family: YouSheBiaoTiHei;color: #206cfe;">今日</text>
					<text style="font-family: YouSheBiaoTiHei;">公告</text>
					<u-notice-bar type="none" mode="vertical" volume-size="0" :list="noticeList"></u-notice-bar>
				</view>
			</view>
			<view class=""><mySection :goodsTitle="goodsTitleFind"></mySection></view>
			<view style="position: relative;">
				<view class="goods-card"><card v-for="(item, index) in goodsData" :key="index" @click.native="handleTouchMove(index)" :goods="item"></card></view>
				<view class="u-swiper-indicator">
					<view class="u-indicator-item-round" :class="{ 'u-indicator-item-round-active': index == uCurrent }" v-for="(item, index) in goodsData" :key="index"></view>
				</view>
			</view>
			<view class=""><mySection :goodsTitle="goodsTitleShop"></mySection></view>
			<view class="shopCard"><shopCard v-for="(item, index) in shop_card_data" :key="index" :shopData="item"></shopCard></view>
			<view class=""><mySection :goodsTitle="goodsTitleFamily"></mySection></view>
			<view class="goods-family">
				<u-tabs :list="tab_list" :is-scroll="false" :current="current" @change="change"></u-tabs>
				<view class="goods-family-card"><goodsCard :goodsIndex="current"></goodsCard></view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
import card from './components/card/card.vue';
import NavBar from '../../common/NavBar.vue';
import mySection from './components/card/section.vue';
import shopCard from './components/card/shopCard.vue';
import goodsCard from './components/card/goodsCard.vue';
import { throttled } from './util/util.js';
export default {
	data() {
		return {
			tab_list: [
				{
					name: '好物'
				},
				{
					name: '烟酒'
				},
				{
					name: '穿搭'
				},
				{
					name: '运动'
				},
				{
					name: '极客'
				}
			],
			current: 0,
			shop_card_data: [
				{
					title: '赫章生鲜供应链',
					goodsList: [
						{
							url: require('../../../static/enjoyBuyStrictly/png/Walnut.png'),
							name: '薄皮核桃5斤装',
							price: '29.90',
							sincePrice: '45.90'
						},
						{
							url: require('../../../static/enjoyBuyStrictly/png/egg.png'),
							name: '高山土鸡蛋5斤装',
							price: '22.90',
							sincePrice: '45.90'
						},
						{
							url: require('../../../static/enjoyBuyStrictly/png/rose.png'),
							name: '魔法玫瑰',
							price: '9.90',
							sincePrice: '25.90'
						}
					]
				},
				{
					title: '今天烟酒批发专营店',
					goodsList: [
						{
							url: require('../../../static/enjoyBuyStrictly/png/cigarette.png'),
							name: '中华2号香烟',
							price: '60.00',
							sincePrice: '79.00'
						},
						{
							url: require('../../../static/enjoyBuyStrictly/png/Moutai.png'),
							name: '飞天茅台',
							price: '9.90',
							sincePrice: '15.90'
						},
						{
							url: require('../../../static/enjoyBuyStrictly/png/guobin.png'),
							name: '国宾茅台6瓶/箱',
							price: '9999.90',
							sincePrice: '12999.90'
						}
					]
				}
			],
			isBack: false,
			title: '享购严选',
			goodsTitleFind: {
				title: '发现好货',
				showCountDown: true
			},
			goodsTitleShop: {
				title: '推荐好店'
			},
			goodsTitleFamily: {
				title: '生活家',
				showInfo: true
			},
			messageList: [
				{
					name: '消息中心',
					icon: require('../../../static/serviceCloud/msg_icon.svg'),
					path: '/pages/message/index'
				},
				{
					name: '我的订单',
					icon: require('../../../static/serviceCloud/expose_icon.svg'),
					path: './order/orderList'
				},
				{
					name: '优惠卷',
					icon: require('../../../static/serviceCloud/apply_icon.svg'),
					path: '/pages/tabBar/mine/mineCoupon/index'
				}
			],
			goodsData: [
				{
					url: require('../../../static/enjoyBuyStrictly/png/clouth.png'),
					name: '中国大陆.主推韩版男装积雨Giyu三件套男生衣服帅气穿搭，春秋冬撞色外套',
					price: '298.90',
					sincePrice: '399.90'
				},
				{
					url: require('../../../static/enjoyBuyStrictly/png/toothpaste.png'),
					name: '日本.如珍珠般一口美牙LION狮王 CLINICA酵素美白牙膏130g鲜果薄荷',
					price: '29.90',
					sincePrice: '55.90'
				},
				{
					url: require('../../../static/enjoyBuyStrictly/png/Mask.png'),
					name: '中国防尘防晒网红同款口罩',
					price: '12.90',
					sincePrice: '15.90'
				},
				{
					url: require('../../../static/enjoyBuyStrictly/png/pot.png'),
					name: '麦板石不粘锅',
					price: '158.00',
					sincePrice: '235.00'
				},
				{
					url: require('../../../static/enjoyBuyStrictly/png/shoes.png'),
					name: '回力、高帮鞋运动鞋',
					price: '159.00',
					sincePrice: '245.00'
				}
			],
			border: true,
			value1: '',
			options1: [
				{
					label: '消息中心',
					value: 1
				},
				{
					label: '我的订单',
					value: 2
				},
				{
					label: '我的收藏',
					value: 3
				},
				{
					label: '我的优惠卷',
					value: 4
				}
			],
			list: [
				{
					image: require('../../../static/enjoyBuyStrictly/png/swiape1.png'),
					title: '政务中心由于装修，暂停业务一周，请合理安排好时间'
				},
				{
					image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
					title: '政务中心由于装修，暂停业务一周，请合理安排好时间'
				},
				{
					image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
					title: '政务中心由于装修，暂停业务一周，请合理安排好时间'
				}
			],
			noticeList: [
				'政务中心由于装修，暂停业务一周，请合理安排好时间',
				'政务中心由于装修，暂停业务一周，请合理安排好时间',
				'政务中心由于装修，暂停业务一周，请合理安排好时间',
				'政务中心由于装修，暂停业务一周，请合理安排好时间'
			],
			uCurrent: 0
		};
	},
	components: {
		card,
		NavBar,
		mySection,
		shopCard,
		goodsCard
	},

	methods: {
		clickwebsrc(url) {
			plus.runtime.openURL(url, function(res) {
				console.log(res);
			});
		},
		//滑动切换
		handleTouchMove(index) {
			// console.log(event)
			this.uCurrent = index;
		},
		change(index) {
			this.current = index;
		},
		goHotel() {
			uni.navigateTo({
				url: '/pages/tabBar/enjoyBuyStrictly/components/hotel/hotel'
			});
		},
		goOtherProject(val) {
			location.href = val;
		},
		link(url) {
			uni.navigateTo({
				url: url
			});
		}
	}
};
</script>

<style lang="less" scoped>
.enjoyBuyStrictly {
	background-color: #fff;
	font-family: SourceHanSansCN;

	.scroll-view-enjoy {
		width: auto;
		margin-bottom: 50px;
	}

	.enjoy-type {
		display: flex;
		text-align: center;

		uni-view {
			width: 25%;
			text-align: center;
			text-align: -webkit-center;
		}

		span {
			font-size: 14px;
		}
	}

	.header-nav {
		position: relative;
		margin: -32px 10px 30px 10px;
		background: #ffffff;
		border-radius: 10px;
		box-shadow: 0px 2px 15px 0px rgba(26, 33, 73, 0.09);
		padding: 15px 13px;
	}

	.information-today {
		display: flex;
		margin-top: 11px;
		padding: 0 15px;

		uni-view {
			width: 77%;
		}

		uni-text {
			line-height: 34px;
			font-weight: 700;
			font-style: italic;
		}
	}
	.u-swiper-indicator {
		padding: 0 24rpx;
		position: absolute;
		width: 100%;
		z-index: 1;
		display: flex;
		flex-direction: unset;
		top: 244px;
		justify-content: center;
	}
	.shopCard {
		padding-left: 10px;
		padding-right: 10px;
	}
	.u-indicator-item-round {
		width: 14rpx;
		height: 14rpx;
		margin: 0 6rpx;
		border-radius: 20rpx;
		transition: all 0.5s;
		background-color: rgba(0, 0, 0, 0.2);
	}

	.u-indicator-item-round-active {
		width: 34rpx;
		background-color: #206cfe;
	}

	/deep/.u-swiper-wrap {
		border-radius: 0 !important;
	}

	.goods-card {
		position: relative;
		display: flex;
		overflow-x: auto;
		padding: 0 10px;
	}
	.goods-family {
		padding: 0 10px 10px 10px;
	}
	.goods-family-card {
	}
}
</style>
