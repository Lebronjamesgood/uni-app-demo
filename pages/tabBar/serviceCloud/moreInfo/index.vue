<template>
	<view class="more-container">
		<!-- <nav-bar :isBack="isBack" :title="title" :messageList="messageList" :rightMsg="false" :showAction="true" :titleSize="22"></nav-bar> -->
	   <nav-bar :isBack="true" :title="title" searchMargin="0 0 0 32rpx"></nav-bar>
		<view class="content">
			<u-cell-group v-for="(item, index) of list" :key="index">
				<u-cell-item :title="item.name" :arrow="false" center>
					<image :src="arrow" mode="" class="arrow"></image>
				</u-cell-item>
				<u-line color="#EDEDED" length="630" margin="0rpx auto" v-if="index !==(list.length-1)"/>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	// import navBar from '../components/NavBar.vue'
	// import navBar from '../../../common/NavBar.vue'
	export default {
		components: {
		   // navBar
		},
		props: {
		},
		data() {
			return {
				isBack: true,
				messageList: [],
				list: [],
				title: '',
				arrow: require('../../../../static/serviceCloud/arrow-right.svg')
			};
		},
		onLoad(options) {
			console.log(options)
			this.title = options.title
		},
		onShow() {
			if (this.title === '热门服务') {
				this.list = [
					{
						name: '机动车驾驶证核发、审验',
					},
					{
						name: '机动车检验合格标志核发',
					},
					{
						name: '机动车登记',
					},
					{
						name: '城居慢性病注册',
					},
					{
						name: '对外国人的住宿登记',
					},
					{
						name: '不动产登记',
					},
					{
						name: '内地居民婚姻登记',
					},
					{
						name: '非机动车登记',
					},
					{
						name: '机动车驾驶证核发、审验',
					},
					{
						name: '对就业困难人员（含建档立卡贫困劳动力）实施就业援助',
					},
					{
						name: '社会保险费缴纳',
					},
					{
						name: '社会保险费申报',
					},
					{
						name: '社会保险费申报',
					},
					{
						name: '城局住院补偿',
					},
					{
						name: '城职慢性病证办理及八十岁以上老人医保',
					},
					{
						name: '《中华人民共和国残疾人证》新办、补办、换领、变更、注销',
					},
					{
						name: '公务员补偿',
					},
					{
						name: '城居卡证激活',
					},
					{
						name: '商品房网签备案',
					},
					{
						name: '房产档案查询',
					}
				]
			} else if (this.title === '个人办事') {
				this.list = [
					{
						name: '非防洪建设项目洪水影响评价报告审批',
					},
					{
						name: '对纳税人延期申报的核准',
					},
					{
						name: '区域性有线广播电视传输覆盖网总体规划、建设方案审核',
					},
					{
						name: '放射源诊疗技术和医用辐射机构许可',
					},
					{
						name: '依法受理举报、投诉、处理公路建设市场违法行为',
					},
					{
						name: '护士执业注册',
					},
					{
						name: '医师执业注册（含外国医师来华短期行医许可、台湾地区医师在大陆短期行医许可、香港澳门特别行政区医师在内地短期行医许可）',
					},
					{
						name: '乡村医生执业注册',
					},
					{
						name: '托儿所、幼儿园卫生保健合格证及工作人员健康合格证核发',
					},
					{
						name: '再生育许可',
					},
					{
						name: '文物保护宣传教育',
					},
					{
						name: '第二类、第三类易制毒化学品购买备案证明',
					},
					{
						name: '剧毒化学品购买许可',
					},
					{
						name: '特殊车辆在城市道路上行驶（包括经过城市桥梁）审批',
					},
					{
						name: '食品（含保健食品）生产许可',
					},
					{
						name: '学生资助',
					},
					{
						name: '法律援助补贴发放',
					},
					{
						name: '人民调解员补贴发放',
					},
					{
						name: '人民调解员因从事工作致伤致残、牺牲的救助、抚恤',
					},
					{
						name: '学校办学水平和教育质量评估的确认',
					}
					
				]
			} else if (this.title === '法人办事') {
				this.list = [
					{
						name: '节能审查',
					},
					{
						name: '石油天然气管道保护范围内特定施工作业许可',
					},
					{
						name: '非防洪建设项目洪水影响评价报告审批',
					},
					{
						name: '动物防疫条件合格证核发',
					},
					{
						name: '对纳税人延期申报的核准',
					},
					{
						name: '生放无人驾驶自由气球或者系留气球活动审批',
					},
					{
						name: '农业专业合作经营异常名录的列入、一处、异议的处理',
					},
					{
						name: '新型墙体材料推广应用',
					},
					{
						name: '公路建设项目施工许可',
					},
					{
						name: '企业投资项目核准',
					},
					{
						name: '母婴保健技术服务机构执业许可',
					},
					{
						name: '国家重点公路设计审批',
					},
					{
						name: '公路建设项目竣工验收',
					},
					{
						name: '渔业船舶船员证书核发',
					},
					{
						name: '施工自升式架设设施、机械设备和施工机具及配件验收合格的登记',
					},
					{
						name: '放射源诊疗技术和医用辐射机构许可',
					},
					{
						name: '依法受理举报、投诉、处理公路建设市场违法行为',
					},
					{
						name: '依法批准开工报告的建设工程保证安全施工措施及拆除工程的备案',
					},
					{
						name: '对公路工程参建单位的信用考核',
					},
					{
						name: '水运工程竣工验收',
					}
					
				]
			} else if (this.title === '部门办事') {
				this.list = [
					{
						name: '县发改局',
					},
					{
						name: '凤凰县教体局',
					},
					{
						name: '县科技和工业信息化局',
					},
					{
						name: '县民族宗教事务局',
					},
					{
						name: '县公安局',
					},
					{
						name: '县民政局',
					},
					{
						name: '县司法局',
					},
					{
						name: '县财政局',
					},
					{
						name: '县人社局',
					},
					{
						name: '县自然资源局',
					},
					{
						name: '州生态环境局凤凰分局',
					},
					{
						name: '县住建局(县人防办)',
					},
					{
						name: '县交通局',
					},
					{
						name: '县水利局',
					},
					{
						name: '县农业农村局',
					},
					{
						name: '县商务局',
					},
					{
						name: '县文化旅游广电局',
					},
					{
						name: '县卫生健康局',
					},
					{
						name: '县审计局',
					},
					{
						name: '县应急管理局',
					},
					{
						name: '县林业局',
					},
					{
						name: '县市场监督管理局',
					},
					{
						name: '县统计局',
					},
					{
						name: '县医疗保障局',
					},
					{
						name: '国家税务总局县税务局',
					},
					{
						name: '县烟草专卖局',
					},
					{
						name: '县气象局',
					},
					{
						name: '县委宣传部',
					},
					{
						name: '县委公室',
					},
					{
						name: '县消防救援大队',
					},
					{
						name: '县政府办',
					},
					{
						name: '县风景名胜管理处',
					},
					{
						name: '县残联',
					},
					{
						name: '县委统战部',
					},
					{
						name: '县城市管理和综合执法局',
					},
					{
						name: '国网供电凤凰分公司',
					},
					{
						name: '凤凰县编办',
					},
					{
						name: '退役军人事务局',
					},
					{
						name: '县扶贫开发办公室',
					},
					{
						name: '湖南有线凤凰网络有线公司',
					},
					{
						name: '县住房公积金',
					},
					{
						name: '国网供电凤凰分公司',
					}
					
				]
			}
		},
		methods: {
			goPath(id, item, index) {
				console.log('id', id)
			}
		}
	};	
