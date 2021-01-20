<template>
	<view class="mine-points">
		<view class="points-nav">
			<view class="first-line" @click="show = !show">
				<text class="font-12" style="margin-right: 10rpx;">{{seleceTime}}</text>
				<u-image src="../../../../static/mine/time-select-icon.png" width="26" height="26"></u-image>
			</view>
			<view class="second-line">
				<text class="font-13" style="margin-right: 4rpx;">可用积分</text>
				<u-icon name="question-circle" size="20"></u-icon>
			</view>
			<view class="third-line">
				<text class="font-24">365</text>
			</view>
		</view>
		<u-select v-model="show" 
				:list="list" 
				cancel-text="×" 
				cancel-color="rgba(51,51,51,0.30)"
				title="选择日期"
				@confirm="selectHandle"
				></u-select>
		<view class="position-nav">
			<view class="position-content">
				<u-grid :col="2" :border="false">
					<u-grid-item @click="activeIndex = '1'">
						<text>积分获取</text>
						<view :class="{'grid-text': true, 'font-18': true, active: activeIndex === '1'}">+170</view>
					</u-grid-item>
					<u-grid-item @click="activeIndex = '2'">
						<text>积分支出</text>
						<view :class="{'grid-text': true, 'font-18': true, active: activeIndex === '2'}">0</view>
					</u-grid-item>
				</u-grid>
			</view>
		</view>
		
		<view class="points-content" v-if="activeIndex === '1'">
			<view class="empty-points" v-if="!collapseList.length">
				<u-image src="../../../../static/mine/empty-points.png" width="528" height="424"></u-image>
				<text class="font-15">本月暂时没有获取到积分哦~</text>
			</view>
			<view v-else>
				<u-collapse :item-style="itemStyle" event-type="close" @change="change" :accordion="false">
					<u-collapse-item :open="false" v-for="(el, ind) in collapseList" :key="ind">
						<view class="collapse-title" slot="title">
							<view class="">
								<text class="font-15">{{el.title}}</text>
							</view>
							<view class="">
								<text class="font-14">{{el.totalNum}}</text>
							</view>
						</view>
						<view class="collapse-body">
							<view class="collapse-list" v-for="(item, index) in el.detailList" :key="index">
								<view class="list-name">
									<text class="font-14">{{item.title}}</text>
									<text class="font-14">{{item.pointNum}}</text>
								</view>
								<view class="list-time">
									<text class="font-12" style="margin-right: 10rpx;">{{item.time1}}</text>
									<text class="font-12">{{item.time2}}</text>
								</view>
							</view>
						</view>
					</u-collapse-item>
				</u-collapse>
			</view>
		</view>
		<view class="points-content" v-else>
			<view class="empty-points" v-if="!collapseList1.length">
				<u-image src="../../../../static/mine/empty-points.png" width="528" height="424"></u-image>
				<text class="font-15">本月暂时没有支出的积分哦~</text>
			</view>
			<view v-else>
				<u-collapse :item-style="itemStyle" event-type="close" @change="change" :accordion="false">
					<u-collapse-item :open="false" v-for="(el, ind) in collapseList" :key="ind">
						<view class="collapse-title" slot="title">
							<view class="">
								<text class="font-15">{{el.title}}</text>
							</view>
							<view class="">
								<text class="font-14">{{el.totalNum}}</text>
							</view>
						</view>
						<view class="collapse-body">
							<view class="collapse-list" v-for="(item, index) in el.detailList" :key="index">
								<view class="list-name">
									<text class="font-14">{{item.title}}</text>
									<text class="font-14">{{item.pointNum}}</text>
								</view>
								<view class="list-time">
									<text class="font-12" style="margin-right: 10rpx;">{{item.time1}}</text>
									<text class="font-12">{{item.time2}}</text>
								</view>
							</view>
						</view>
					</u-collapse-item>
				</u-collapse>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				seleceTime: '2020年10月',
				activeIndex: '1',
				isPointAct: false,
				itemStyle: {
					height: 'auto',
					padding: '4rpx 30rpx',
					background: '#ffffff',
					'border-radius': '16rpx',
					'box-shadow': '0px 0px 20px 0px rgba(41,41,41,0.05)' 
				},
				collapseList: [
					{
						title: '当月交易奖励积分',
						totalNum: '+50',
						detailList: [
							{
								title: '美食城交易金额奖励积分',
								pointNum: '+30',
								time1: '2020-10-28',
								time2: '08:23:34',
							},
							{
								title: '购物商城交易金额奖励积分',
								pointNum: '+20',
								time1: '2020-12-18',
								time2: '14:45:12',
							}
						]
					},
					{
						title: '当月活动奖励积分',
						totalNum: '+120',
						detailList: [
							{
								title: '特邀用户活动奖励',
								pointNum: '+45',
								time1: '2020-10-28',
								time2: '08:23:34',
							},
							{
								title: '客服体验活动奖励积分',
								pointNum: '+75',
								time1: '2020-12-18',
								time2: '14:45:12',
							}
						]
					}
				],
				collapseList1: [],
				show: false,
				list: [
					{
						value: '1',
						label: '2020年10月'
					},
					{
						value: '1',
						label: '2020年11月'
					},
					{
						value: '1',
						label: '2020年12月'
					},
					{
						value: '1',
						label: '2021年1月'
					},
					{
						value: '1',
						label: '2021年2月'
					},
					{
						value: '1',
						label: '2021年3月'
					},
					{
						value: '1',
						label: '2021年4月'
					},
					{
						value: '1',
						label: '2021年5月'
					},
					{
						value: '1',
						label: '2021年6月'
					},
					{
						value: '1',
						label: '2021年7月'
					},
					{
						value: '1',
						label: '2021年8月'
					},
					{
						value: '1',
						label: '2021年9月'
					},
					{
						value: '1',
						label: '2021年10月'
					},
				],
			}
		},
		methods: {
			change() {},
			selectHandle(value) {
				this.seleceTime = value[0].label
			}
		}
	}
