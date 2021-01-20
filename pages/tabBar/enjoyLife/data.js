const data = {
	//智享生活首页
	index_data: {
		messageList: [{
				name: '消息中心',
				path: '/pages/message/index',
				icon: require('../../../static/enjoyLife/center-msg.svg'),
			},
			{
				name: '我的订单',
				path: '/pages/tabBar/enjoyLife/order/orderList',
				icon: require('../../../static/enjoyLife/order.svg'),
			},
			{
				name: '商家中心',
				icon: require('../../../static/enjoyLife/shop.svg'),
				path: '/pages/tabBar/enjoyLife/enjoyLifePages/businessCenter/index',
			},
			{
				name: '成为商家',
				icon: require('../../../static/enjoyLife/shopper.svg'),
			}
		],
		info: [{
				image: '../../../static/enjoyLife/banner.png',
			},
			{
				image: '../../../static/enjoyLife/banner.png',
			},
			{
				image: '../../../static/enjoyLife/banner.png',
			}
		],
		listservice: [{
				name: '交通服务',
				path: '/pages/tabBar/enjoyLife/enjoyLifePages/TransportServices',
				imgUrl: '../../../static/enjoyLife/transport.svg',
			},
			{
				name: '公共服务',
				path: '/pages/tabBar/enjoyLife/enjoyLifePages/publicService',
				imgUrl: '../../../static/enjoyLife/public.svg',
			},
			{
				name: '便民服务',
				path: '/pages/tabBar/enjoyLife/enjoyLifePages/convenientService',
				imgUrl: '../../../static/enjoyLife/convenient.svg',
			},
			{
				name: '党务村务',
				imgUrl: '../../../static/enjoyLife/partyvillage.svg',
			}
		],
		listcommon: [{
				name: '找停车场',
				imgUrl: '../../../static/enjoyLife/park-lot.svg',
			},
			{
				name: '预约车位',
				imgUrl: '../../../static/enjoyLife/park-spase.svg',
			},
			{
				name: '违章查询',
				imgUrl: '../../../static/enjoyLife/Illegal-inquiry.svg',
			},
			{
				name: '找师傅',
				path: '/pages/tabBar/enjoyLife/enjoyLifePages/lookingMaster',
				imgUrl: '../../../static/enjoyLife/master.svg',
			},
			{
				name: '找工作',
				imgUrl: '../../../static/enjoyLife/works.svg',
			},
			{
				name: '找家教',
				imgUrl: '../../../static/enjoyLife/tutor.svg',
			},
			{
				name: '寻人寻物',
				imgUrl: '../../../static/enjoyLife/look-per-things.svg',
			},
			{
				name: '加入我们',
				path: '/pages/tabBar/enjoyLife/enjoyLifePages/joinUs/index',
				imgUrl: '../../../static/enjoyLife/join-us.svg',
			}
		],
		dynamic_info_list: {
			demandList: [{
					name: '王女士',
					phone: '185****0145',
					content: '灯具安装服务需求 ！',
					rtime: '2020-12-06 12:00:00',
				},
				{
					name: '刘先生',
					phone: '185****3721',
					content: '寻求洗衣机维修师傅 ，如有意向请联系我。',
					rtime: '2020-11-01 12:00:00',
				},
				{
					name: '杨女士',
					phone: '136****7110',
					content: '寻找爱犬，酬谢1000！',
					rtime: '2020-12-22 9:00:00',
				},
				{
					name: '刘先生',
					phone: '139****2249',
					content: '寻找一黑色钱包，面酬！',
					rtime: '2021-01-08 18:00:00',
				}
			],
			provideList: [{
					name: '张经理',
					phone: '151****2315',
					content: '提供家电修理服务',
					rtime: '沱江镇凤凰南路33号',
				},
				{
					name: '刘经理',
					phone: '139****2742',
					content: '提供宠物寄养、医疗、救助服务',
					rtime: '凤凰北路39号',
				},
				{
					name: '刘经理',
					phone: '183****2591',
					content: '家电维修，上门安装空调机柜等',
					rtime: '桔园路17号',
				},
				{
					name: '龙经理',
					phone: '185****4637',
					content: '开锁、配钥匙，安锁等服务',
					rtime: '凤凰北路46号',
				}
			]
		}
	},
	//交通服务
	TransportServices: {
		listtransport: [{
				name: '找停车场',
				imgUrl: '../../../../static/enjoyLife/park-lot-icon.svg',
			},
			{
				name: '预约车位',
				imgUrl: '../../../../static/enjoyLife/park-spase-icon.svg',
			},
			{
				name: '停车结费',
				imgUrl: '../../../../static/enjoyLife/parking-fee.svg',
			},
			{
				name: '包车',
				imgUrl: '../../../../static/enjoyLife/charter.svg',
			},
			{
				name: '违章查询',
				imgUrl: '../../../../static/enjoyLife/Illegal-inquiry-icon.svg',
			}
		]
	},
	//公共服务
	publicService: [{
			name: '生活缴费',
			list: [{
					name: '在线水费',
					imgUrl: '../../../../static/enjoyLife/online-water.svg',
				},
				{
					name: '在线电费',
					imgUrl: '../../../../static/enjoyLife/online-elec.svg',
				},
				{
					name: '在线充值',
					imgUrl: '../../../../static/enjoyLife/online-recharge.svg',
				},
				{
					name: '在线燃气费',
					imgUrl: '../../../../static/enjoyLife/online-gas.svg',
				},
				{
					name: '宽带',
					imgUrl: '../../../../static/enjoyLife/bandwidth.svg',
				},
				{
					name: '物业缴费',
					imgUrl: '../../../../static/enjoyLife/property-payment.svg',
				},
				{
					name: '有线电视',
					imgUrl: '../../../../static/enjoyLife/cable-tv.svg',
				}
			]
		},
		{
			name: '社会保障',
			list: [{
					name: '社保查询',
					imgUrl: '../../../../static/enjoyLife/social-security.svg',
				},
				{
					name: '医保查询',
					imgUrl: '../../../../static/enjoyLife/meducal-security.svg',
				},
				{
					name: '公积金查询',
					imgUrl: '../../../../static/enjoyLife/accumulation-fund.svg',
				},
				{
					name: '居家养老',
					imgUrl: '../../../../static/enjoyLife/pension.svg',
				}
			]
		},
		{
			name: '医疗健康',
			list: [{
					name: '就近医疗点',
					imgUrl: '../../../../static/enjoyLife/medical-point.svg',
				},
				{
					name: '挂号',
					imgUrl: '../../../../static/enjoyLife/register.svg',
				}
			]
		},
		{
			name: '其他',
			list: [{
				name: '教育公益',
				imgUrl: '../../../../static/enjoyLife/welfare.svg',
			}]
		}
	],
	//便民服务
	convenientService: {
		list: [{
				name: '在线招租',
				imgUrl: '../../../../static/enjoyLife/online-rent.svg',
			},
			{
				name: '在线招聘',
				imgUrl: '../../../../static/enjoyLife/online-recruit.svg',
			},
			{
				name: '搬家服务',
				imgUrl: '../../../../static/enjoyLife/house-moving.svg',
			},
			{
				name: '装修/装饰',
				imgUrl: '../../../../static/enjoyLife/renovation.svg',
			}
		]
	},
	//找师傅
	lookingMaster: {
		info: [{
				image: '../../../../static/enjoyLife/lookingMaster/master-banner.png',
			},
			{
				image: '../../../../static/enjoyLife/lookingMaster/master-banner.png',
			},
			{
				image: '../../../../static/enjoyLife/lookingMaster/master-banner.png',
			}
		],
		listmaster: [{
				name: '保姆月嫂',
				imgUrl: '../../../../static/enjoyLife/lookingMaster/nanny.svg',
			},
			{
				name: '搬家',
				imgUrl: '../../../../static/enjoyLife/lookingMaster/movingServices.svg',
			},
			{
				name: '保洁清洗',
				imgUrl: '../../../../static/enjoyLife/lookingMaster/cleaning.svg',
			},
			{
				name: '家电维修',
				imgUrl: '../../../../static/enjoyLife/lookingMaster/repair.svg',
			},
			{
				name: '管道疏通',
				imgUrl: '../../../../static/enjoyLife/lookingMaster/rushPipe.svg',
			},
			{
				name: '房屋维修',
				imgUrl: '../../../../static/enjoyLife/lookingMaster/houseRepair.svg',
			},
			{
				name: '开锁/换锁',
				imgUrl: '../../../../static/enjoyLife/lookingMaster/unlocking.svg',
			},
			{
				name: '电脑维修',
				imgUrl: '../../../../static/enjoyLife/lookingMaster/computer.svg',
			}
		],
		homeselect: [
			'../../../../static/enjoyLife/lookingMaster/clean.png',
			'../../../../static/enjoyLife/lookingMaster/rapair.png',
		],
		selectedrecommend: {
			list1: [{
					content: '专业清洗全国连锁，品质好店；',
					imgUrl: '../../../../static/enjoyLife/lookingMaster/item3.png',
					num: 3000,
					integral: 200,
				},
				{
					content: '专业清洗，指的选购；',
					imgUrl: '../../../../static/enjoyLife/lookingMaster/item4.png',
					num: 2100,
					integral: 140,
				}
			],
			list2: [{
					content: '家电维修，价格面议；',
					imgUrl: '../../../../static/enjoyLife/lookingMaster/item1.png',
					num: 1770,
					integral: 143,
				},
				{
					content: '十年老店，品质保障，口碑维修，价格面议；',
					imgUrl: '../../../../static/enjoyLife/lookingMaster/item2.png',
					num: 3999,
					integral: 416,
				}
			],
			list3: [{
					content: '各类管道疏通服务，无所不通；',
					imgUrl: '../../../../static/enjoyLife/lookingMaster/item5.png',
					num: 1900,
					integral: 154,
				},
				{
					content: '专业马桶疏通，价格实惠；',
					imgUrl: '../../../../static/enjoyLife/lookingMaster/item6.png',
					num: 6620,
					integral: 2200,
				}
			],
			list4: [{
					content: '上门服务，房屋维修；',
					imgUrl: '../../../../static/enjoyLife/lookingMaster/item7.png',
					num: 2100,
					integral: 310,
				},
				{
					content: '屋面防水补漏维修；',
					imgUrl: '../../../../static/enjoyLife/lookingMaster/item8.png',
					num: 7900,
					integral: 540,
				},
				{
					content: '旧房翻新、装修、粉刷、防水服务；',
					imgUrl: '../../../../static/enjoyLife/lookingMaster/item9.png',
					num: 2999,
					integral: 199,
				}
			]
		}
	},
	//加入我们
	joinUs: [{
			time: '2020-12-21 12:00:00',
			type: '家政服务',
			approval: '2020-10-25 12:00:00',
			status: 1,
		},
		{
			time: '2020-12-22 10:00:00',
			type: '维修服务',
			approval: '2020-10-25 11:45:00',
			status: 0,
		},
		{
			time: '2020-12-26 17:30:00',
			type: '家政服务',
			approval: '2020-10-26 19:00:00',
			status: 1,
		},
		{
			time: '2020-12-27 09:00:00',
			type: '家政服务',
			approval: '2020-10-29 12:30:00',
			status: 0,
		},
		{
			time: '2020-12-28 08:30:00',
			type: '维修服务',
			approval: '2020-10-28 11:45:00',
			status: 0,
		}
	],
	//商家中心
	businessCenter: {
		servicelist: [{
				name: '我的订单',
				imgUrl: '../../../../../static/enjoyLife/myorder.svg',
				path: '/pages/tabBar/enjoyLife/order/orderList',
			},
			{
				name: '我的服务',
				imgUrl: '../../../../../static/enjoyLife/myservices.svg',
				path: '/pages/tabBar/enjoyLife/enjoyLifePages/businessCenter/myServices/index',
			},
			{
				name: '接单管理',
				imgUrl: '../../../../../static/enjoyLife/receive.svg',
			},
			{
				name: '我的钱包',
				imgUrl: '../../../../../static/enjoyLife/mywallet.svg',
				path: '/pages/tabBar/enjoyLife/enjoyLifePages/businessCenter/myWallet/index',
			},
			{
				name: '我的报表',
				imgUrl: '../../../../../static/enjoyLife/report.svg',
				path: '/pages/tabBar/enjoyLife/enjoyLifePages/businessCenter/myReport/index',
			},
			{
				name: '评价管理',
				imgUrl: '../../../../../static/enjoyLife/evaluation.svg',
				path: '/pages/tabBar/enjoyLife/enjoyLifePages/businessCenter/evaluationManage/index',
			},
			{
				name: '常见问题',
				imgUrl: '../../../../../static/enjoyLife/problem.svg',
				path: '/pages/tabBar/enjoyLife/enjoyLifePages/businessCenter/commonProblem/index',
			},
			{
				name: '我的认证',
				imgUrl: '../../../../../static/enjoyLife/certificate.svg',
				path: '/pages/tabBar/enjoyLife/enjoyLifePages/businessCenter/myCertification/index',
			}
		],
		myServices: {
			shopping: [{
					imgUrl: '../../../../../../../static/enjoyLife/card.png',
					typeName: '钢琴培训',
					type: '钢琴',
					category: '上门服务',
					num: 12,
				},
				{
					imgUrl: '../../../../../../../static/enjoyLife/card.png',
					typeName: '家具维修',
					type: '维修',
					category: '上门服务',
					num: 3,
				}
			],
			noOnline: [{
					imgUrl: '../../../../../../../static/enjoyLife/card.png',
					typeName: '家政服务',
					type: '家政',
					category: '上门服务',
					num: 0,
				},
				{
					imgUrl: '../../../../../../../static/enjoyLife/card.png',
					typeName: '家政服务',
					type: '家政',
					category: '上门服务',
					num: 0,
				},
				{
					imgUrl: '../../../../../../../static/enjoyLife/card.png',
					typeName: '家具维修',
					type: '维修',
					category: '上门服务',
					num: 0,
				}
			],
			myservices: [{
					imgUrl: '../../../../../../../static/enjoyLife/card.png',
					typeName: '家政服务',
					type: '家政',
					category: '上门服务',
					time: '2020-12-01 17:40:00',
					path: '/pages/tabBar/enjoyLife/enjoyLifePages/businessCenter/myServices/orderReceiveServices/servicesDetail',
				},
				{
					imgUrl: '../../../../../../../static/enjoyLife/card.png',
					typeName: '家具维修',
					type: '维修',
					category: '上门服务',
					time: '2020-12-24 09:00:00',
				},
				{
					imgUrl: '../../../../../../../static/enjoyLife/card.png',
					typeName: '钢琴培训',
					type: '钢琴',
					category: '上门服务',
					num: 12,
				}
			],
			//服务类别选择菜单
			categoryOption: [{
					value: 1,
					label: '清洁保养',
					children: [{
						label: '暂无服务',
					}]
				},
				{
					value: 2,
					label: '家电维修',
					children: [{
						label: '暂无服务',
					}]
				},
				{
					value: 3,
					label: '房屋维修',
					children: [{
						label: '暂无服务',
					}]
				},
				{
					value: 4,
					label: '上门安装',
					children: [{
						label: '暂无服务',
					}]
				},
				{
					value: 5,
					label: '保姆月嫂',
					children: [{
						label: '暂无服务',
					}]
				},
				{
					value: 6,
					label: '兴趣教学',
					children: [{
							value: 7,
							label: '街舞',
						},
						{
							value: 8,
							label: '少儿舞蹈',
						},
						{
							value: 9,
							label: '美术',
						},
						{
							value: 10,
							label: '书法',
						},
						{
							value: 11,
							label: '吉他',
						},
						{
							value: 12,
							label: '古筝',
						},
						{
							value: 13,
							label: '小提琴',
						},
						{
							value: 14,
							label: '钢琴',
						},
						{
							value: 15,
							label: '早教',
						},
						{
							value: 16,
							label: '小学',
						},
						{
							value: 17,
							label: '初中',
						},
						{
							value: 18,
							label: '高中',
						}
					]
				}
			],
			listOption: [
				[{
						value: '1',
						label: '1小时',
					},
					{
						value: '2',
						label: '2小时',
					},
					{
						value: '3',
						label: '3小时',
					},
					{
						value: '4',
						label: '4小时',
					},
					{
						value: '5',
						label: '5小时',
					},
					{
						value: '6',
						label: '6小时',
					}
				],
				[{
						value: '7',
						label: '00分',
					},
					{
						value: '8',
						label: '15分',
					},
					{
						value: '9',
						label: '30分',
					},
					{
						value: '10',
						label: '45分',
					}
				]
			]
		},
		//评价管理
		evaluationManage: [{
				icon: '../../../../../../static/enjoyLife/icon-boy.svg',
				name: '往事随风1987',
				num: 2,
				time: '2020-10-29 15:00:00',
				content: '师傅服务很好，很有耐心，维修质量有保证。',
				imgUrl: '../../../../../../static/enjoyLife/card.png',
				replays: [],
				handleTop: false
			},
			{
				icon: '../../../../../../static/enjoyLife/icon-girl.svg',
				name: '小羊羔1995',
				num: 5,
				time: '2020-10-28 15:53:35',
				content: '家政姐姐收拾东西又快又好，下次还要找她。',
				imgUrl: '../../../../../../static/enjoyLife/card.png',
				replays: [],
				handleTop: false
			},
			{
				icon: '../../../../../../static/enjoyLife/icon-man.svg',
				name: '南侧为就',
				num: 4,
				time: '2020-10-25 10:50:05',
				content: '维修师傅干活细致认真',
				imgUrl: '../../../../../../static/enjoyLife/card.png',
				replays: [],
				handleTop: false
			}
		],
		//常见问题
		hotIssues: [{
				problem: '我早就提现了，为什么还没有到账？',
				content: '我提现的时候都是很快就到账的，无论是提1元还是30元，但它那说了3天到账，等等吧，看3天是不到账，没到就联系一下客服吧，看怎么回事',
			},
			{
				problem: '为什么我发布的服务总是审核失败？',
				content: '我发布订单，为什么老是审核失败，说我什么个人信息不完善，让我填写完善以后在发布？我发布订单，为什么老是审核失败，说我什么个人信息不完善，让我填写完善以后在发布？',
			},
			{
				problem: '我想要更换营业执照怎么办？',
				content: '您好，我是一个企业经营者，随着这几年的企业发展，势头很好，也有了一定的资金基础，现在为了加快企业发展，我计划扩大经营范围，这就涉及变更营业执照经营范围，对这个不是很清楚程序，请问营业执照经营范围怎么变更？',
			},
			{
				problem: '电话联系客户，提示虚拟号码已失效怎么办？',
				content: '今天我就一些问题整理了一下，想向客户咨询一下改怎么处理这类事件，当我打电话联系客户时，提示虚拟号码已失效，这是怎么回事儿，我应该怎么做呢？',
			},
			{
				problem: '商家申诉有效处理内容是哪些？',
				content: '如果买家提供的凭证明显有误，但仍判了商家纠纷率；如果买家明显恶意打假人，多次购买，商家拒绝退款，仍被判了纠纷率。还有机会补救吗？',
			},
			{
				problem: '如何修改订单服务时间？',
				content: '德邦物流。快递员把东西收走了，他们好像有时间限制必须在规定时间内上传单号。但是他要去送货然后再去公司给我开单子。所以他让我更改到5-7点，可是在慧聪的界面没有找到更改时间的地方。',
			}
		]
	}
}
export default data
