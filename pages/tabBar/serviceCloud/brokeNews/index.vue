<template>
	<view class="container">
		<nav-bar :isBack="true" :title="title" searchMargin="0 0 0 32rpx"></nav-bar>
		<view class="content">
			<v-tabs v-model="current"  auto :tabs="list" @change="changeTab" lineColor="#206CFE"  activeColor="#206CFE" color="#333333"
				height="48px" fontSize="14px" activeFontSize="15px" :lineScale="0.36"></v-tabs>
			<view class="info-box">
				<List :list="onhandList" v-if="current===0" :showDes="false" from="爆料"></List>
				<List :list="handledList" v-if="current===1" :showDes="false" from="爆料"></List>
			</view>
		</view>
	</view>
</template>

<script>
	// import navBar from '../../../common/NavBar.vue'
	import List from '../components/List.vue'
	export default {
		components: {
		   // navBar,
		   List
		},
		props: {},
		data() {
			return {
				// 标题
				isBack: true,
				messageList: [],
				list: [],
				title: '我的爆料',
				list: ['待处理', '已处理'],
				current: 0,
				onhandList: [
					{
						id: 0,
						title: '湘UXXXXX车窗抛物湘UXXXXX车窗抛物',
						desc: '2020-12-12湘UXXXXX车窗抛物湘UXXXXX车窗抛物',
						time: '2020-12-12 19:23:21',
						img: require('../../../../static/serviceCloud/mock/mock1.png'),
						status: '待处理'
					},
					{
						id: 1,
						title: '京A·34596违规停车',
						desc: '2020-12-12湘UXXXXX车窗抛物湘UXXXXX车窗抛物',
						time: '2020-12-26',
						img: require('../../../../static/serviceCloud/mock/mock2.png'),
						status: '待处理'
					},
					{
						id: 2,
						title: '京A·34596违规停车',
						desc: '2020-12-12京A·34596违规停车',
						time: '2020-12-26',
						img: require('../../../../static/serviceCloud/mock/mock3.png'),
						status: '待处理'
					}
				],
				handledList: [
					{
						id: 0,
						title: '湘UXXXXX车窗抛物湘UXXXXX车窗抛物',
						desc: '2020年12月25日湘UXXXXX车窗抛物湘UXXXXX车窗抛物',
						time: '2020-12-25',
						img: require('../../../../static/serviceCloud/mock/mock1.png'),
						status: '已处理',
						handled: {
							name: '处罚结果',
							title: '已对湘UXXXXX车主进行扣2分并处以200元罚款',
							handleTime: '2020年10月26日 10:15',
							handleAgency: '凤凰县公安局交警一大队',
							img: [
								require('../../../../static/serviceCloud/default.png'),
								require('../../../../static/serviceCloud/default.png')
							],
							evaluateFraction: null
						}
					},
					{
						id: 1,
						title: '京A·34596违规停车',
						desc: '2020年12月26日京A·34596违规停车',
						time: '2020-12-26',
						img: require('../../../../static/serviceCloud/mock/mock2.png'),
						status: '已处理',
						handled: {
							name: '处罚结果',
							title: '已对湘UXXXXX进行扣2分并处以200元罚款',
							handleTime: '2020年10月06日 10:15',
							handleAgency: '凤凰县公安局交警二大队',
							img: [
								require('../../../../static/serviceCloud/default.png')
							],
							evaluateFraction: null
						}
					},
					{
						id: 2,
						title: '京A·34596违规停车！',
						desc: '2020年12月26日京A·34596违规停车',
						time: '2020-12-26',
						img: require('../../../../static/serviceCloud/mock/mock3.png'),
						status: '已处理',
						handled: {
							name: '处罚结果',
							title: '已对湘UXXXXX进行扣2分并处以200元罚款',
							handleTime: '2020年10月27日 10:15',
							handleAgency: '凤凰县公安局交警三大队',
							img: [
								require('../../../../static/serviceCloud/default.png'),
								require('../../../../static/serviceCloud/default.png')
							],
							evaluateFraction: null
						}
					}
				]
			};
		},
		methods: {
			changeTab(index) {
				this.current = index
			}
		}
	}
</script>

<style lang="less" scoped>
	.content {
		background-color: #F5F6F7;
		height: calc(100vh - 44px);
	}
	.v-tabs {
		background-color: #FFFFFF;
		padding-left: 50rpx;
		padding-right: 50rpx;
	}
	.info-box {
		background-color: #F5F6F7;
	}
	/deep/.v-tabs__item {
		  text-align: left;
		  justify-content: left !important;
		  font-family: SourceHanSansCN, SourceHanSansCN-Normal;
		  flex: 0.3 !important;
	}
	/deep/.v-tabs__line {
		width: 46rpx !important;
	}
</style>
