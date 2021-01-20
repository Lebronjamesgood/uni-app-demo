<template>
	<view class="address">
		<!-- 办事地址 -->
		<!-- <nav-bar :isBack="isBack" :title="title" :messageList="messageList" :rightMsg="false" :showAction="true" :titleSize="22"></nav-bar> -->
	  <nav-bar :isBack="true" :title="title" searchMargin="0 0 0 32rpx"></nav-bar>
	   <view class="content">
		   <view class="item"  v-for="(item, index) of addressList" :key="index" @click="openLocation(item.loncation)">
			   <text class="title">
				   {{item.title}}
			   </text>
			   <view class="status">
				    <image src="../../../../static/serviceCloud/location-icon.png"></image>
				   <text>到这去</text>
			   </view>
			   <view class="info">
				   联系电话: <text>{{item.tel}}</text>
			   </view>
			   <view class="info">
			   		办公时间: <text>{{item.time}}</text>
			   </view>
			   <view class="info">
			   		地址:<text>{{item.address}}</text>
			   </view>
			  <!-- <view class="info">
			   		受理业务:<text>{{item.des}}</text>
			   </view> -->
			   <!-- 受理业务 s -->
			   <view class="info">
				   <text>受理业务:</text>
				   <!-- 受理业务: -->
				   <u-collapse @change="change" event-type="close" :arrow="true" :accordion="true">
				   		<u-collapse-item :title="item.des" :open="item.open" :disabled="false" @change="itemChange">
				   			{{item.moreDes}}
				   		</u-collapse-item>
				   	</u-collapse>
			   </view>
			   <!-- 受理业务 e -->
		   </view>
	   </view>
	</view>
</template>

<script>
	// import navBar from '../components/NavBar.vue'
	// import navBar from '../../../common/NavBar.vue';
	export default {
		components: {
		   // navBar
		},
		props: {},
		data() {
			return {
				// 标题
				isBack: true,
				messageList: [],
				list: [],
				title: '办事地址',
				addressList: [
					{
						title: '凤凰县公安局',
						tel: ' 0743-3502254',
						time: '周一至周五：9:00—17:00',
						address: '湘西土家族苗族自治州凤凰县沱江镇民俗园县政府服务中心公安窗口',
						des: '身份证办理，户籍办理，证明材料等',
						moreDes: '身份证办理，户籍办理，证明材料等',
						open: false,
						loncation: {
							latitude: 27.9518,
							longitude: 109.609523
						}
					},
					{
						title: '凤凰县民政局',
						tel: ' 0743-3221145',
						time: '周一至周五：上午8:00-12:00，下午14:30-17:30',
						address: '沱江镇红旗大道慈爱园7楼',
						des: '结婚证办理，离婚证办理、退伍办理、低保办理、五保户办理等',
						moreDes: '结婚证办理，离婚证办理、退伍办理、低保办理、五保户办理等',
						open: false,
						loncation: {
							latitude: 28.56394,
							longitude: 109.488429
						}
					},
					{
						title: '凤凰县人力资源和社会保障局',
						tel: '0743-12333',
						time: '周一至周五：夏季（7月1日—9月30日）：上午8:00—12:00，下午15:00—18:00；冬季（10月1日—次年6月30日）：上午8:00—12:00，下午14:30—17:30',
						address: '凤凰县沱江镇土桥路16号',
						des: '社保卡办理 社保办理 医疗保险办理 生育保险办理 养老保险办理 工伤保险办理',
						moreDes: '社保卡办理 社保办理 医疗保险办理 生育保险办理 养老保险办理 工伤保险办理',
						open: false,
						loncation: {
							latitude: 27.943911,
							longitude: 109.592009
						}
					},
					{
						title: '凤凰县办税服务厅',
						tel: '0743-3501692',
						time: '上午9:00-12:00，下午13:00-17:00',
						address: '湖南省凤凰县沱江镇凤凰南路81号',
						des: '',
						moreDes: '',
						open: false,
						loncation: {
							latitude: 27.949748,
							longitude: 109.593169
						}
					},
					{
						title: '凤凰县交警大队车管所',
						tel: '0743-3506369',
						time: '周一至周五上午8:00-12:00,下午13:00-17:00',
						address: '湘西土家族苗族自治州凤凰县土桥路',
						des: '汽车报废办理',
						moreDes: '汽车报废办理',
						open: false,
						loncation: {
							latitude: 27.930543,
							longitude:109.528799
						}
					}
				], 
			};
		},
		methods: {
			openLocation(item) {
				uni.openLocation({
				    latitude: item.latitude,
				    longitude: item.longitude,
				    success: function () {
				        // console.log('success');
				    }
				});
			},
			change(index) {
			},
			itemChange(e) {
			}
		}
	}
</script>

<style lang="less" scoped>
	.address {
		background-color: #F5F6F7;
		 // height: 100vh;
		.content {
			padding-left: 30rpx;
			padding-right: 30rpx;
			padding-top: 32rpx;
			padding-bottom: 32rpx;
			.item {
				padding-left: 30rpx;
				padding-right: 30rpx;
				background-color: #FFF;
				min-height: 200rpx;
				margin-bottom: 32rpx;
				position: relative;
				min-height: 332rpx;
				padding-top: 32rpx;
				padding-bottom: 32rpx;
				.title {
					font-size: 32rpx;
					color: #1D1D1D;
					text-overflow: -o-ellipsis-lastline;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					line-clamp: 1;
					-webkit-box-orient: vertical;
					line-height: 44rpx;
					width: 70%;
					font-weight: 500;
					font-family: SourceHanSansCN, SourceHanSansCN-Normal;
					margin-bottom: 32rpx;
				}
				.status {
					position: absolute;
					top: 30rpx;
					right: 30rpx;
					uni-image {
						width: 28rpx;
						height: 28rpx;
					}
					uni-text {
						color: #206CFE;
						font-size: 24rpx;
						line-height: 24rpx;
						text-align: left;
						margin-left: 16rpx;
					}
				}
				.info {
					font-size: 28rpx;
					color: #585858;
					margin-bottom: 16rpx;
					font-family: SourceHanSansCN, SourceHanSansCN-Normal;
					display: flex;
					uni-view {
						margin-right: 20rpx;
					}
					uni-text {
						// height: 40rpx;
						font-size: 28rpx;
						line-height: 40rpx;
						color: #585858;
						margin-left: 10rpx;
						flex: 1;
					}
				}
				.info:last-child {
					margin-bottom: 0px;
					height: auto;
					display: flex;
					justify-content: center;
					align-items: baseline;
					uni-text {
						flex: 0.3;
						margin-left: 0px;
					}
					.u-collapse {
						flex: 1;
						margin-right: 0px;
						width: 80%;
						/deep/.u-collapse-item {
							margin-right: 0px;
						}
						/deep/.u-collapse-head {
							padding: 0px;
						}
						/deep/.u-collapse-title {
							height: 40rpx;
							font-size: 28rpx;
							line-height: 40rpx;
							color: #585858;
						}
					}
					/deep/.uicon-arrow-down:before {
						color: #AFAFAF;
					}
				}
			}
		}
	}
</style>
