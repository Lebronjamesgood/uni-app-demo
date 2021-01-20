<template>
	<view class="container">
		<uni-nav-bar :status-bar="false" :fixed="true" :color="txtColor" :shadow="shadow" :backgroundColor="bgColor">
			<view slot="left">
				<view class="left-bar">
					<text>凤凰县</text>
					<u-icon size="24" name="arrow-down"></u-icon>
				</view>
				<view class="cloud"><text style="font-size: 13px;">12-18℃ 多云</text></view>
			</view>
			<view class="uni-nav-center">
				<u-search bg-color="#DDD5E5" placeholder="请输入查询内容" :disabled="true" @click="search" :show-action="false">	
				</u-search>
				</view>
			<view slot="right">
				<view class="erwe-code" @click="saoma"><image src="../../../static/home/saoyisao.png" mode="" /></view>
			</view>
		</uni-nav-bar>
		<view class="wrap"><u-swiper height="448" :list="list"></u-swiper></view>
		<view class="main">
			<view class="main-contaioner">
				<view class="wrap">
					<view class="wrap-part">
						<image src="../../../static/home/work.png" mode="" />
						<text class="txt work">办事不求人</text>
					</view>
					<view class="wrap-part">
						<image src="../../../static/home/service.png" mode="" />
						<text class="txt service">服务更贴心</text>
					</view>
					<view class="wrap-part">
						<image src="../../../static/home/life.png" mode="" />
						<text class="txt">生活更轻松</text>
					</view>
				</view>
				<view class="notice">
					<view class="notice-img"><image src="../../../static/home/notice.png" mode=""></image></view>
					<view class="notice-wrap">
						<u-notice-bar mode="vertical" bg-color="#ffffff" color="rgba(0,0,0,0.70)" :volume-icon="false" font-size="24" :list="notice_List"></u-notice-bar>
					</view>
				</view>
			</view>
			<view class="footer">
				<view class="tab-wrap">
					<view class="tab-list">
						<view class="tab-text" @click="changeTab(index)" v-for="(item, index) in tab_list" :key="index">
							<text :class="activeIndex === index ? 'active' : ''">{{ item.name }}</text>
							<view class="active-line" v-if="activeIndex === index"><image src="../../../static/mine/line.png" mode=""></image></view>
							<view class="active-line" v-else></view>
						</view>
					</view>
					<view class="tab-content">
						<view class="tab-content-li" v-for="(item, index) in tab_content[activeIndex]" :key="index">
							<view class="tab-content-right">
								<view class="tabs-content-top">
									<view class="tab-content-top">
										<text>{{ item.title }}</text>
									</view>
								<view class="tab-content-left"><u-image width="100%" border-radius="8" height="100%" :src="item.imgSrc" mode=""></u-image></view>
								</view>
								<view class="tab-content-bottom">
									<view class="title comment">
										<text class="source">{{item.source}}</text>
										
										<view class="count">
											<text>{{ item.comment }}</text>
											<image src="../../../static/mine/line.png" mode=""></image>
										</view>
										<text class="name">评论</text>
									</view>
									<view class="comment title">
										<!-- <u-icon name="chat"></u-icon> -->
											<text>{{ item.time }}</text>
									</view>

								</view>
							</view>

						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			border: true,
			activeIndex: 0,
			asdassa:"",
			bgColor: 'rgba(41,121,255,0)',
			shadow: false,
			txtColor: '#ffffff',
			imgSrc: require('../../../static/home/saoyisao.png'),
			statusSrc: require('../../../static/home/saoyisao.png'),
			changeSrc: require('../../../static/home/saoyisao_s.png'),
			list: [
				{
					image: require('../../../static/home/swiper4.png')
				},
				{
					image: require('../../../static/home/swiper1.png')
				},
				{
					image: require('../../../static/home/swiper2.png')
				},
				{
					image: require('../../../static/home/swiper3.png')
				}
			],
			notice_List: [
				'凤凰县 "三个立足" 提升旅游接待能力',
				'凤凰：扎实做好学校低温雨雪冰冻天',
				'"神秘湘西过大年" 名族年俗王文华活动新闻发布会在长沙举行',
				'湘西民族文化景区景点智能导游系统在凤凰县全面实施',
				'凤凰县法律援助中心为农名工撑起一片法制蓝天'
			],
			tab_list: [
				{
					name: '政策解读'
				},
				{
					name: '公告通知'
				},
				{
					name: '本地咨询'
				}
			],
			tab_content: [
				[{
					title: '李克强签署国务院令 公布《政府督查工作条例》',
					source:"新华社",
					time: '2020-12-29',
					comment: '99+',
					imgSrc:require('../../../static/home/1.png')
				},
				{
					title: '李克强同阿尔及利亚总理拉德通电话',
					time: '2020-12-28',
					source:"中国政府网",
					comment: '24+',
					imgSrc:require('../../../static/home/2.png')
				},
				{
					title: '王毅同意大利外长迪马约举行视频会晤',
					time: '2020-12-29',
					source:"新华社",
					comment: '29+',
					imgSrc:require('../../../static/home/3.png')
				}],
				[{
					title: '凤凰县人民政府办公室关于2021年“元旦” 节放假的通知',
					time: '2020-12-30',
					source:"县政府办",
					comment: '89+',
					imgSrc:require('../../../static/home/4.png')
				},
				{
					title: '凤凰县沱江镇十里牌村公共服务平台新建工程招标中候选人公示',
					time: '2020-12-29',
					source:"凤凰县沱江镇人民政府",
					comment: '34+',
					imgSrc:require('../../../static/home/5.png')
				},
				{
					title: '凤凰县沱江镇巨里冲（原水泥厂）道路工程中候选人公示',
					time: '2020-12-29',
					source:"凤凰县住房和城乡建设局",
					comment: '18+',
					imgSrc:require('../../../static/home/6.png')
				}],
				[{
					title: '凤凰城管：持续整治人行道消防通道车辆违停行为  坚决打赢交通问题顽瘴痼疾整治攻坚战',
					time: '2020-12-29',
					source:"县执法局",
					comment: '20+',
					imgSrc:require('../../../static/home/7.png')
				},
				{
					title: '吉信镇：清除卫生死角 整治脏乱差',
					time: '2020-12-24',
					source:"吉信镇人民政府",
					comment: '23+',
					imgSrc:require('../../../static/home/8.png')
				},
				{
					title: '凤凰县医保局召开医保电子卡注册培训会',
					time: '2020-12-28',
					source:"凤凰县医疗保障局",
					comment: '45+',
					imgSrc:require('../../../static/home/9.png')
				}]
			]
		};
	},
	methods: {
		onPageScroll(e) {
			this.bgColor = 'rgba(41,121,255,' + e.scrollTop / 300 + ')';
		},
		search() {
			uni.navigateTo({
				url: '/pages/common/homeSearch'
			});
		},
		changeTab(index) {
			this.activeIndex = index;
		},
		saoma() {
			uni.scanCode({
				success: function(res) {
					console.log('条码类型：' + res.scanType);
					console.log('条码内容：' + res.result);
				}
			});
		}
	},
	onPullDownRefresh() {
		console.log('refresh');
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	}
};
</script>

