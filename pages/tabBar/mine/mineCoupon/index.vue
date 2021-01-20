<template>
	<view class="mineCoupon">
		<view class="select-card-type" @click="show = !show">
			<text class="select-text">{{dropTitle}}</text>
			<u-icon name="arrow-down font-12"></u-icon>
		</view>
		<u-popup v-model="show" mode="bottom" length="516rpx" border-radius="32">
			<view class="popup-top">
				<view></view>
				<view class="popup-title font-13">
					类型
				</view>
				<view class="btn">
					<u-icon name="close" color="#999999" size="24" @click="show = !show"></u-icon>
				</view>
			</view>
				<view class="card-types-btns">
					<view :class="{'card-types-button': true, 'active-btn': selectedCardTypes.includes(index)}"
							v-for="(item, index) in couponList" 
							:key="index"
							@click="selectHandler(index)"
							>
							<image class="select-img" v-if="selectedCardTypes.includes(index)" src="../../../../static/mine/selected.png" mode=""></image>
							{{item.label}}</view>
				</view>
			</u-popup>
		<view class="wrap">
			<view class="tabs-box">
				<u-tabs-swiper ref="tabs"
					:list="list"
					:is-scroll="false"
					:current="current"
					@change="tabsChange"
					bar-height="4"
					bar-width="43"
					duration="1"
					></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<unUsed :data="cardFormData.unUsed"/>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<unUsed :data="cardFormData.used"/>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<unUsed :data="cardFormData.disUsed"/>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		
	</view>
</template>

<script>
	import unUsed from './components/unUsed.vue'
	export default {
		name: 'mineCoupon',
		components: {
			unUsed
		},
		data() {
			return {
				coupon: 1,
				current: 0,
				swiperCurrent: 0,
				show: false,
				selectedCardTypes: [],
				couponList: [
					{
						label: '全部类型券',
						value: 1,
					},
					{
						label: '代金券',
						value: 2,
					},
					{
						label: '折扣券',
						value: 3,
					},
					{
						label: '兑换券',
						value: 4,
					},
					{
						label: '优惠券',
						value: 5,
					},
					{
						label: '停车券',
						value: 6,
					},
					{
						label: '入场券',
						value: 7,
					}
				],
				dropTitle: '所有券',
				list: [{
						name: '未使用'
					}, {
						name: '已使用'
					}, {
						name: '已失效'
					}],
				cardFormData: {
					unUsed: [{
						title: '奇梁洞代金券',
						dataList: [
							{
								number: 10,
								message1: '满100减10',
								message2: '景点部分产品可用',
								message3: '2020.10.01~2021.03.01内有效',
								message4: '使用时间不限',
								status: 0
							},
						]
					},
					{
						title: '老家寨',
						dataList: [
							{
								number: 20,
								message1: '满200减20',
								message2: '景点部分产品可用',
								message3: '2020.10.01~2021.03.01内有效',
								message4: '使用时间不限',
								status: 0
							}
						]
					}],
					used: [{
						title: '勾良苗寨代金券',
						dataList: [
							{
								number: 50,
								message1: '满300减50',
								message2: '景点部分产品可用',
								message3: '2020.10.01~2021.03.01内有效',
								message4: '使用时间不限',
								status: 1
							},
							{
								number: 10,
								message1: '满100减10',
								message2: '景点部分产品可用',
								message3: '2020.10.01~2021.03.01内有效',
								message4: '使用时间不限',
								status: 1
							},
						]
					},
					{
						title: '沈从文故居',
						dataList: [
							{
								number: 20,
								message1: '满200减20',
								message2: '景点部分产品可用',
								message3: '2020.10.01~2021.03.01内有效',
								message4: '使用时间不限',
								status: 1
							}
						]
					}],
					disUsed: []
				}
			}
		},
		methods: {
			selectChange(val) {
				this.coupon = val
				let filterData = this.couponList.filter(item => item.value == val)
				this.dropTitle = filterData[0].label
			},
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.tabs.setDx(dx);
			},
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			selectHandler(index) {
				this.selectedCardTypes.includes(index) ? 
					this.selectedCardTypes = this.selectedCardTypes.filter(item => item != index) : this.selectedCardTypes.push(index)
			}
		}
	}
</script>

<style lang="scss" scoped>
page {
	overflow-y: auto;
}
/deep/.u-dropdown__content__popup {
	width: 50%;
}
/deep/.u-dropdown__menu {
	width: 30%;
}
.tabs-box {
	width: 60%;
}
.font-30 {
	font-size: 30rpx;
}
.font-12 {
	font-size: 24rpx;
}
.font-13 {
	font-size: 26rpx;
}
.swiper-item {
	height: 100%;
}
.swiper-box {
	flex: 1;
}
.wrap {
	display: flex;
	flex-direction: column;
	height: calc(100vh - 168rpx);
	width: 100%;
}
.select-card-type {
	padding: 30rpx 0 28rpx;
}
.select-text {
	padding: 0 8rpx 0 30rpx;
	font-size: 15px;
}
.card-types-btns {
	padding: 0 10rpx 30rpx 30rpx;
	.card-types-button {
		position: relative;
		width: 330rpx;
		margin-right: 20rpx;
		margin-bottom: 20rpx;
		height: 68rpx;
		font-size: 28rpx;
		line-height: 68rpx;
		text-align: center;
		border-radius: 8rpx;
		display: inline-block;
		border: 1px solid #e3e3e3;
		background: #ffffff;
		background: transparent;
	}
	.active-btn {
		background: rgba(32,108,254,0.10);
		border: 1px solid #206cfe;
		color: #206CFE;
	}
	.select-img {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 42rpx;
		height: 38rpx;
	}
	
}
.popup-top {
	display: flex;
	justify-content: space-between;
	margin: 35rpx 30rpx 42rpx;
	.popup-title {
		font-weight: 500;
	}
}
</style>
