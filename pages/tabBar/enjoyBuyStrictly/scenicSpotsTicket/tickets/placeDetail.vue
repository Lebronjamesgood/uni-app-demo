<template>
	<view>
		<view class="nav">
			<u-image src="../../../../../static/enjoyBuyStrictly/png/tickets-img.jpg" mode="" width="100%" height="460"></u-image>
		</view>
		<view class="nav-bottom">
			<view class="detail">
				<view class="font-18 title-top">
					奇梁洞
				</view>
				<view class="title-content">
					<view class="">
						<text class="font-13" style="color: #206CFE;">开放时间</text>
						<text class="font-13">丨</text>
						<text class="font-13">游客须知</text>						
					</view>
					<u-image class="position-img" src="../../../../../static/enjoyBuyStrictly/png/arrow-right.png" width="10" height="18"></u-image>
				</view>
				<view class="title-bottom">
					<view class="title-bottom-left">
						<u-image class="position-img" src="../../../../../static/enjoyBuyStrictly/png/position-1.png" width="30" height="30"></u-image>
						<text class="font-13">凤凰古城以北的奇梁桥乡</text>
					</view>
					<u-image class="position-img" src="../../../../../static/enjoyBuyStrictly/png/arrow-right.png" width="10" height="18"></u-image>
				</view>
			</view>
		</view>
		
		<view class="reserve-cards">
			<view class="title">
				<text class="empty-text"></text>
				<text class="font-18" style="line-height: 36rpx;">门票预定</text>
			</view>
			<view class="content"  v-for="(el, ind) in dataList" :key="ind">
				<view class="">
					<text>{{el.title}}</text>
				</view>
				<u-collapse :item-style="itemStyle" event-type="close" @change="change" :accordion="false">
						<u-collapse-item :index="index" @change="itemChange(item)" v-for="(item, index) in el.itemList" :key="index" :open="item.open">
							<view class="collapse-title" slot="title-all">
								<text class="font-15">{{item.head}}</text>
								<view class="right">
									<view class="prices">
										<text class="font-12" style="color: #FF0000;">￥{{item.price}}</text>
										<text class="font-12" style="color: #999999;">起</text>
									</view>
									<u-image v-if="item.open" src="../../../../../static/enjoyBuyStrictly/png/arrow-top.png" mode="" width="36" height="36"></u-image>
									<u-image v-else src="../../../../../static/enjoyBuyStrictly/png/arrow-down.png" mode="" width="36" height="36"></u-image>
								</view>
								
							</view>
							<view class="collapse-body">
								<view class="top">
									<text class="font-15">{{item.cardType}}</text>
									<text class="font-12" style="color: #FF0000;">￥{{item.price}}</text>
								</view>
								<view class="content">
									<text class="font-13">支持退票</text>
								</view>
								<view class="bottom">
									<view class="left">
										<text class="font-13">当日有效</text>
										<text class="font-13">丨</text>
										<text class="font-13" style="color: #206CFE;">预定须知 ></text>
									</view>
									<view class="right">
										<u-button :custom-style="customStyle" type="warning" shape="circle" size="small" @click="linkHandle(item.type)"> 预定</u-button>
									</view>
								</view>
							</view>
						</u-collapse-item>
					</u-collapse>
			</view>
			
			<view class="place-introdution">
				<view class="title">
					<text class="empty-text"></text>
					<text class="font-18" style="line-height: 36rpx;">景区介绍</text>
				</view>
				<view class="content">
					<text class="font-14">
						奇梁洞位于古城以北的奇梁桥乡，吉凤公路左侧。该景点集山、河、峡谷、险滩、绝壁、飞瀑、丛林、田园、村落于一洞，以“奇、秀、幽、峻”四大特色著称，有“奇梁归来不看洞”之说。洞口宛如巨龙张口，高50余米，宽20多米，一条清溪穿溶洞而过，洞长6000余米，洞内有“古战场”、“画廊”、“天堂”、“龙宫”、“阴阳河”五大景区。相传宋代末年，土人首领何车聚众起义反对官府，攻城夺寨，势如破竹。朝廷举派“杨氏三兄弟”统兵征剿，被何车用“追命鼓”、“迷魂锣”、“荷花伞”三件法宝打败。后因叛徒告密，法宝被破，退守奇梁洞中，将士全部战死。民间至今流传“三十六人杀九千，死在奇梁洞门前”的故事。小溪右岸石壁上垂下一把“荷花伞”，流水有声，传说是何车的护身法宝。
					</text>
				</view>
			</view>
			
			<view class="remarks">
				<view class="title">
					<text class="empty-text"></text>
					<text class="font-18" style="line-height: 36rpx;">评论</text>
				</view>
				<view class="content">
					<view class="empty-remarks">
						<u-image class="empty-image" src="../../../../../static/enjoyBuyStrictly/png/empty-remark.png" width="348" height="280"></u-image>
						<text class="font-16">暂无评论，快来抢沙发~</text>
					</view>
				</view>
				<view class="write-remarks">
					<u-search placeholder="评论" v-model="keyword" :show-action="false" search-icon="../../../../../static/enjoyBuyStrictly/png/input-left-icon.png"></u-search>
					<u-image class="search-icon" src="../../../../../static/enjoyBuyStrictly/png/remark-img1.png" width="48" height="48"></u-image>
					<u-image v-if="!isPointAct" class="search-icon" 
							src="../../../../../static/enjoyBuyStrictly/png/remark-img2.png" 
							width="48" 
							height="48"
							@click="isPointAct = !isPointAct"></u-image>
					<u-image v-else 
							@click="isPointAct = !isPointAct"
							class="search-icon" 
							src="../../../../../static/enjoyBuyStrictly/png/remark-img2-act.png" 
							width="48" 
							height="48"></u-image>
					<u-image class="search-icon" src="../../../../../static/enjoyBuyStrictly/png/remark-img3.png" width="48" height="48"></u-image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '',
				isPointAct: false,
				itemStyle: {
					padding: '32rpx 0',
					'border-bottom': '1rpx solid #e4e4e4'
				},
				customStyle: {
					width: '140rpx',
					height: '64rpx',
					'font-size': '30rpx'
				},
				dataList: [
					{
						title: '奇梁洞景区票',
						itemList: [{
							head: "成人票",
							price: '180',
							cardType: '奇梁洞',
							open: false,
							type: '1'
						},{
							head: "学生票",
							price: '120',
							cardType: '苗家故事篝火晚会演出双人票',
							open: false,
							type: '2'
						},{
							head: "本地特惠票",
							price: '80',
							cardType: '奇梁洞',
							open: false,
							type: '1'
						}]
					},
					{
						title: '奇梁洞+千年杜鹃景区票',
						itemList: [{
							head: "成人票",
							price: '180',
							cardType: '奇梁洞',
							open: false,
							type: '1'
						},{
							head: "本地特惠票",
							price: '80',
							cardType: '奇梁洞',
							open: false,
							type: '1'
						}]
					}
				]
				
			}
		},
		methods: {
			link(url){
				uni.navigateTo({
					url:url
				})
			},
			change() {},
			itemChange(item) {
				item.open = !item.open
			},
			linkHandle(type) {
				let url = type == '1' ? 
					'/pages/tabBar/enjoyBuyStrictly/scenicSpotsTicket/tickets/scenicSpot' 
					:
					'/pages/tabBar/enjoyBuyStrictly/scenicSpotsTicket/tickets/performanceTicket' 
				this.link(url)
						
			}
		}
	}