</script>

<style lang="less" scoped>
	.content {
		padding: 30rpx;
		background-color: #F5F6F7;
		box-shadow: 0 0 20rpx rgba(41,41,41,0.05);
		/deep/.u-cell-box:first-child {
			.u-cell-item-box {
				border-top-left-radius: 20rpx;
				border-top-right-radius: 20rpx;
			}  
		}
		/deep/.u-cell-box:last-child {
			border-bottom: 0px;
			.u-cell-item-box {
				border-bottom-left-radius: 20rpx;
				border-bottom-right-radius: 20rpx;
			}  
		}
	}
	uni-image.arrow {
		width: 16rpx;
		height: 20rpx;
	}
	/deep/.u-cell {
		padding: 40rpx 30rpx;
		line-height: 48rpx;
	}
	/deep/.u-border-top::after {
		border-bottom: 0px;
	}
	/deep/.u-border-bottom::after {
		// border-bottom: 1px solid #EDEDED;
		border: none;
	}
	/deep/.u-cell_title {
		font-size: 32rpx;
		color: #333333;
		line-height: 48rpx;
		font-family: SourceHanSansCN, SourceHanSansCN-Normal;
		width: 92% !important;
	}
	// 默认点击颜色修改
	/deep/.u-cell-hover {
		background: transparent !important;
	}
</style>
