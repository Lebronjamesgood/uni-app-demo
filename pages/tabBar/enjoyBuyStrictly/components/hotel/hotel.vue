<template>
<view class="hotel">

	<view class="header-content">
		<!-- <nav-bar
			:class="changeHeader? 'changeHeader': ''"
			:isBack="isBack"
			:title="title"
			:shoppingCart="false"
			:messageList="messageList"
			:rightMsg="false"
			:showAction="false"
			:titleSize="42"
		></nav-bar> -->
		<nav-bar :isBack="true" :title="title" searchMargin="0 0 0 32rpx" :class="changeHeader? 'changeHeader': ''"></nav-bar>
	</view>
    <view class="search-form">
        <u-form class="container" labelWidth="150" :model="form" ref="uForm" :errorType="errorType" label-position="top">
            <u-form-item label="" prop="address" class="form-item hide-label" required>
                <view class="line">
                    <u-input v-model="form.address" name="input" placeholder="" class="address-box" @click="getlocations" disabled />
                    <u-icon name="arrow-right" class="right-item" @tap="handleClickLocation"></u-icon>
                </view>
            </u-form-item>
			<view class="time-box">
				<u-form-item label="今天入住" prop="start" class="form-item" required>
				    <view class="line">
				        <u-input v-model="form.start" name="input" placeholder="" disabled @click="getDays('出发')"/>
				    </view>
				</u-form-item>
				<u-form-item  class="form-item gap"  label="至" >
				  <view class="line">
				      <u-input  name="input" disabled value="至"/>
				  </view>
				</u-form-item>
				<u-form-item label="明天离店" prop="end" class="form-item" required >
				    <view class="line">
				        <u-input v-model="form.end" name="input" placeholder="" disabled @click="getDays('离开')" />
						<view class="right-slot">
							<text class="days">{{days}}</text>
							<u-icon name="arrow-right"></u-icon>
						</view>
				    </view>
				</u-form-item>
			</view>
			<u-form-item label="" prop="name" class="form-item hide-label" required>
				<view class="line">
				   <u-input v-model="form.name" placeholder="输入酒店/地标/关键词" maxlength="50"  />
				    <u-icon name="arrow-right" class="right-item"></u-icon>
				</view>
			</u-form-item>
			<u-form-item label="" prop="desc" class="form-item hide-label">
				<view class="line" @click="openDesPicker">
					<view v-if="!handleindex && handleindex !== 0" class="choice-style">设置价格或星级</view>
					<view class="uni-input" v-else>{{desc}}</view>
					<u-icon name="arrow-right" class="right-item" ></u-icon>
				</view>
				<u-picker mode="multiSelector" :range="descRange" range-key="name" v-model="showDesc" @confirm="getDes"  :defaultSelector="defaultSelector"  @columnchange="columnchange"   title="设置价格或星级"></u-picker>
			</u-form-item>
        </u-form>
		<view class="commit"><button type="primary" @click="submit">查找</button></view>
    </view>

    <mydataPick @closedate="closedate" @ortherdatebtn="ortherDateBtn" :monthNum="2" :isshowDatemodal="isshowDatemodal" :from="from"/>
    <!-- 猜你喜欢 s -->
    <view class="guess-like">
       	<sub-title :msg="workSub" title="猜你喜欢"></sub-title>
        <view class="content">
            <view class="card-item" v-for="(item, index) of guessList" :key="index">
                <view class="distance">
                    <image src="../../../../../static/enjoyBuyStrictly/svg/location.svg"></image>
                    <text>{{item.distance}}</text>
                </view>
                <image :src="item.url" mode="" class="cover"></image>
                <view class="desc">
                    <text class="name">
                        {{item.name}}
                    </text>
                    <view class="info">
                        <text class="score">{{item.score}}</text>
                        <text class="score">{{item.comment}}</text>
                    </view>
                    <view class="price">
                        <text>¥{{item.price}}</text>
                        起
                    </view>
                </view>
            </view>
        </view>
    </view>
    <!-- 猜你喜欢 e -->
	<u-toast ref="uToast"></u-toast>
	<u-loadmore :status="status" :load-text="loadText" :icon-type="iconType" color="#AEAEAE"></u-loadmore>
</view>
</template>