</script>

<style lang="scss" scoped>
page {
	overflow-y: auto;
}
.font-12 {
	font-size: 24rpx;
}
.font-13 {
	font-size: 26rpx;
}
.font-14 {
	font-size: 28rpx;
}
.font-15 {
	font-size: 30rpx;
}
.font-16 {
	font-size: 32rpx;
}
.font-18 {
	font-size: 36rpx;
}
.font-20 {
	font-size: 40rpx;
}
.font-24 {
	font-size: 48rpx;
}
/deep/.u-select__header__cancel {
	font-size: 48rpx;
}
/deep/.u-select__header__title {
	font-size: 36rpx;
}
.points-nav {
	background: url(../../../../static/mine/get-points-bg.webp) no-repeat;
	background-size: 100% 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	.first-line {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 200rpx;
		height: 52rpx;
		margin: 59rpx auto;
		background: #eaf0ff;
		border-radius: 8px;
	}
	.second-line {
		margin-bottom: 24rpx;
	}
	.third-line {
		margin-bottom: 189rpx;
	}
}
.position-nav {
		display: flex;
		justify-content: center;
	.position-content {
		background: #ffffff;
		border-radius: 20rpx;
		box-shadow: 0px 4rpx 30rpx 0px rgba(26,33,73,0.09); 
		width: calc(100% - 40rpx);
		margin-top: -72rpx;
		padding: 0 20rpx;
		.grid-text {
			padding: 18rpx;
		}
		.active {
			color: #206CFE;
			border-bottom: 4rpx solid #206CFE;
			box-sizing: border-box;
		}
	}
}
.points-content {
	padding: 40rpx 30rpx 20rpx;
	margin-bottom: 20rpx;
	.empty-points {
		display: flex;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		color: #999999;
		.u-image {
			margin: 0 auto 20rpx;
		}
	}
	.collapse-title {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.collapse-list {
		padding: 0 64rpx;
		border-top: 1rpx solid #ededed;
		.list-name {
			color: #353535;
			display: flex;
			justify-content: space-between;
			margin: 30rpx 0;
		}
		.list-time {
			padding-bottom: 30rpx;
		}
	}
}
/deep/.u-image__image {
	vertical-align: super;
}
</style>
