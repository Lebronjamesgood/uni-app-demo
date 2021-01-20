/**
  * @Description: 用户标识
  * @author Administrator 梁启兴
  */

const TokenKey = 'Token'

export function getToken() {
	return uni.getStorageInfoSync(TokenKey)
}

export function setToken(token) {
	return uni.setStorageInfoSync(TokenKey,token)
}

export function removeToken(token) {
	return uni.removeStorageSync(TokenKey)
}