</script>

<style lang="scss" scoped>
page {
	overflow-y: auto;
	background-color: #F5F6F7;
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
.nav {
	padding-top: 20rpx;
	background-color: #FFFFFF;
}
.nav-bottom {
	position: relative;
	margin: 0 24rpx;
	height: 264rpx;
	.detail {
		width: 100%;
		position: absolute;
		top: -28rpx;
		left: 0rpx;
		// margin: -28rpx 24rpx;
		padding: 40rpx 24rpx 32rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx;
		box-shadow: 0rpx 4rpx 30rpx 0rpx rgba(26,33,73,0.09); 
		.title-top {
			margin-bottom: 40rpx;
		}
		.title-content {
			margin-bottom: 32rpx;
			color: #666666;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.title-bottom {
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #666666;
			.title-bottom-left {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				.position-img {
					margin-right: 10rpx;
					vertical-align: middle;
				}
			}
		}
	}

}
.reserve-cards {
	margin-top: 32rpx;
	.title {
		display: flex;
		align-items: center;
		.empty-text {
			display: inline-block;
			width: 6rpx;
			height: 36rpx;
			background-color: #206CFE;
			margin-right: 24rpx;
		}
	}
	.content {
		margin: 30rpx 24rpx 30rpx;
		padding: 30rpx;
		background-color: #FFFFFF;
	}
}
.collapse-item {
	color: red;
	padding-bottom: 10px;
}
.collapse-title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	.right {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.prices {
			vertical-align: middle;
			margin-right: 35rpx;
			line-height: 35rpx;
		}
	}
}
.collapse-body {
	margin: 40rpx 0;
	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.content {
		margin: 26rpx 0 30rpx;
		padding: 0;
		color: #206CFE;
	}
	.bottom {
		display: flex;
		justify-content: space-between;
		height: 64rpx;
		.left {
			display: flex;
			align-items: flex-end;
		}
		.right {
			width: 140rpx;
			height: 64rpx;
			vertical-align: top;
		}
	}
}
.place-introdution {
	margin-top: 32rpx;
	.title {
		display: flex;
		align-items: center;
		.empty-text {
			display: inline-block;
			width: 6rpx;
			height: 36rpx;
			background-color: #206CFE;
			margin-right: 24rpx;
		}
	}
}
.remarks {
	.content {
		margin-bottom: 60rpx;
		background-color: #F5F6F7;
		.empty-remarks {
			
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			color: #AEAEAE;
			.empty-image {
				margin: 40rpx;
			}
		}
	}
	.write-remarks {
		width: 100%;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16rpx 30rpx;
		.search-icon {
			margin-left: 40rpx;
		}
	}
}
</style>