<style lang="less" scoped>
page {
	overflow-y: auto;
}
@import '../../../common/css/home.css';
.main {
	position: absolute;
	top: 374rpx;
}
.container {
	position: relative;
	/deep/ .uni-swiper-wrapper {
		border-bottom-left-radius: 40rpx;
		border-bottom-right-radius: 40rpx;
	}
	.main-contaioner {
		border-radius: 20rpx;
		box-shadow: 0px 8rpx 64rpx 0px rgba(26, 33, 73, 0.09);
		width: 710rpx;
		height: 264rpx;
		margin: 20rpx;
		.notice {
			display: flex;
			align-items: center;
			background-color: #ffffff;
			padding: 0 30rpx;
			border-radius: 10px;
			/deep/ .u-notice-bar {
				text-indent: 14rpx;
				padding-left: 0;
			}
			.notice-img {
				width: 130rpx;
				height: 28rpx;
				line-height: 26rpx;
			}
			.notice-wrap {
				width: 594rpx;
			}
		}
		.wrap {
			display: flex;
			justify-content: space-around;
			background: #ffffff;
			align-items: center;
			padding: 30rpx;
			border-radius: 20rpx;
			width: 100%;

			.wrap-part {
				// display: flex;
				// flex-direction: column;
				position: relative;
				.txt {
					color: #999999;
					margin-top: 10rpx;
					font-size: 28rpx;
					position: absolute;
					left: 20rpx;
				}
				.work {
					color: #3e57b7;
				}
				.service {
					color: #9a6944;
				}
				.life {
					color: #3a7c7f;
				}
				image {
					width: 208rpx;
					height: 136rpx;
				}
			}
		}
	}
	.footer {
		padding: 20rpx;
		.tab-wrap {
			background: #ffffff;
			border-radius: 10rpx;

			.tab-list {
				display: flex;
				align-items: center;
				padding-top: 20rpx;
				justify-content: left;
				padding-left: 10rpx;
				.tab-text:nth-child(1) {
					margin-right: 116rpx;
				}
				.tab-text:nth-child(2) {
					margin-right: 116rpx;
				}
				.tab-text {
					// margin-right: 100rpx;
					padding-bottom: 10rpx;
					cursor: pointer;
					text {
						font-size: 36rpx;
					}
				}
				.active {
					// border-bottom: 2px solid #2e89ff;
					color: #206cfe;
					font-weight: 550;
				}
				.active-line {
					width: 44rpx;
					height: 8rpx;
					margin: 0 auto;
				}
			}
			.tab-content {
				padding: 10rpx;
				.tab-content-li {
					margin: 20rpx 0;
					padding: 20rpx 0;
					justify-content: space-between;
					display: flex;
					border-bottom: 1px solid #f2f2f2;
					.tab-content-left {
						width: 240rpx;
						height: 140rpx;
						image {
							border-radius: 10rpx;
						}
					}
					.tab-content-right {
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						margin-left: 10rpx;
						.tabs-content-top{
							display: flex;
						}
						.tab-content-top {
							width: 426rpx;
							margin-right: 24rpx;
							text {
								color: #262626;
								font-weight: 500;
							}
						}
						.tab-content-bottom {
							display: flex;
							justify-content: space-between;
							align-items: flex-start;
							margin-top: 20rpx;
							.title {
								.source{
									margin-right: 24rpx;
								}
								text {
									font-size: 26rpx;
									color: #868c96;
									line-height: 20px;
									font-family: SourceHanSansCN, SourceHanSansCN-Normal;
								}
							}
							.comment {
								display: flex;
								justify-content: flex-end;
								.count {
									display: flex;
									flex-direction: column;
									align-items: center;
									margin-right: 6rpx;
									text {
										font-size: 24rpx;
										color: #36383a;
										font-weight: 500;
									}
									image {
										width: 24rpx;
										height: 4rpx;
									}
								}
								.name {
									font-size: 24rpx;
									color: #36383a;
									font-weight: normal;
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>
