let mask = document.querySelector(".mask");
let fileDom = document.querySelector(".file");
let tis = document.querySelector(".tis");
let progress = document.querySelector(".tis-progress");
let cancel = document.querySelector(".cancel-btn");
// 模拟上传相关
var realUpload = false;
var	simulateId = 0;
var percentage = 0;
var interval = 0
let createUpload = (file, url, key = 'file', header = {}, data = {}) => {
	console.log(`
	上传地址:${url}\n
	请求头:${JSON.stringify(header)}\n
	参数:${JSON.stringify(data)}\n
	1111${file.type}
	`);
	if(file.type === 'image/jpeg' || file.type === 'image/png'
	||file.type === 'image/gif'||file.type === 'image/jpeg' ||
	file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'||file.type === 'application/pdf'
	||file.type === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
	
	if (!url) {
		return;
	}
	tis.style.display = 'flex';

	let formData = new FormData();
	formData.append(key, file);

	for (let keys in data) {
		formData.append(keys, data[keys]);
	}
	 // 模拟上传-真实上传切换
	 if (realUpload) {
	 	uploadFile(file,url,key = 'file', header = {}, data = {}, formData)
	 } else {
	 	simulateUpload(file,url,key = 'file', header = {}, data = {}, formData)
	 }	
		
	} else {
		plus.nativeUI.toast('文件格式不正确');
		setTimeout(()=>{
			tis.style.display = 'none';
			plus.webview.currentWebview().close();
		},1000);
	}
	// cancel.addEventListener("click", () => {
	// 	xhr.abort();
	// 	plus.webview.currentWebview().close();
	// });

}
// 模拟进度
let setProgress= (i) => {
	const endPro = 90
	interval = setInterval(() => {
		if (percentage < endPro) {
		    percentage = percentage + i
			let percent = percentage + '%';
			progress.innerText = `努力上传中..${percent}`;
		}
	}, 100)
}
// 模拟上传
let simulateUpload = (file, url, key = 'file', header = {}, data = {},formData) => {
	setProgress(10)			
	setTimeout(() => {
		progress.innerText = '上传成功';
		percentage = 0
		clearInterval(interval)
		const fileName = file.name;
		const id = simulateId + 1;
		simulateId = id
		location.href = `callback?fileName=${escape(file.name)}&id=${escape(id)}`;
		setTimeout(() => {
		   plus.webview.currentWebview().close();
		}, 200);
	},3000)	
}
// 真实上传
let uploadFile = (file, url, key = 'file', header = {}, data = {},formData) => {
	let xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	
	for (let keys in header) {
		xhr.setRequestHeader(keys, header[keys]);
	}
	xhr.upload.addEventListener("progress", function(event) {
		if (event.lengthComputable) {
			let percent = Math.ceil(event.loaded * 100 / event.total) + "%";
			progress.innerText = `努力上传中..${percent}`;
		}
	}, false);
	
	xhr.ontimeout = function() {
		// xhr请求超时事件处理
		progress.innerText = '请求超时';
		setTimeout(() => {
			tis.style.display = 'none';
			plus.webview.currentWebview().close();
		}, 1000);
	};
	
	xhr.onreadystatechange = (ev) => {
	
		if (xhr.readyState == 4) {
			console.log('status：' + xhr.status);
	
			if (xhr.status == 200) {
				progress.innerText = '上传成功';
				console.log('返回数据：' + xhr.responseText);
				location.href = `callback?fileName=${escape(file.name)}&id=${escape(xhr.responseText)}`;
			} else {
				progress.innerText = '上传失败了';
			}
	
			setTimeout(() => {
				tis.style.display = 'none';
				plus.webview.currentWebview().close();
			}, 1200);
	
		}
	};
	 xhr.send(formData);
}

mask.addEventListener("click", () => {
	plus.webview.currentWebview().close();
});

document.addEventListener('UniAppJSBridgeReady', () => {
	let {
		url,
		key,
		header,
		formData
	} = plus.webview.currentWebview();
	fileDom.addEventListener('change', (event) => {
		let file = fileDom.files[0];
		console.log('fileDom1111:;', file.type)
		if (file.size > (1024 * 1024 * 10)) {
			plus.nativeUI.toast('单个文件请勿超过10M,请重新上传');
			return;
		}
		createUpload(file, url, key, header, formData);
	}, false);
});