<script>
import mydataPick from './dataPick.vue'
// import navBar from '../../../../common/NavBar.vue';
import subTitle from '@/components/sub-title/index.vue'
export default {
    components: {
        mydataPick,
		// navBar,
		subTitle
    },
    data() {
        return {
			isBack: true,
			messageList: [],
			list: [],
			title: '酒店预订',
            isshowDatemodal: true,
			workSub : {
				url: '/',
				left: {
					name: '猜你喜欢'
				},
				right: {
					hasIcon: false,
					name: ''
				}
			},
			loadText: {
				loadmore: '上滑加载更多',
				loading: '努力加载中',
				nomore: '到底了哦~'
			},
			iconType: 'flower',
			status: 'nomore',
            hotelData: {
                address: "1"
            },
            guessList: [{
                    url: require("../../../../../static/enjoyBuyStrictly/png/mock1.png"),
                    name: "凤凰木溪别院",
                    score: "4.2",
                    comment: "暂无评论",
                    distance: '据我直线距离1.84km',
                    price: '0'
                },
                {
                    url: require("../../../../../static/enjoyBuyStrictly/png/mock2.png"),
                    name: "凤凰清溪园客栈",
                    score: "暂无评分",
                    comment: "暂无评论",
                    distance: '据我直线距离1.84km',
                    price: '0'
                },
				{
				    url: require("../../../../../static/enjoyBuyStrictly/png/mock3.png"),
				    name: "凤凰清溪园客栈",
				    score: "暂无评分",
				    comment: "暂无评论",
				    distance: '据我直线距离1.84km',
				    price: '0'
				},
				{
				    url: require("../../../../../static/enjoyBuyStrictly/png/mock4.png"),
				    name: "凤凰清溪园客栈",
				    score: "暂无评分",
				    comment: "暂无评论",
				    distance: '据我直线距离1.84km',
				    price: '0'
				}
            ],
            form: {
                lonLat: '',
                address: '凤凰',
				start: '2021-12-23',
				end: '2021-12-24',
				name: '',
				desc: ''
            },
            rules: {
                address: [{
                    required: false,
                    message: '请选择发生地址',
                    trigger: ['change']
                }], 
				name: [{
				    required: false,
				    message: '请输入酒店名称',
				    trigger: ['blur']
				}],
				desc: [{
				    required: false,
				    message: '请选择发生地址',
				    trigger: ['change']
				}], 

            },
            errorType: ['toast'],
            lonLat: '',
			days: '共1晚',
			from: '出发',
			// 星级
			desc: '',
			descRange: [],
			showDesc: false,
			handleindex: '',
			changeHeader: false
        }
    },
	onShow() {
		this.descRange = [['价格', '星级'], ['1-200', '200-500','500-1000','大于1000']];
		this.defaultSelector = [0, 1];
	},
	onPageScroll (e) {
		if (e.scrollTop> 50) {
			this.changeHeader = true
		} else {
			this.changeHeader = false
		}
	},
    methods: {
		//确认日期
        ortherDateBtn(e) {
            let {
                datetime,
                times
            } = e
			console.log(e)
			if (this.from === '出发') {
				this.form.start = datetime
			} else if (this.from === '离开') {
				this.form.end = datetime
			}
			const days = this.dateDiff(this.form.end, this.form.start)
			this.days = '共'+days+'晚'
			this.isshowDatemodal = true
        },
		//日期相隔
		dateDiff(sDate1, sDate2) {
		    var aDate, oDate1, oDate2, iDays
		    aDate = sDate1.split("-")
		    oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]) 
		    aDate = sDate2.split("-")
		    oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0])
		    iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24) 
		    return iDays
		},
        closedate() {
            this.isshowDatemodal = true
        },
		//选择日期
		getDays(item) {
			console.log(item)
			this.from = item
			this.isshowDatemodal = false
		},
		//选择位置
        getlocations() {
            var that = this
            uni.chooseLocation({
                success: function (res) {
                    that.form.address = res.address
                    that.lonLat = res.longitude + ',' + res.latitude
                }
            })
        },
		handleClickLocation() {
			var that = this;
			uni.chooseLocation({
				success: function(res) {
					 that.form.address = res.address
					 that.lonLat = res.longitude + ',' + res.latitude
				}
			});
		},
		//价格和星级
		getDes(e) {
			console.log(e)
			this.handleindex = e 
			this.form.desc = this.descRange[0][e[0]] + ': ' + this.descRange[1][e[1]];
			this.desc = this.descRange[0][e[0]] + ': ' + this.descRange[1][e[1]];
		},
		openDesPicker() {
			if(this.showDesc) {
				this.showDesc = false
			} else {
				this.showDesc = true
			}
		},
		columnchange(e) {
			let column = e.column, index = e.index;
			this.defaultSelector[column] = index;
			switch (column) {
				case 0: 
					switch (index) {
						case 0:
							this.descRange[1] = ['1-200', '200-500','500-1000','大于1000']
							break
						case 1:
							this.descRange[1] = ['一星', '二星','三星','四星','五星']
							break
					}
					this.defaultSelector.splice(1, 1)
					this.defaultSelector.splice(2, 1)
					break
			}
		},
		submit() {
			const that = this
			that.$refs.uForm.validate(val => {
				if (val) {
					/*经纬度和网格id传递测试..*/
					console.log('提交的信息', that.form)
					this.$refs.uToast.show({
						title:'查询...',
						type: 'default'
					});
					// this.resetFrom()
				} else {
					console.log('验证失败');
				}
								
			})
		},
		resetFrom() {
			this.form = {
				lonLat: '',
				address: '凤凰',
				start: '2021-12-23',
				end: '2021-12-24',
				name: '',
				desc: ''
			}
			this.attaches = []
			this.handleindex = ''
			this.$refs.uForm.resetFields()
		}
    }
}
</script>

