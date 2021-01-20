<template>
	<view class="serviceCloud-container">
		<nav-bar :isBack="isBack" title="云上服务" :messageList="messageList" :rightMsg="true"></nav-bar>
		<view class="content">
			<!-- 办事分类 -->
			<view class="work">
				<sub-title :msg="workSub" title="办事分类"></sub-title>
				<view class="msg">
					<u-grid :col="3">
						<u-grid-item v-for="(item, index) of workList" :key="index" @click="goPath(item.url, '办事分类')">
							<image :src="item.icon" class="workIcon"></image>
							<view class="grid-text">{{ item.name }}</view>
						</u-grid-item>
					</u-grid>
				</view>
			</view>
			<!-- 热门服务 -->
			<view class="hotService">
				<sub-title :msg="serviceSub" title="热门服务"></sub-title>
				<view class="msg">
					<view class="hot-card">
						<u-cell-group v-for="(item, index) of serviceList" :key="index">
							<u-cell-item :title="item.name" :arrow="false" center @click="goPath(item.name + item.id)">
								<image src="../../../static/serviceCloud/arrow.svg" slot="right-icon" class="up"></image>
							</u-cell-item>
							<u-line color="#EDEDED" length="630" margin="0rpx auto" v-if="index !== serviceList.length - 1" />
						</u-cell-group>
					</view>
				</view>
			</view>
			<!-- 全民参与 -->
			<view class="join">
				<sub-title :msg="joinSub" title="全民参与"></sub-title>
				<view class="msg">
					<u-grid :col="4">
						<u-grid-item v-for="(item, index) of joinList" :key="index" @click="goPath(item.url, item.name)">
							<image :src="item.icon" class="workIcon"></image>
							<view class="grid-text">{{ item.name }}</view>
						</u-grid-item>
					</u-grid>
				</view>
			</view>
			<!-- 共同参与 -->
			<view class="reward">
				<sub-title :msg="rewardSub" title="共同参与"></sub-title>
				<view class="msg noPadding"><swiperList :list="rewardList" :effect3d="true" :autoplay="false" effect3dPreviousMargin="40"></swiperList></view>
			</view>
			<!-- 信息 -->
			<view class="infomation">
				<sub-title :msg="infoSub" title="信息"></sub-title>
				<view class="msg" style="padding-top: 0px;">
					<v-tabs
						v-model="current"
						auto
						:tabs="list"
						@change="changeTab"
						lineColor="#206CFE"
						activeColor="#206CFE"
						color="#262626"
						height="44px"
						fontSize="32rpx"
						activeFontSize="36rpx"
						:lineScale="0.2"
						lineHeight="3.4px"
					></v-tabs>
					<view class="info-box">
						<List :list="policyList" v-if="current === 0" :showDes="true" from="信息"></List>
						<List :list="noticeList" v-if="current === 1" :showDes="true" from="信息"></List>
						<List :list="hotList" v-if="current === 2" :showDes="true" from="信息"></List>
					</view>
				</view>
			</view>
		</view>
		<view class="enter u-flex" @click="enter">
			<image src="../../../static/serviceCloud/camera_icon.svg"></image>
			<text class="u-icon-name">全民治理</text>
		</view>
		<TakePhoto :sourceType="sourceType" :sizeType="sizeType" :count="count" ref="takePhoto" from="enter" :sourceTypeIndex="0"></TakePhoto>
	</view>
</template>

