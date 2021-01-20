<template>
	<view class="content-charts"><view @click="echarts.onClick" :prop="option" :change:prop="echarts.updateEcharts" id="echarts" class="echarts"></view></view>
</template>

<script>
export default {
	data() {
		return {
			option: {
				title: {
					text: ''
				},
				grid: {
					left: 0,
					top: 40,
					bottom: 50,
					right: 0
				},
				tooltip: {
					trigger: 'axis',
					showDelay: 0,
					borderRadius: 25,
					padding: [7, 20],
					textStyle: {
						color: '#ABAABA',
						fontSize: 11
					},
					backgroundColor: '#ffffff',
					axisPointer: {
						lineStyle: {
							color: '#38B9FF'
						},
						type: 'line'
					},
					extraCssText:'box-shadow: 0rpx 10rpx 40rpx 0rpx rgba(0,0,0,0.10)'
				},
				xAxis: [
					{
						type: 'category',
						axisLabel: {
							margin: 10,
							textStyle: {
								color: '#595866',
								fontSize: 11
							}
						},
						axisTick: {
							show: false
						},
						axisLine: {
							lineStyle: {
								color: 'rgba(198,195,206,0.5)',
								type: 'dashed'
							}
						},
						data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
					}
				],
				yAxis: [
					{
						axisLabel: {
							textStyle: {
								color: '#A5AAC1'
							},
							inside: true,
							margin:15
						},
						max: 15000,
						min: 0,
						axisLine: {
							show: false
						},
						// 刻度显示
						axisTick: {
							show: false
						},
						splitNumber: 3, //分割段数
						// 分割线
						splitLine: {
							lineStyle: {
								type: 'dotted'
							}
						},
						// 区域样式分隔
						splitArea: {
							areaStyle: {
								color: '#fff'
							}
						}
					}
				],
				series: [
					{
						name: '',
						type: 'line',
						data: [0, 2100, 5004, 3800, 6010, 8002, 7080],
						itemStyle: {
							color: {
								type: 'linear',
								x: 1,
								y: 0,
								x2: 0,
								y2: 0,
								colorStops: [
									{
										offset: 0,
										color: 'rgba(52,191,255,1)' // 0% 处的颜色
									},
									{
										offset: 1,
										color: 'rgba(99,132,255,1)' // 100% 处的颜色
									}
								],
								globalCoord: false // 缺省为 false
							}
						},
						areaStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [
									{
										offset: 0,
										color: 'rgba(52,191,255,0.5)' // 0% 处的颜色
									},
									{
										offset: 1,
										color: 'rgba(52,191,255,0.1)' // 100% 处的颜色
									}
								],
								globalCoord: false // 缺省为 false
							}
						},
						smooth: 0.6
					}
				]
			}
		};
	},
	onLoad() {},
	methods: {
		onViewClick(options) {
			console.log(options);
		}
	}
};
</script>

<script module="echarts" lang="renderjs">
let myChart
export default {
	mounted() {
		if (typeof window.echarts === 'function') {
			this.initEcharts()
		} else {
			// 动态引入较大类库避免影响页面展示
			const script = document.createElement('script')
			// view 层的页面运行在 www 根目录，其相对路径相对于 www 计算
			script.src = 'static/echarts.js'
			script.onload = this.initEcharts.bind(this)
			document.head.appendChild(script)
		}
	},
	methods: {
		initEcharts() {
			myChart = echarts.init(document.getElementById('echarts'))
			this.option.tooltip.formatter  = function formatter(params) {
				var result = params[0].name;
				params.forEach(function(item) {
						result += '\t'+item.value;
				});
				return result;
			},
			// 观测更新的数据在 view 层可以直接访问到
			myChart.setOption(this.option)
		},
		updateEcharts(newValue, oldValue, ownerInstance, instance) {
			// 监听 service 层数据变更
			myChart.setOption(newValue)
		},
		onClick(event, ownerInstance) {
			// 调用 service 层的方法
			ownerInstance.callMethod('onViewClick', {
				test: 'test'
			})
		}
	}
}
</script>

<style>
.content-charts {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.echarts {
	width: 100%;
	height: 480rpx;
}
</style>
