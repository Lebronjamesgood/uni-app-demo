<template>
	<view class="goods-title">
		<view class="vertical-line">
		</view>
		<view class="find-goods">
			<text>{{goodsTitle.title}}</text>
		</view>
		<view class="count-down" v-if="goodsTitle.showCountDown">
			<text>倒计时</text>
			<text style="down-bg">{{rels.split(":")[0] }} </text>:
			<text style="down-bg">{{rels.split(":")[1] }} </text>:
			<text style="down-bg">{{rels.split(":")[2]}}</text>
		</view>
		<view class="view-info" v-if="goodsTitle.showInfo">
			<text>分享，是一种生活态度!</text>
		</view>
		<view class="more">
			<text>更多</text>
			<u-icon color="#36383a;" name="arrow-right"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				interval: "",
				//倒计时
				rels: '12:00:00',
				mistiming: (12 * 60 * 60 * 1000),
			}
		},
		props: {
			goodsTitle: {
				type: Object,
				default: {
					title: "发现好货",
					showCountDown: false,
					showInfo: false,
				}
			}
		},
		mounted() {
			this.interval = setInterval(() => {
				this.mistiming -= 1000
				this.getTime()
			}, 1000)
		},
		onUnload() {
			clearInterval(this.interval)
		},
		methods: {
			getTime() {
				let hours = Math.floor(this.mistiming / 1000 / 60 / 60 % 24); // 获取小时
				let minutes = Math.floor(this.mistiming / 1000 / 60 % 60); //获取分钟数
				let seconds = Math.floor(this.mistiming / 1000 % 60); //获取秒数
				hours < 10 ? hours = "0" + hours : hours;
				minutes < 10 ? minutes = "0" + minutes : minutes;
				seconds < 10 ? seconds = "0" + seconds : seconds;
				this.rels = `${hours}:${minutes}:${seconds}`
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods-title {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		margin-top: 30px;
		margin-bottom: 15px;
		justify-content: space-between;
		padding-right: 10px;

		.find-goods uni-text {
			font-size: 18px;
			font-weight: 550;
			width: 72px;
			margin-left: 15px;
		}

		.view-info {
			font-weight: 400;
			text-align: left;
			color: #aaabab;
			font-size: 15px;
		}

		.count-down {
			color: #f73422;
			margin-left: 15px;

			uni-text {
				margin-left: 6px;
				font-weight: 550;

			}

			/deep/ uni-text:nth-child(2),
			/deep/ uni-text:nth-child(3),
			/deep/ uni-text:nth-child(4) {
				margin-right: 6px;
				background: rgba(247, 52, 17, 0.1);
				border-radius: 2px;
				font-weight: 550;
			}
		}

		.vertical-line {
			width: 3px;
			height: 18px;
			background: #206cfe;
			position: absolute;
		}

		.more {
			margin-left: 60px;
			font-size: 12px;
			color: #36383a;

			uni-text {
				font-size: 12px;
				color: #36383a;
				margin-right: 4px;
			}
		}

		>uni-view:last-child {
			text-align: right;
		}
	}
</style>