<script>
import subTitle from './components/SubTitle.vue';
import List from './components/List.vue';
import vTabs from '@/components/v-tabs/v-tabs.vue';
import TakePhoto from './components/TakePhoto.vue';
import swiperList from './components/swiperList.vue';
export default {
	components: {
		subTitle,
		List,
		vTabs,
		TakePhoto,
		swiperList
	},
	data() {
		return {
			//全民治理
			sourceType: ['拍照'],
			sizeType: ['原图'],
			count: [1, 2, 3, 4, 5],
			imageList: [],
			isBack: false,
			messageList: [
				{
					name: '消息中心',
					icon: require('../../../static/serviceCloud/msg_icon.svg'),
					path: '/pages/message/index'
				},
				{
					name: '我的爆料',
					icon: require('../../../static/serviceCloud/expose_icon.svg'),
					path: '/pages/tabBar/serviceCloud/brokeNews/index'
				},
				{
					name: '我的申请',
					icon: require('../../../static/serviceCloud/apply_icon.svg')
				}
			],
			// 办事分类
			workSub: {
				url: '/pages/tabBar/serviceCloud/address/index',
				left: {
					name: '办事分类'
				},
				right: {
					hasIcon: true,
					name: '常用办事地址查询'
				}
			},
			// 热门服务
			serviceSub: {
				url: '/pages/tabBar/serviceCloud/moreInfo/index',
				left: {
					name: '热门服务'
				},
				right: {
					hasIcon: true,
					name: '更多'
				}
			},
			// 全民参与
			joinSub: {
				url: '/pages/tabBar/serviceCloud/address/index',
				left: {
					name: '全民参与 共同治理',
					icon: require('../../../static/serviceCloud/join_icon.svg')
				},
				right: {
					arrow: false,
					hasIcon: true,
					name: '常用办事地址查询',
					icon: require('../../../static/serviceCloud/location-icon.svg')
				}
			},
			//参与得奖励
			rewardSub: {
				url: '/pages/tabBar/serviceCloud/expose/index',
				left: {
					name: '共参与 得奖励',
					icon: require('../../../static/serviceCloud/reward_icon.svg')
				},
				right: {
					arrow: false,
					hasIcon: true,
					name: '更多',
					icon: ''
				}
			},
			//信息
			infoSub: {
				url: '/人在庐中坐 天下知三分',
				left: {
					name: '人在庐中坐 天下知三分',
					icon: require('../../../static/serviceCloud/info_icon.svg')
				},
				right: {
					arrow: false,
					hasIcon: false,
					name: '',
					icon: ''
				}
			},
			// 办事分类列表
			workList: [
				{
					name: '个人办事',
					url: '/pages/tabBar/serviceCloud/moreInfo/index?title=个人办事',
					icon: require('../../../static/serviceCloud/work_icon1.svg')
				},
				{
					name: '法人办事',
					url: '/pages/tabBar/serviceCloud/moreInfo/index?title=法人办事',
					icon: require('../../../static/serviceCloud/work_icon2.svg')
				},
				{
					name: '部门办事',
					url: '/pages/tabBar/serviceCloud/moreInfo/index?title=部门办事',
					icon: require('../../../static/serviceCloud/work_icon3.svg')
				}
			],
			//服务列表
			serviceList: [
				{
					id: 0,
					name: '机动车驾驶证核发、审验',
					num: '568'
				},
				{
					id: 1,
					name: '机动车检验合格标志核发',
					num: '678'
				},
				{
					id: 2,
					name: '机动车登记',
					num: '78'
				},
				{
					id: 3,
					name: '城居慢性病注册',
					num: '1678'
				}
			],
			joinList: [
				{
					name: '投诉建议',
					url: '/pages/tabBar/serviceCloud/complaint/index',
					icon: require('../../../static/serviceCloud/join_icon1.svg')
				},
				{
					name: '咨询',
					url: '/pages/tabBar/serviceCloud/complaint/index',
					icon: require('../../../static/serviceCloud/join_icon2.svg')
				},
				{
					name: '调解',
					url: '/pages/tabBar/serviceCloud/complaint/index',
					icon: require('../../../static/serviceCloud/join_icon3.svg')
				},
				{
					name: '爆料',
					url: '/pages/tabBar/serviceCloud/complaint/index',
					icon: require('../../../static/serviceCloud/join_icon4.svg')
				}
			],
			// 全民治理切换
			list: ['政务解读', '公告通知', '热点资讯'],
			current: 0,
			policyList: [
				{
					id: 0,
					comment: '999',
					title: '12月28日省政府常务会议：部署应对低温雨雪天气、保电保供等工作',
					from: '湖南省人民政府门户网站',
					time: '2020-12-29',
					img: require('../../../static/serviceCloud/mock/policy1.png')
				},
				{
					id: 1,
					comment: '999',
					title: '毛伟明主持召开省政府常务会议 研究部署生态环境突出问题整改等工作',
					from: '湖南省人民政府门户网站',
					time: '2020-12-07',
					img: require('../../../static/serviceCloud/mock/policy2.png')
				},
				{
					id: 2,
					comment: '94',
					title: '省人大常委会党组、省政府党组和省政协党组分别召开会议 贯彻省委十一届十二次全会精神',
					from: '湖南省人民政府门户网站',
					time: '2020-12-02',
					img: require('../../../static/serviceCloud/mock/policy3.png')
				}
			],
			noticeList: [
				{
					id: 0,
					comment: '999',
					title: '2020年残疾人就业扶贫示范基地和残疾人阳光致富示范户（带头人）名册',
					from: '县残联',
					time: '2020-12-28',
					img: require('../../../static/serviceCloud/mock/notice1.png')
				},
				{
					id: 1,
					comment: '999',
					title: '关于落实2020年重点民生实事项目完成情况的公示',
					from: '县民政局',
					time: '2020-12-28',
					img: require('../../../static/serviceCloud/mock/notice2.png')
				},
				{
					id: 2,
					comment: '94',
					title: '十二届县委第十轮巡察公告',
					from: '中共凤凰县委巡察工作领导小组办公室',
					time: '2020-12-24',
					img: require('../../../static/serviceCloud/mock/notice3.png')
				}
			],
			hotList: [
				{
					id: 0,
					comment: '999',
					title: '凤凰县举行2020年“体彩杯”第三届南方长城登高活动',
					from: '凤凰县职业中专学校',
					time: '2020-12-28',
					img: require('../../../static/serviceCloud/mock/hot1.png')
				},
				{
					id: 1,
					comment: '999',
					title: '凤凰县“三个规范”提升古城品质',
					from: '县政府办',
					time: '2020-12-25',
					img: require('../../../static/serviceCloud/mock/hot2.png')
				},
				{
					id: 2,
					comment: '94',
					title: '凤凰县新场镇民政工作暖人心',
					from: '新场镇人民政府',
					time: '2020-12-24',
					img: require('../../../static/serviceCloud/default.png')
				}
			],
			rewardList: [
				{
					id: 0,
					comment: '999',
					like: '20',
					title: '南华门附近路灯损坏，夜间行走影响安全',
					from: '交警大队',
					status: '已处理',
					time: '2020-12-25',
					img: require('../../../static/serviceCloud/default.png'),
					handled: {
						title: '南华门附近路灯损坏，夜间行走影响安全',
						handleTime: '2020年10月26日 10:15',
						handleAgency: '凤凰县公安局交警一大队',
						img: [require('../../../static/serviceCloud/default.png'), require('../../../static/serviceCloud/default.png')],
						evaluateFraction: null,
						isThumb: false,
						message: [
							{
								id: 1,
								title: '我爱凤凰',
								des: '看到我大凤凰执法效率是真的高，为我大凤凰交警点赞',
								time: '30分钟前',
								img: require('../../../static/serviceCloud/default.png')
							},
							{
								id: 2,
								title: '我的家乡凤凰',
								des: '看到我大凤凰执法效率是真的高，为我大凤凰交警点赞',
								time: '30分钟前',
								img: require('../../../static/serviceCloud/default.png')
							}
						]
					}
				},
				{
					id: 2,
					comment: '99',
					like: '22',
					title: 'XX酒店元旦假期期间，哄抬物价',
					from: '交警大队',
					status: '已处理',
					time: '2020-12-25',
					img: require('../../../static/serviceCloud/default.png'),
					handled: {
						title: 'XX酒店元旦假期期间，哄抬物价',
						handleTime: '2020年10月06日 10:15',
						handleAgency: '凤凰县公安局交警二大队',
						img: [require('../../../static/serviceCloud/default.png'), require('../../../static/serviceCloud/default.png')],
						evaluateFraction: null,
						isThumb: false,
						message: [
							{
								id: 1,
								title: '我的家乡凤凰',
								des: '看到我大凤凰执法效率是真的高，为我大凤凰交警点赞',
								time: '30分钟前',
								img: require('../../../static/serviceCloud/default.png')
							}
						]
					}
				},
				{
					id: 2,
					comment: '99',
					like: '24',
					title: 'XX停车场，收费贵',
					from: '交警大队',
					status: '已处理',
					time: '2020-12-25',
					img: require('../../../static/serviceCloud/default.png'),
					handled: {
						title: 'XX停车场，收费贵',
						handleTime: '2020年10月06日 10:15',
						handleAgency: '凤凰县公安局交警二大队',
						img: [require('../../../static/serviceCloud/default.png'), require('../../../static/serviceCloud/default.png')],
						evaluateFraction: null,
						isThumb: false,
						message: [
							{
								id: 1,
								title: '我爱凤凰',
								des: '看到我大凤凰执法效率是真的高，为我大凤凰交警点赞',
								time: '10分钟前',
								img: require('../../../static/serviceCloud/default.png')
							}
						]
					}
				},
				{
					id: 3,
					comment: '99',
					like: '24',
					title: '南华社区元旦期间，县领导走进社区慰问',
					from: '交警大队',
					status: '已处理',
					time: '2020-12-25',
					img: require('../../../static/serviceCloud/default.png'),
					handled: {
						title: '南华社区元旦期间，县领导走进社区慰问',
						handleTime: '2020年10月06日 10:15',
						handleAgency: '凤凰县公安局交警二大队',
						img: [require('../../../static/serviceCloud/default.png'), require('../../../static/serviceCloud/default.png')],
						evaluateFraction: null,
						isThumb: false,
						message: [
							{
								id: 1,
								title: '我爱凤凰',
								des: '看到我大凤凰执法效率是真的高，为我大凤凰交警点赞',
								time: '1小时前',
								img: require('../../../static/serviceCloud/default.png')
							}
						]
					}
				},
				{
					id: 4,
					comment: '99',
					like: '24',
					title: '建议古城提供更多的本地特色演出',
					from: '交警大队',
					status: '已处理',
					time: '2020-12-25',
					img: require('../../../static/serviceCloud/default.png'),
					handled: {
						title: '建议古城提供更多的本地特色演出',
						handleTime: '2020年10月06日 10:15',
						handleAgency: '凤凰县公安局交警二大队',
						img: [require('../../../static/serviceCloud/default.png'), require('../../../static/serviceCloud/default.png')],
						evaluateFraction: null,
						isThumb: false,
						message: [
							{
								id: 1,
								title: '我爱凤凰',
								des: '看到我大凤凰执法效率是真的高，为我大凤凰交警点赞',
								time: '20分钟前',
								img: require('../../../static/serviceCloud/default.png')
							}
						]
					}
				}
			],
			//List2参数
			from: 3.8,
			offset: 0.2
		};
	},
	methods: {
		// 页面跳转
		goPath(url, from) {
			if (from === '办事分类') {
				uni.navigateTo({
					url: url
				});
			} else if (from === '投诉建议' || from === '咨询' || from === '调解' || from === '爆料') {
				uni.navigateTo({
					url: url + '?title=' + from
				});
			}
		},
		changeTab(index) {
			this.current = index;
		},
		enter() {
			console.log('快速进入...');
			this.$refs.takePhoto.chooseImage();
		}
	}
};
</script>

