<template>
	<view class="detail-container" :class="from==='爆料'? 'brokeNews-container' : 'exposeNews-container' ">
		<view class="detail">
			<view class="incident infomation">
				<view class="head">
					<text class="title">
						{{detail.title}}
					</text>
					<text class="status">
						{{detail.status}}
					</text>
				</view>
				<view class="time">
					{{detail.time}}
				</view>
				<view class="desc">
					{{detail.desc}}
				</view>
				<view class="avatar">
					<image :src="detail.img" mode=""></image>
				</view>
			</view>
			<u-line color="#F2F2F2" class="line"/>
			<view class="handle infomation">
				<view class="head">
					<text class="title">
						{{detail.handled.name}}
					</text>
				</view>
				<view class="time">
					{{detail.handled.handleTime}}
				</view>
				<view class="desc">
					{{detail.handled.title}}
				</view>
				<view class="avatar">
					<image :src="detail.img" mode="" v-for="(item,index) of detail.handled.img" :key="index"></image>
				</view>
				<view class="from">
					{{detail.handled.handleAgency}}
				</view>
			</view>
			<view class="commentLike-action" v-if="from === '曝光台'">
				<u-line color="#F2F2F2" class="line"/>
				<view class="isTaskLike">
					<view class="info" @click="editComment">
						<image src="../../../../static/serviceCloud/comm-icon.svg"/>
						<view class="txt">{{detail.comment}}</view>
					</view>
					<view class="info" @click="isTaskLike" >
						<image src="../../../../static/serviceCloud/like.svg" v-if="!isThumb"/>
						<image src="../../../../static/serviceCloud/like-cur.svg" v-else/>
						<view class="txt">{{detail.like}}</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 爆料评价 -->
		<view class="evaluate" v-if="from ==='爆料'&&isSubmit">
			评价结果
		<text>
			{{ evaluateValue === 0 ? '非常不满意' : evaluateValue === 1 ? '不满意' : evaluateValue === 2 ? '比较满意': evaluateValue === 3 ? '满意' :evaluateValue === 4 ? '非常满意，无可挑剔': '' }}
		</text>
	    </view>
		<view class="commit" v-if="from === '爆料'&&!isSubmit">
			<button type="primary" @click="toEvaluate">评价</button>
		</view>
		<!-- 曝光台评论列表 -->
		<view class="comment-list" v-if="from === '曝光台'">
			曝光台评论列表
			<view class="item"  v-for="(item, index) of detail.handled.message" :key="index">
				<view class="info">
					<image :src="item.img"></image>
					<view class="right-info">
						<view class="head">
							<text class="title">
								{{item.title}}
							</text>
							<view class="time">{{item.time}}</view>
						</view>
						<view class="bottom">
							<text class="from">{{item.des}}</text>
						</view>
					</view>
				</view>
			</view>
			<u-popup v-model="show" mode="bottom" class="comment-box">
				<view class="head">
					<image src="../../../../static/serviceCloud/coment-close.svg" mode=""></image>
					<text class="title" @click="closeEdit">写评论</text>
					<text class="submit" @click="addMsg">提交</text>
				</view>
				<view class="edit">
					<textarea placeholder="请留下您对事件的评论~" maxlength="200" v-model="editMag" focus></textarea>
				</view>
			</u-popup>
		</view>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import navBar from '../components/NavBar.vue'
	export default {
		components: {
		   navBar
		},
		props: {
			detail: {
				type: Object,
				required: true,
				default: () => {}
			},
			isExpose: {
				type: Boolean,
				required: true,
				default: () => false
			},
			from: {
				type: String,
				required: true,
				default: () => ''
			},
			evaluateValue: {
				type: Number,
				required: true,
				default: () => 0
			},
			isSubmit: {
				type: Boolean,
				required: true,
				default: () => false
			},
		},
		data() {
			return {
				evalutList:[
					{imageUrl: require('../../../../static/serviceCloud/badFlower.svg'), sorce: 0,activeImage: require('../../../../static/serviceCloud/goodFlower.svg')},
					{imageUrl: require('../../../../static/serviceCloud/badFlower.svg'), sorce: 1,activeImage: require('../../../../static/serviceCloud/goodFlower.svg')},
					{imageUrl: require('../../../../static/serviceCloud/badFlower.svg'), sorce: 2,activeImage: require('../../../../static/serviceCloud/goodFlower.svg')},
					{imageUrl: require('../../../../static/serviceCloud/badFlower.svg'), sorce: 3,activeImage: require('../../../../static/serviceCloud/goodFlower.svg')},
					{imageUrl: require('../../../../static/serviceCloud/badFlower.svg'), sorce: 4,activeImage: require('../../../../static/serviceCloud/goodFlower.svg')},
				],
				activeIndex:null,
				modelShow: false,
				form: {
					content: ''
				},
				isThumb: false,
				show: false,
				editMag: ''
			};
		},
		onShow() {
			//是否点赞
			this.isThumb = this.detail.handled.isThumb
			uni.$on("evaluateValueEvent", res => {
			    console.log(res);
			    // 清除监听
			    uni.$off('evaluateValueEvent');
			})
		},
		methods: {
			editComment() {
				console.log('写评论...')
				this.show = true
				this.editMag = ''
			},
			closeEdit() {
				this.show = false
			},
			addMsg() {
				if (this.editMag === '') {
					this.$refs.uToast.show({
						title:'缺少评论',
						type: 'error'
					});
				} else {
					const params = {
						title: '新用户',
						img: require('../../../../static/serviceCloud/default.png'),
						des: this.fontNumber(this.editMag),
						time: '刚刚'
					}
					this.detail.handled.message.push(params)
					this.$refs.uToast.show({
						title:'已评论',
						type: 'success'
					});
					setTimeout(() => {
						this.show = false	
					}, 500)
					
				}
			},
			// 输入字符截取
			fontNumber (date) {
			  const length = date.length
			  if (length > 30) {
			    var str = ''
			    str = date.substring(0, 30) + '...'
			    return str
			  } else {
			    return date
			  }
			},
			// 系统时间
			getSystemTime() {
				var date = new Date();
				var YY = date.getFullYear() + '-'
				var MM = (date.getMonth() + 1 < 10
				          ? '0' + (date.getMonth() + 1)
				          : date.getMonth() + 1) + '-'
				var DD = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
				var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
				var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) +
				        ':'
				var ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
				return YY + MM + DD + ' ' + hh + mm + ss
			},
			toEvaluate () {
				uni.navigateTo({
					url: '/pages/tabBar/serviceCloud/brokeNews/evaluate/index'
				});
			},
			isTaskLike() {
				if (this.isThumb) {
					this.isThumb = false
					this.detail.like = this.detail.like - 1
				} else {
					this.isThumb = true
					this.detail.like = this.detail.like + 1
				}
			},
			addMessage() {
				// 写留言
				this.$refs.uToast.show({
					title:'留言功能待添加',
					type: 'info'
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	.detail-container {
		background-color: #F5F6F7;
		padding: 0rpx;
		.evaluate {
			width: 690rpx;
			background-color: #FFFFFF;
			border-radius: 20rpx;
			padding: 18rpx 30rpx;
			margin-top: 30rpx;
			font-size: 30rpx;
			color: #333333;
			font-family: SourceHanSansCN, SourceHanSansCN-Normal;
			font-weight: 500;
			uni-text {
				display: block;
				margin-top: 40rpx;
				font-size: 28rpx;
				color: #333333;
				font-weight: initial;
			}
		}
		.detail {
			width: 690rpx;
			background-color: #FFFFFF;
			border-radius: 20rpx;
			padding: 18rpx 30rpx;
			.line {
				margin-top: 18rpx !important;
				margin-bottom: 48rpx !important;
			}
			.infomation {
				.head {
					font-family: SourceHanSansCN, SourceHanSansCN-Normal;
					display: flex;
					.title {
						font-size: 30rpx;
						color: #333333;
						font-weight: 500;
						width: 476rpx;
						text-overflow: -o-ellipsis-lastline;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 1;
						line-clamp: 1;
						-webkit-box-orient: vertical;
					}
					.status {
						font-size: 30rpx;
						color: #558EFB;
						font-weight: 500;
						flex: 1;
						text-align: right;
					}
				}
				.time {
					font-size: 24rpx;
					color: #868C96;
					font-family: SourceHanSansCN, SourceHanSansCN-Normal;
					margin-top: 28rpx;
				}
				.desc {
					font-size: 28rpx;
					color: #333333;
					font-family: SourceHanSansCN, SourceHanSansCN-Normal;
					text-overflow: -o-ellipsis-lastline;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					line-clamp: 2;
					-webkit-box-orient: vertical;
					margin-top: 32rpx;
				}
				.from {
					font-size: 24rpx;
					color: #868C96;
					font-family: SourceHanSansCN, SourceHanSansCN-Normal;
				}
				.avatar {
					border-radius: 12rpx;
					margin-top: 30rpx;
					margin-bottom: 30rpx;
					display: flex;
					uni-image {
						width: 240rpx;
						height: 180rpx;
						border-radius: 12rpx;
						margin-right: 20rpx;
					}
					uni-image:last-child {
						margin-right: 0px;
					}
				}
			}
		}
		.commit{
			padding-bottom: 10rpx;
			position: fixed;
			bottom: 10px;
			left: 0px;
			right: 0px;
			background-color: #F5F6F7;
				button{
					width: 630rpx;
					height: 88rpx;
					// background: linear-gradient(90deg,#5ea8ff, #306ffe);
					background-color: #206CFE;
					border-radius: 44rpx;
					box-shadow: 0rpx 16rpx 32rpx 0rpx rgba(53,118,254,0.25);
					color: #FFFFFF;
					font-size: 32rpx;
					margin: 100rpx auto;
					margin-bottom: 0px;
				}
		}
	}
	.isTaskLike {
		display: flex;
		justify-content: center;
		align-items: center;
		.info {
			flex: 1;
			text-align: center;
		}
		uni-image {
			width: 48rpx;
			height: 48rpx;
		}
	}
	.comment-list {
		width: 690rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx;
		padding: 18rpx 30rpx;
		margin-top: 30rpx;
		.item {
			padding: 0px;
			margin-top: 52rpx;
			.info {
				display: flex;
				width: 100%;
				uni-image {
					width: 64rpx;
					height: 64rpx;
					border-radius: 50%;
					margin-right: 20rpx;
				}
				.right-info {
					flex: 1;
					.head {
						display: flex;
						.title {
							flex: 1;
							font-size: 28rpx;
							color: #999999;
							font-family: SourceHanSansCN, SourceHanSansCN-Normal;
						}
						.time {
							flex: 1;
							text-align: right;
							flex: 1;
							font-size: 28rpx;
							color: #999999;
							font-family: SourceHanSansCN, SourceHanSansCN-Normal;
						}
					}
					.bottom {
						margin-top:26rpx;
						.from {
							font-size: 30rpx;
							color: #333333;
							font-family: SourceHanSansCN, SourceHanSansCN-Normal;
							text-overflow: -o-ellipsis-lastline;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 2;
							line-clamp: 2;
							-webkit-box-orient: vertical;
						}
					}
				}
			}
		}
	}
	/deep/.comment-box {
		// height: 458rpx;
		padding: 34rpx 30rpx;
		uni-textarea {
			height: 342rpx;
			width: 100%;
			font-size: 30rpx;
			font-family: SourceHanSansCN, SourceHanSansCN-Normal;
		}
		/deep/.uni-textarea-placeholder {
			font-size: 30rpx;
			color: #B1B2B3;
			font-family: SourceHanSansCN, SourceHanSansCN-Normal;
		}
		.edit {
			padding-left: 34rpx;
			padding-right: 34rpx;
			padding-bottom: 30rpx;
		}
		.head {
			display: flex;
			justify-content: center;
			align-items: center;
			padding-left: 34rpx;
			padding-right: 34rpx;
			padding-top: 30rpx;
			margin-bottom: 34rpx;
			uni-image {
				width: 48rpx;
				height: 48rpx;
			}
			.title {
				font-size: 36rpx;
				color: #333333;
				font-weight: 500;
				font-family: SourceHanSansCN, SourceHanSansCN-Normal;
				flex: 1;
				text-align: center;
			}
			.submit {
				font-size: 30rpx;
				color: #999999;
				font-family: SourceHanSansCN, SourceHanSansCN-Normal;
			}
		}
	}
</style>
