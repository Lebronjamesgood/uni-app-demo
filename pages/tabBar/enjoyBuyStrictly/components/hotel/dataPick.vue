<template>
	<view class="mask-date" @touchmove.stop.prevent="moveHandle" :hidden="isshowDatemodal">
		<view class="modal-date">
			<view class="title">{{from}}日期及时间<view @click="closeDateBtn" class="closedate">X</view>
			</view>
			<view class="timetitle">时间
				<picker-view @change="selectTimeBtn" class="selectime" :value="value">
					<picker-view-column>
						<view class="item" v-for="(item,index) in timearr" :key="index">{{item}}</view>
					</picker-view-column>
				</picker-view>
			</view>
			<view class="date">
				<view class="datecycle">
					<view class="lic" v-for="(item,index) in dateCycle" :key="index">{{item}}</view>
				</view>
				<scroll-view scroll-y="true" class="wrapdate" style="height:400upx;">
					<view v-for="(ymarr,index_y) in DateData.ymarr" :key="index_y">
						<view class="year_m">{{ymarr.ym}}</view>
						<view class="daily">
							<view class="li_none" v-if="index_y>=1||DateData.today<=(7-ymarr.firstDay)" v-for="(item,index) in DateData.ymarr[index_y].firstDay" :key="index">{{item}}</view>
							<view @click="selectDateBtn([item,ymarr.year,ymarr.month])" v-for="(item,index) in ymarr.dateArr" :key="index"
							 class="lid">
								<view :class="[item==DateData.selectday&&ymarr.month==DateData.selectmonth&&ymarr.year==DateData.selectyear?'lid_s':'',item<DateData.today&&index_y==0?'lin':'']">{{item}}</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="ulbtn">
				<view class="lil" @click="nowDateBtn">即时入住</view>
				<view class="lir" @click="ortherDateBtn">确认日期</view>
			</view>
		</view>
	</view>
</template>


<script>
	export default {
		props: {
			isshowDatemodal: {
				type: Boolean,
				value: true
			},
			//需要显示的月数
			monthNum: {
				type: Number,
				default: 1,
			},
			from: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				timearr: [],
				value: [0],
				DateData: {},
				selectIndex: 0,
				selectTime: "00:00",
				dateCycle: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
			};
		},
		created: function(e) {
			this.initData()
		},

		methods: {
			moveHandle() {
				return false
			},
			// 初始化数据
			initData() {
				let timearr = []
				for (let i = 0; i < 24; i++) {
					if (i < 10) {
						i = "0" + i
					}
					timearr.push(i + ":00")
					timearr.push(i + ":30")
				}
				this.timearr = timearr

				this.DateData = this.GetDateMonthDay(new Date(), this.monthNum)
				let nowTime = this.getNowTimes()
				this.selectTime = nowTime
				for (let i in timearr) {
					if (timearr[i] == nowTime) {
						this.value = [parseInt(i)]
						break;
					}
				}
			},
			//时间选择
			selectTimeBtn(e) {
				let time = this.timearr[e.detail.value[0]]
				this.selectTime = time
			},
			//日期选择
			selectDateBtn(e) {
				let _index = e[0]
				let _year = e[1]
				let _month = e[2]
				let newDateData = this.DateData
				if (_index >= newDateData.today || newDateData.ymarr[0].month != _year) {
					newDateData.selectday = _index
					newDateData.selectmonth = _month
					newDateData.selectyear = _year
					this.DateData = newDateData
				}
			},
			//即时入住 
			nowDateBtn(e) {
				//console.log(this.data.DateData.selectdate)
				let times = this.getNowTimes()
				let date = this.DateData
				// let datetime = this.DateData.selectdate
				let datetime = date.selectyear + "-" + date.selectmonth + "-" + date.selectday
				this.$emit("ortherdatebtn", {
					datetime,
					times
				})
			},
			//确认日期
			ortherDateBtn(e) {
				let date = this.DateData
				let selectTime = this.selectTime
				let datetime = date.selectyear + "-" + date.selectmonth + "-" + date.selectday
				let times = selectTime
				// console.log({datetime,times})
				this.$emit("ortherdatebtn", {
					datetime,
					times
				})
			},
			//关闭弹窗
			closeDateBtn() {
				this.$emit("closedate")
			},
			GetDateMonthDay: function(mydate, num) { //获取当月日期,mydate为当月日期，num为需要几个月的日期
				var year = mydate.getFullYear();
				var month = mydate.getMonth();
				var months = month + 1;
				let _year = year;
				let _month = months;
				let today = mydate.getDate();
				var fist = new Date(year, month, 1);
				let firstDay = fist.getDay();
				var last = new Date(year, months, 0);
				let lastDay = last.getDate();
				let dateArr = []
				for (var i = 1; i < lastDay + 1; i++) {
					dateArr.push(i);
				}

				let dd = 7 - firstDay
				if (today > dd) {
					let num = Math.floor((today - dd) / 7)
					if ((today - dd) % 7 == 0) {
						num = num - 1
					}
					dateArr = dateArr.slice((num * 7) + dd)
				}

				let ym = _year + "年" + _month + "月"
				let themonth = {}
				themonth.ym = ym
				themonth.dateArr = dateArr
				themonth.firstDay = firstDay
				themonth.month = _month
				themonth.year = _year

				let thedatedata = {}
				thedatedata.ymarr = [themonth]
				thedatedata.today = today
				thedatedata.selectday = today
				thedatedata.selectmonth = _month
				thedatedata.selectyear = _year
				thedatedata.selectdate = ym + today + "日"
				let td = mydate
				for (let i = 0; i < num; i++) {
					thedatedata.ymarr.push(this.GetnextMonth(mydate))
					mydate.setMonth(mydate.getMonth() + 1)

				}
				// console.log(thedatedata.ymarr)
				return thedatedata
			},
			GetnextMonth: function(mydate) { //获取下一月日期
				var _year = mydate.getFullYear();
				var _month = mydate.getMonth();
				_month = _month + 1
				var months = "";
				var years = "";
				if (_month == 12) {
					_month = 0;
					months = _month;
					years = _year + 1;
				} else {
					months = _month + 1;
					years = _year;
				}
				var months = _month + 1;
				var first = new Date(years, months - 1, 1);
				let firstDay = first.getDay();
				var last = new Date(years, months, 0);
				let lastDay = last.getDate();
				let dateArr = [];
				for (var i = 1; i < lastDay + 1; i++) {
					dateArr.push(i);
				}
				let month_day = {}
				month_day.ym = years + "年" + months + "月";
				month_day.dateArr = dateArr
				month_day.firstDay = firstDay
				month_day.month = months
				month_day.year = years
				return month_day;
			},
			//计算当前时间点
			getNowTimes: function() {
				let now = new Date();
				// let currenttime = now.toLocaleTimeString('chinese', { hour12: false });
				let hours = now.getHours()
				let minutes = now.getMinutes()
				hours += 1
				hours = hours == 24 ? 0 : hours
				if (minutes < 30) {
					return hours + ":00"
				}
				return hours + ":30"
			}
		},

	}