<style lang="less" scoped>
.serviceCloud-container {
	background-color: #ffffff;
	min-height: calc(100vh - 56rpx - 50px);
	font-family: SourceHanSansCN, SourceHanSansCN-Normal;
}
.enter {
	width: 140rpx;
	height: 140rpx;
	background-color: rgba(32,108,254,1);
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 100%;
	box-shadow: 0px 4rpx 40rpx rgba(0, 64, 187, 0.45);
	position: fixed;
	right: 24rpx;
	bottom: 160rpx;
	z-index: 10;
	uni-image {
		width: 48rpx;
		height: 48rpx;
		margin-top: 24rpx;
	}
	.u-icon-name {
		color: #ffffff;
		word-wrap: break-word;
		word-break: break-all;
		margin-top: 8rpx;
		font-size: 26rpx;
		padding: 0 14rpx;
		height: 26rpx;
		font-weight: bold;
		font-family: SourceHanSansCN, SourceHanSansCN-Normal;
		line-height: 36rpx;
	}
}
// 办事分类
.workIcon {
	width: 138rpx;
	height: 134rpx;
}
.up {
	width: 6px;
	height: 10px;
	margin-left: 20rpx;
}
.grid-text {
	font-size: 26rpx;
	// margin-top: 20rpx;
	color: rgba(0, 0, 0, 0.7);
	font-family: SourceHanSansCN, SourceHanSansCN-Normal;
	font-weight: 500;
	line-height: 40rpx;
}
/deep/.u-grid-item-box {
	padding: 28rpx 0 !important;
}
.content {
	// padding: 20rpx;
	padding-bottom: 20rpx;
}
.msg {
	padding: 24rpx;
	background-color: #ffffff;
	.u-grid {
		box-shadow: 0px 4rpx 30rpx rgba(60, 61, 68, 0.09);
		border-radius: 20rpx;
		/deep/.u-grid-item:first-child {
			border-top-left-radius: 20rpx;
			border-bottom-left-radius: 20rpx;
		}
		/deep/.u-grid-item:last-child {
			border-top-right-radius: 20rpx;
			border-bottom-right-radius: 20rpx;
		}
	}
}
.hot-card {
	box-shadow: 0px 4rpx 30rpx rgba(60, 61, 68, 0.09);
	border-radius: 20rpx;
	/deep/.u-cell-box :first-child {
		border-top-left-radius: 20rpx;
		border-bottom-left-radius: 20rpx;
	}
	/deep/.u-cell-box:last-child {
		border-top-right-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
	}
	/deep/.u-cell_title {
		font-size: 32rpx;
		color: #333333;
		height: 32rpx;
		line-height: 32rpx;
		font-family: SourceHanSansCN, SourceHanSansCN-Normal;
	}
	/deep/.u-cell {
		padding: 40rpx 30rpx;
		line-height: 48rpx;
	}
}
/deep/.u-border-bottom:after {
	border-width: 0px;
}
.hotService {
	/deep/.u-cell_title {
		font-size: 32rpx;
		color: #333333;
		line-height: 48rpx;
		font-family: SourceHanSansCN, SourceHanSansCN-Normal;
	}
	/deep/.u-cell-box:first-child {
		.u-cell-item-box {
			border-top-left-radius: 40rpx;
			border-top-right-radius: 40rpx;
		}
	}
	/deep/.u-cell-box:last-child {
		border-bottom: 0px;
		.u-cell-item-box {
			border-bottom-left-radius: 40rpx;
			border-bottom-right-radius: 40rpx;
		}
	}
}
.info-box {
	background-color: #ffffff;
}
/deep/.v-tabs__item {
	text-align: left;
	justify-content: left !important;
	padding-bottom: 20rpx !important;
}
.noPadding {
	padding-left: 0px;
	padding-right: 0px;
	padding-top: 0px;
}
/deep/.u-cell-hover {
	background-color: #ffffff !important;
}
/deep/.v-tabs__line {
	background-color: transparent !important;
	background: url('../../../static/mine/line.png') 0px 0px no-repeat;
	background-size: 100% 100%;
}
</style>
