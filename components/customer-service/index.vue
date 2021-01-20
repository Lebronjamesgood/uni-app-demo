<template>
	<view>
		<IdeaKefu ref="kefu" :siteid="siteId" @version="version" @onmsg="onmsg">
			<view slot="welcome" class="welcome">
				<text>HI，您好，我是智能客服小冰冰，您有什么问题，可以直接输入框问询，您也可以直接选择常用问题，更快捷哦！</text>
			</view>
		</IdeaKefu>
	</view>
	
</template>

<script>
	import IdeaKefu from "./components/idea-kefu/idea-kefu.vue"
	export default {
		components:{
			IdeaKefu
		},
		data() {
			return {
				siteId:88, //2号是系统客服,
				addonform:{show:false}
			}
		},
		onLoad(opts) {
			//通过 ?siteid=xx来传值
			if(!!opts.siteid){
				this.siteId = +opts.siteid
			}
		},
		methods: {
			onmsg(e){
				console.log("e.num="+e.num)
				console.log("e.msg="+e.msg)
			},
			version(v){
					console.log("当前常见版本号",v)
			}
		}
	}
</script>

<style lang="less">
.welcome{
	display: flex;
	flex-direction: column;
	text{
		font-family: SourceHanSansCN, SourceHanSansCN-Normal;
		margin: 2px 2px 2px 2px;
	}
	uni-text {
		font-size: 28rpx;
		color: #585858;
		font-weight: 500;
		font-family: SourceHanSansCN, SourceHanSansCN-Normal;
	}
}
.footer{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

}
.btn{
    margin: 5px 5px 5px 5px;
    height:24 + px;
    line-height:24 + px;
    padding: 0 0.3em;
    font-size: 14px;
    box-sizing:content-box;//重置input submit、buttonbox-sizing border-box 为content-box。做到一致的表现 //ie7手动添加border高度
    vertical-align: text-top;
    display: inline-block;
    *display: inline;
    *zoom:1;
    border:1px solid #ddd;
    background-color: #ddd;
    border-radius: 3px;
    overflow: visible;//IE7下文字表现左右空格
    color: #333;
    cursor: pointer;
    input[type="submit"]{//IE7下黑色边框问题，采用label包裹input[type="submit"]方式
        background:transparent;
        border:none;
        line-height:24 + px;
        height:24 + px;
        display: block;
        vertical-align: text-top;
        font-size:14px;
        margin:0 -6px;
        *overflow: visible;
        *margin:0;
        color: #fff
    }
    
    &:hover{
        opacity: 0.8;
        filter:alpha(opacity=80); 
    }
    &:active{
        opacity:1;
        filter:alpha(opacity=100); 
    }
    &:focus{
        outline: 0;
        outline: 5px auto -webkit-focus-ring-color;
        outline-offset: -2px;
    }
    &:visited{
        opacity:1;
        filter:alpha(opacity=100); 
    }
    
    @at-root{
        /* 处理火狐-moz-focus-inner内默认padding值，导致line-height文字不居中问题*/
        button::-moz-focus-inner,
        input[type="button"]::-moz-focus-inner,
        input[type="submit"]::-moz-focus-inner,
        input[type="reset"]::-moz-focus-inner { 
            border:none; 
            padding:0 inherit; 
        }
        input[type="submit"].btn,
        input[type="button"].btn,
        input[type="reset"].btn,
        button.btn{
            *height:(24 + 2) + px;//处理IE7 box-sizing问题。submit,button,reset表现为border-box问题
            *line-height:(24 - 2) + px;
        }
        a.btn{
            color:inherit;
            text-decoration:none;
        }
    }
}

.btn-default{
    color: #333;
    background-color: #fff;
    border-color: #ccc;}
.btn-danger{
    color: #fff;
    background-color: #d9534f;
    border-color: #d43f3a;}
.btn-warning{
    color: #fff;
    background-color: #f0ad4e;
    border-color: #eea236;}
.btn-info{
    color: #fff;
    background-color: #5bc0de;
    border-color: #46b8da;        }
.btn-success{
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;    }
.btn-primary{
    color: #fff;
    background-color: #428bca;
    border-color: #357ebd;}
</style>