</script>

<style>
	.mask-date {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(128, 127, 127, 0.9);
		z-index: 9;
	}

	.mask-date .modal-date {
		position: fixed;
		background: #fff;
		top: 24%;
		left: 5%;
		right: 5%;
		z-index: 10;
		border-radius: 20upx;
		padding-bottom: 20upx;
		overflow: hidden;
	}

	.mask-date .modal-date .title {
		font-size: 30upx;
		background: #fbbe0e;
		color: #fff;
		text-align: center;
		line-height: 60upx;
		position: relative;
		border-top-left-radius: 10upx;
		border-top-right-radius: 10upx;
	}

	.mask-date .modal-date .closedate {
		position: absolute;
		top: 10upx;
		right: 10upx;
		color: #7a7a7a;
		background: #fff;
		border-radius: 100%;
		width: 6vw;
		height: 6vw;
		text-align: center;
		line-height: 6vw;
		font-size: 3.6vw;
	}

	.mask-date .timetitle {
		line-height: 60upx;
		padding: 0 20upx;
	}

	.mask-date .selectime {
		height: 80upx;
		width: 40%;
		float: right;
	}

	.mask-date .selectime .item {
		width: 100%;
		line-height: 34px;
		text-align: center;
		color: #fbbe0e;
	}

	.mask-date .date {
		width: 100%;
	}

	.mask-date .datecycle {
		display: flex;
		width: 100%;
		padding: 10upx 20upx;
		margin: 0 auto;
		font-size: 30upx;
		text-align: center;
	}

	.mask-date .datecycle .lic {
		line-height: 60upx;
		flex: 1;
	}

	.mask-date .wrapdate {
		padding: 0 20upx;
		position: relative;
	}

	.mask-date .year_m {
		position: sticky;
		left: 0;
		top: 0;
		z-index: 1;
		background-color: #FFFFFF;
		line-height: 60upx;
		font-weight: bold;
		font-size: 26upx;
	}

	.mask-date .daily {
		width: 100%;
		display: table;
		margin: 0 auto;
		text-align: center;
	}

	.mask-date .lid {
		font-size: 28upx;
		float: left;
		width: 14.2%;
		text-align: center;
		padding-bottom: 10upx;
		line-height: 50upx;
		border-radius: 100%;
	}

	.mask-date .lid_s {
		color: #FFFFFF;
		margin: 0 auto;
		background-color: #fbbe0e;
		text-align: center;
		width: 50upx;
		height: 50upx;
		line-height: 50upx;
		border-radius: 100%;
	}

	.mask-date .li_none {
		color: #FFFFFF;
		background-color: #FFFFFF;
		float: left;
		width: 14.2%;
		text-align: center;
		padding-bottom: 10upx;
		line-height: 50upx;
		border-radius: 100%;
	}

	.mask-date .lin {
		color: #FFFFFF;
	}

	.mask-date .ulbtn {
		background: #fff;
		display: flex;
		text-align: center;
		font-size: 30upx;
		width: 100%;
		height: 80upx;
		padding: 0 10upx;
		box-sizing: border-box;
	}

	.mask-date .ulbtn::after {
		content: "";
		position: absolute;
		background: #d9d9d9;
		top: -4upx;
		left: 5upx;
		height: 5upx;
		right: 10upx;
		z-index: 1;
		transform: scaleY(0.3);
		transform-origin: 0 0;
	}

	.mask-date .ulbtn .lil {
		flex: 1;
		border-right: 2upx #d9d9d9 solid;
		color: #00d4fa;
		height: 60upx;
		margin: 20upx 0;
		line-height: 60upx;
	}

	.mask-date .ulbtn .lir {
		flex: 1;
		color: #fbbe0f;
		height: 60upx;
		margin: 20upx 0;
		line-height: 60upx;
	}
</style>