<style lang="less" scoped>
.hotel {
	background-color: #F5F6F7;
	padding-bottom: 50rpx;
}
.guess-like {
	margin-top: 260rpx;
    .title {
        color: #206CFE;
        font-size: 34rpx;
        font-weight: 500;
        text-align: center;
        height: 80rpx;
        line-height: 80rpx;
        display: inline-block;
        width: 100%;
    }
    .content {
        // display: flex;
        padding-left: 26rpx;
        padding-right: 26rpx;
        .card-item {
            // flex: 1;
            height: 550rpx;
           box-shadow: 0px 2rpx 4rpx rgba(60,61,68,0.09);
           border-radius: 16px;
           margin-right: 16rpx;
           position: relative;
		   width: 344rpx;
		   display: inline-block;
		   background-color: #FFFFFF;
		   margin-bottom: 16rpx;
            .distance {
                position: absolute;
                top: 0rpx;
                left: 0px;
                height: 50rpx;
                background-color: rgba(0,0,0,.4);
                display: flex;
                z-index: 1;
                justify-content: flex-start;
                align-items: center;
                overflow: hidden;
                border-top-left-radius: 16rpx;
				border-bottom-right-radius: 16rpx;
				padding-right: 12rpx;
                uni-image {
                    width: 30rpx;
                    height: 30rpx;
					margin-right: 4rpx;
                }
                uni-text {
                    font-size: 24rpx;
                    color: #ffffff;
					font-family: SourceHanSansCN, SourceHanSansCN-Normal;
                }
            }
            uni-image.cover {
                height: 360rpx;
                border-top-left-radius: 16rpx;
                border-top-right-radius: 16rpx;
            }
            .desc {
                padding-left: 20rpx;
                padding-right: 20rpx;
                .name {
                    font-size: 30rpx;
                    color: #333333;
                    text-overflow: -o-ellipsis-lastline;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 1;
                    line-clamp: 1;
                    -webkit-box-orient: vertical;
                    line-height: 46rpx;
                    display: inline-block;
                    font-family: SourceHanSansCN, SourceHanSansCN-Normal;
                    font-weight: 500;
					margin-bottom: 10rpx;
                }
                .info {
                    display: flex;
                    .score {
                        font-size: 28rpx;
                        color: #FF3B30;
                        text-overflow: -o-ellipsis-lastline;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        -webkit-line-clamp: 1;
                        line-clamp: 1;
                        -webkit-box-orient: vertical;
                        line-height: 42rpx;
                        display: inline-block;
                        font-weight: 500;
                        margin-right: 20rpx;
						font-family: SourceHanSansCN, SourceHanSansCN-Normal;
                    }
					 .score:nth-child(even) {
						 color: #999999;
						 font-size: 24rpx;
					 }
                }
                .price {
                    color: #999999;
					font-size: 40rpx;
					font-family: SourceHanSansCN, SourceHanSansCN-Normal;
					font-size: 24rpx;
					margin-top: 14rpx;
                    uni-text {
                        color: #FF3B30;
                        font-size: 40rpx;
                        margin-right: 5rpx;
                        font-weight: 500;
                    }
                }
            }
        }
        .card-item:last-child {
            margin-right: 0px;
        }
		.card-item:nth-child(even) {
			margin-right: 0px;
		}
    }
}
.search-form {
	padding-left: 30rpx;
	padding-right:30rpx;
	box-shadow: 0px 4rpx 30rpx rgba(26,33,73,0.09);
	border-radius: 20rpx;
	width: 690rpx;
	padding-bottom: 20rpx;
	position: absolute;
	top: 74px;
	left: 30rpx;
	right: 30rpx;
	background-color: #FFFFFF;
	/deep/.u-border-bottom:after{
		border-color: #EDEDED;
	}
	.time-box {
		display: flex;
		justify-content: center;
		align-items: center;
		.form-item:first-child{
			flex: 0.26;
		}
		.form-item {
			flex: 0.66;
		}
		.gap {
			flex: 0.08;
			/deep/.u-form-item--left {
				visibility: hidden;
			}
		}
	}
}
/deep/.u-form-item--left__content--required {
	display: none;
}
.line {
    display: inline-block;
    width: 100%;
    position: relative;
    .uni-icons {
        position: absolute;
        right: 0px;
        top: 0px;
        display: none;
    }
    .arrow-right {
        position: absolute;
        right: 0px;
        top: 0px;
        width: 12px;
        height: 100%;
    }
    .right-item {
        position: absolute;
        right: 0px;
        top: 0px;
        width: 12px;
        height: 100%;
    }
	
}
.right-slot {
	display: flex;
	position: absolute;
	right: 0px;
	top: 0px;
	width: 60px;
	height: 100%;
	line-height: 32rpx;
	.days {
		flex: 1;
		font-size: 24rpx;
		color: #262626;
		font-family: SourceHanSansCN, SourceHanSansCN-Normal;
	}
	uni-icon{
		flex: 1;
	}
}
.commit{
	button{
		width: 630rpx;
		height: 88rpx;
		background: #206CFE;
		border-radius: 44rpx;
		// box-shadow: 0rpx 16rpx 32rpx 0rpx rgba(53,118,254,0.25);
		color: #FFFFFF;
		font-size: 30rpx;
		margin: 42rpx auto;
		margin-bottom: 0px;
		font-family: SourceHanSansCN, SourceHanSansCN-Normal;
		line-height: 88rpx;
	}
}
/deep/.u-picker-header {
	.u-picker__title {
		font-size: 34rpx;
		color: #333333;
		font-weight: bold;
	}
	.u-btn-picker{
		font-size: 30rpx;
		color: #999999 !important;
	}
	.u-btn-picker--primary{
		color: #306FFE !important;
	}
}
/deep/.u-picker-body{
	height: 170px;
}
.choice-style {
	font-size: 32rpx;
	color: #B1B2B3;
	font-family: SourceHanSansCN, SourceHanSansCN-Normal;
}
.header {
	background: transparent;
	/deep/.u-navbar-fixed{
		background: transparent !important;
	}
	/deep/.title{
		color: #FFFFFF;
	}
	/deep/.uicon-nav-back:before {
		color: #FFFFFF;
	}
	/deep/.u-border-bottom:after {
		border-bottom: 0px;
	}
	/deep/.u-back-wrap{
		padding-left: 0px;
	}
}
.changeHeader {
	background: #FFFFFF;
	/deep/.u-navbar-fixed{
		background: #FFFFFF !important;
	}
	/deep/.title{
		color: #333333;
	}
	/deep/.uicon-nav-back:before {
		color: #333333;
	}
}
.header-content {
	background: url('../../../../../static/enjoyBuyStrictly/png/hotel-bg.png') center center no-repeat;
	height: 526rpx;
	background-size: 100% 100%;
}
/deep/.uicon-arrow-right:before {
	color:#C3CBCF ;
}
/deep/.u-form-item--left__content__label{
	font-size: 24rpx;
	color: #666666;
	font-family: SourceHanSansCN, SourceHanSansCN-Normal;
	height: 36rpx;
	line-height: 36rpx;
}
/deep/.u-form-item--left {
	margin-bottom: 0px !important;
}
/deep/.u-form-item{
	padding: 30rpx;
	padding-left: 0px;
	padding-right: 0px;
}
/deep/.u-form-item.hide-label{
	.u-form-item--left {
		display: none;
	}
}
/deep/.u-input__input{
	min-height: 32rpx !important;
}
/deep/.uni-input-placeholder{
	font-size: 32rpx;
	font-family: SourceHanSansCN, SourceHanSansCN-Normal;
	color: #B1B2B3 !important;
}
/deep/.subtitle {
	background-color: #F5F6F7;
	margin: 0px;
	margin-bottom: 40rpx;
	.u-cell-item-box {
		background-color: #F5F6F7;
	}
	.u-border-bottom:after {
		border: none;
	}
}
</style>