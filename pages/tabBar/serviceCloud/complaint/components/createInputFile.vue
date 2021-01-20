<template>
<view>
    <div class="content">
        <div class="fixed mask" @click="closeFileDialog"></div>

        <div align="center" class="fixed tis">
            <div class="tis-content">
                <div>
                    <!-- <img src="../../static/img.png" > -->
                </div>
                <div class="tis-progress">努力上传中..</div>
                <div class="cancel"></div>
            </div>
        </div>

        <div class="fixed file-content">
            <div class="btn">
                <button type="button" class="btn-bg">打开文件管理器</button>
                <!-- <input class="file" type="file" /> -->
            </div>
        </div>
    </div>
</view>
</template>

<script>
export default {
    data() {
        return {
            fileBox: '',
            tis: '',
            progress: '',
            mask: '',
            fileDom: '',
			// 模拟上传相关
			realUpload:false,
			simulateId: 0,
			percentage: 0,
			interval: 0
			
        };
    },
    mounted() {
        this.fileBox = document.querySelector('.content');
        this.tis = document.querySelector('.tis');
        this.progress = document.querySelector('.tis-progress');
        this.mask = document.querySelector('.mask');
        this.fileDom = document.querySelector('.file');
    },
    methods: {
        //文件改变
        fileChange(url, key, formData) {
            let file = document.querySelector('.file').files[0];
            if (file.size > 1024 * 1024 * 10) {
                uni.showToast({
                    title: '单个文件请勿超过10M,请重新上传',
                    mask: true,
                    icon: 'none'
                });
                return;
            }
            this.createUpload(file, url, key, formData);
        },
        //关闭
        closeFileDialog() {
            this.fileBox.style.display = 'none';
        },
        //打开
        openFileDialog() {
            this.fileBox.style.display = 'block';
        },
        //创建上传请求
        createUpload(file, url, key = 'file', header = {}, data = {}) {
            console.log('123', file.type)
            if (file.type === 'image/jpeg' || file.type === 'image/png' ||
                file.type === 'image/gif' || file.type === 'image/jpeg' ||
                file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.type === 'application/pdf' ||
                file.type === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
                if (!url) {
                    return;
                }
                this.tis.style.display = 'flex';
                let formData = new FormData();
                formData.append(key, file);
                for (let keys in data) {
                    formData.append(keys, data[keys]);
                }

				// 模拟上传-真实上传切换
				if (this.realUpload) {
					this.uploadFile(file,url,key = 'file', header = {}, data = {}, formData)
				} else {
					this.simulateUpload(file,url,key = 'file', header = {}, data = {}, formData)
				}	
                
            } else {
                document.querySelector('.tis').style.display = 'flex';
                document.querySelector('.tis-progress').innerText = '文件格式不正确';
                setTimeout(() => {
                    this.tis.style.display = 'none';
                    this.fileBox.style.display = 'none';
                }, 600);
            }
        },
		// 模拟进度
		 setProgress(i) {
		      const that = this
		      const endPro = 90
		      that.interval = setInterval(() => {
		        if (that.percentage < endPro) {
		          that.percentage = that.percentage + i
				  let percent = that.percentage + '%';
				  document.querySelector('.tis-progress').innerText = `努力上传中..${percent}`;
		        }
		      }, 100)
		},
		// 模拟上传过程
		simulateUpload(file,url,key = 'file', header = {}, data = {}, formData) {
			// let percent = 98 + '%';
			// document.querySelector('.tis-progress').innerText = `努力上传中..${percent}`;
			console.log(this.percentage)
			this.setProgress(10)			
			setTimeout(() => {
				document.querySelector('.tis-progress').innerText = '上传成功';
				this.percentage = 0
				clearInterval(this.interval)
				const fileName = file.name;
				const id = this.simulateId + 1;
				this.simulateId = id
				setTimeout(() => {
				    this.tis.style.display = 'none';
				    this.fileBox.style.display = 'none';
				    this.$emit('up-success', {
				        fileName,
				        data: {
				            id: id,
				            statusCode: 200
				        }
				    })
				}, 200);
			},3000)	
		},
		// 真实的上过程
		uploadFile(file,url,key = 'file', header = {}, data = {}, formData) {
			let xhr = new XMLHttpRequest();
			xhr.open('POST', url, true);
			for (let keys in header) {
			    xhr.setRequestHeader(keys, header[keys]);
			}
			xhr.upload.addEventListener(
			    'progress',
			    function (event) {
			        if (event.lengthComputable) {
			            let percent = Math.ceil((event.loaded * 98) / event.total) + '%';
			            document.querySelector('.tis-progress').innerText = `努力上传中..${percent}`;
			        }
			    },
			    false
			);
			xhr.ontimeout = function () {
			    // xhr请求超时事件处理
			    document.querySelector('.tis-progress').innerText = '请求超时';
			    setTimeout(() => {
			        this.tips.style.display = 'none';
			        this.content.style.display = 'none';
			    }, 1000);
			};
			xhr.onreadystatechange = ev => {
			    if (xhr.readyState == 4) {
			        console.log('status：' + xhr.status);
			        if (xhr.status == 200) {
			            document.querySelector('.tis-progress').innerText = '上传成功';
			            const fileName = file.name;
			            const id = xhr.responseText;
			            setTimeout(() => {
			                this.tis.style.display = 'none';
			                this.fileBox.style.display = 'none';
			                this.$emit('up-success', {
			                    fileName,
			                    data: {
			                        id: id,
			                        statusCode: 200
			                    }
			                })
			            }, 200);
			
			        } else {
			            document.querySelector('.tis-progress').innerText = '上传失败了';
			            setTimeout(() => {
			                this.tis.style.display = 'none';
			                this.fileBox.style.display = 'none';
			            }, 200);
			        }
			    }
			};
			xhr.send(formData);
		}
		
	}
};
</script>

<style lang="less" scoped>
/* #ifdef H5 */
.content {
    background: transparent;
    display: none;
}

.fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
}

.content .mask {
    top: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 90;
}

.content .file-content {
    z-index: 91;
    height: 60px;
    background: #fff;
    text-align: center;
    bottom: 0px;
}

.btn {
    position: relative;
}

.file {
    position: absolute;
    z-index: 93;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 60px;
    width: 100%;
    opacity: 0;
}

.btn-bg {
    margin-top: 10px;
    background: #0066cc;
    color: #fff;
    width: 80%;
    height: 40px;
    border: 0;
    border-radius: 5px;
    line-height: 40px;
}

.tis {
    top: 0;
    z-index: 95;
    display: none;
    justify-content: center;
    align-items: center;
}

.tis .tis-content {
    background: #fff;
    width: 60%;
    border-radius: 10px;
    padding: 20px 0;
}

.tis .tis-content img {
    width: 50px;
    height: 50px;
}

.tis-progress {
    margin: 10px 0;
    color: #999;
}

.cancel-btn {
    margin-top: 30px;
    height: 30px;
    line-height: 1;
    padding: 0 2em;
    background: #e3e3e3;
    color: #898989;
    border: 0;
    border-radius: 5px;
}

/*#endif*/
</style>
