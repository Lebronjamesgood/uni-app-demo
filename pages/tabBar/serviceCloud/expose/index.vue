<template>
	<view class="container">
		<!-- 曝光台 -->
		<nav-bar :isBack="true" :title="title" searchMargin="0 0 0 32rpx"></nav-bar>
	    <List2 :list="handledList" :from="from" :offset="offset" :isExpose="isExpose"></List2>
	</view>
</template>

<script>
	// import navBar from '../../../common/NavBar.vue'
	import List2 from '../components/List2.vue'
	export default {
		components: {
		   // navBar,
		   List2
		},
		props: {},
		data() {
			return {
				from: 5.8,
				offset: 0.2,
				isExpose: false,
				// 标题
				// 标题
				isBack: true,
				messageList: [],
				list: [],
				title: '曝光台',
				current: 0,
				handledList: [
					{
						id: 0,
						comment: '999',
						like: '20',
						title: '南华门附近路灯损坏，夜间行走影响安全',
						desc: '2020-12-25南华门附近路灯损坏，夜间行走影响安全',
						from: '交警大队',
						status: '已处理',
						time: '2020-12-25',
						img: require('../../../../static/serviceCloud/default.png'),
						handled: {
							name: '处罚结果',
							title: '南华门附近路灯损坏，夜间行走影响安全',
							handleTime: '2020年10月26日 10:15',
							handleAgency: '凤凰县公安局交警一大队',
							img: [
								require('../../../../static/serviceCloud/default.png'),
								require('../../../../static/serviceCloud/default.png')
							],
							evaluateFraction: null,
							isThumb: false,
							message: [
								{
									id: 1,
									title: '我爱凤凰',
									des: '看到我大凤凰执法效率是真的高，为我大凤凰交警点赞',
									time: '10分钟前',
									img: require('../../../../static/serviceCloud/default.png')
								},
								{
									id: 2,
									title: '我的家乡凤凰',
									des: '看到我大凤凰执法效率是真的高，为我大凤凰交警点赞',
									time: '20分钟前',
									img: require('../../../../static/serviceCloud/default.png')
								}
							]
						}
					},
					{
						id: 2,
						comment: '99',
						like: '22',
						title: 'XX酒店元旦假期期间，哄抬物价',
						desc: '2020-12-25XX酒店元旦假期期间，哄抬物价',
						from: '交警大队',
						status: '已处理',
						time: '2020-12-25',
						img: require('../../../../static/serviceCloud/default.png'),
						handled: {
							name: '处罚结果',
							title: 'XX酒店元旦假期期间，哄抬物价',
							handleTime: '2020年10月06日 10:15',
							handleAgency: '凤凰县公安局交警二大队',
							img: [
								require('../../../../static/serviceCloud/default.png'),
								require('../../../../static/serviceCloud/default.png')
							],
							evaluateFraction: null,
							isThumb: false,
							message: [
								{
									id: 1,
									title: '我爱凤凰',
									des: '看到我大凤凰执法效率是真的高，为我大凤凰交警点赞',
									time: '10分钟前',
									img: require('../../../../static/serviceCloud/default.png')
								}
							]
						}
					},
					{
						id: 2,
						comment: '99',
						like: '24',
						title: 'XX停车场，收费贵',
						desc: '2020-12-25XX停车场，收费贵',
						from: '交警大队',
						status: '已处理',
						time: '2020-12-25',
						img: require('../../../../static/serviceCloud/default.png'),
						handled: {
							name: '处罚结果',
							title: 'XX停车场，收费贵',
							handleTime: '2020年10月06日 10:15',
							handleAgency: '凤凰县公安局交警二大队',
							img: [
								require('../../../../static/serviceCloud/default.png'),
								require('../../../../static/serviceCloud/default.png')
							],
							evaluateFraction: null,
							isThumb: false,
							message: [
								{
									id: 1,
									title: '我爱凤凰',
									des: '看到我大凤凰执法效率是真的高，为我大凤凰交警点赞',
									time: '10分钟前',
									img: require('../../../../static/serviceCloud/default.png')
								}
							]
						}
					},
					{
						id: 3,
						comment: '99',
						like: '24',
						title: '南华社区元旦期间，县领导走进社区慰问',
						desc: '2020-12-25南华社区元旦期间，县领导走进社区慰问',
						from: '交警大队',
						status: '已处理',
						time: '2020-12-25',
						img: require('../../../../static/serviceCloud/default.png'),
						handled: {
							name: '处罚结果',
							title: '南华社区元旦期间，县领导走进社区慰问',
							handleTime: '2020年10月06日 10:15',
							handleAgency: '凤凰县公安局交警二大队',
							img: [
								require('../../../../static/serviceCloud/default.png'),
								require('../../../../static/serviceCloud/default.png')
							],
							evaluateFraction: null,
							isThumb: false,
							message: [
								{
									id: 1,
									title: '我爱凤凰',
									des: '看到我大凤凰执法效率是真的高，为我大凤凰交警点赞',
									time: '10分钟前',
									img: require('../../../../static/serviceCloud/default.png')
								},
								{
									id: 2,
									title: '我的家乡凤凰',
									des: '看到我大凤凰执法效率是真的高，为我大凤凰交警点赞',
									time: '20分钟前',
									img: require('../../../../static/serviceCloud/default.png')
								}
							]
						}
					},
					{
						id: 4,
						comment: '99',
						like: '24',
						title: '建议古城提供更多的本地特色演出',
						desc: '2020-12-25建议古城提供更多的本地特色演出',
						from: '交警大队',
						status: '已处理',
						time: '2020-12-25',
						img: require('../../../../static/serviceCloud/default.png'),
						handled: {
							name: '处罚结果',
							title: '建议古城提供更多的本地特色演出',
							handleTime: '2020年10月06日 10:15',
							handleAgency: '凤凰县公安局交警二大队',
							img: [
								require('../../../../static/serviceCloud/default.png'),
								require('../../../../static/serviceCloud/default.png')
							],
							evaluateFraction: null,
							isThumb: false,
							message: [
								{
									id: 1,
									title: '我爱凤凰',
									des: '看到我大凤凰执法效率是真的高，为我大凤凰交警点赞',
									time: '2020-11-02 12:00:00',
									img: require('../../../../static/serviceCloud/default.png')
								}
							]
						}
					}
				]
			};
		},
		onLoad(options) {
			if (this.from === 5.8) {
              this.isExpose = true
			}
		},
		methods: {
			changeTab(index) {
				this.current = index
			}
		}
	}
</script>

<style>
</style>
