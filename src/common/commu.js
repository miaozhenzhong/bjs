// --------------------通讯模块--------------------------

import axios from 'axios'
import Vue from 'Vue'
import {commuConfig} from '../common/config'  //通讯配置url

import {decryptu} from '../common/encryption'
var formAxiosInstance = null
var jsonAxiosInstance = null
var filejsonAxiosInstance = null
var baseUrl = commuConfig.baseUrl
axios.defaults.withCredentials = true
var _bus = new Vue()
var num = 0
var userName
var _addResponseInterceptor = function (axios) {
  axios.interceptors.request.use(config => {
    if (config.baseURL === baseUrl) {
      console.log(decryptu(1,'USERINFO'),'sa45d6a5s4d64as6d4sa4dsa54d4as6d46as4d56')
      if (config.url !== baseUrl + '/user/login') {
        if (!decryptu(1,'USERINFO')) {
          _bus.$emit('exitlogin','4')
          num = 0
          return config
        } else {
          num++
          _bus.$emit('showloadingtoast')
          return config
        }
      } else {
        num++
        _bus.$emit('showloadingtoast')
        return config
      }
    }
  }, function (err) {
    return Promise.reject(error);
  });
  axios.interceptors.response.use(response => {
    num--
    if (num <= 0) {
      console.log('loading消失')
      _bus.$emit('closeLoadingToast')
      _bus.$emit('runcookie')
    } else {
      console.log('出现loading')
      _bus.$emit('showloadingtoast')      
    }
    if (response.data.code === -1) {
      _bus.$emit('show_remote_msg', response.data.message)   //emit:发出
    }
    console.log(num,'响应')
    return response
  }, error => {
    num--
    if (num === 0) {
      _bus.$emit('reuesterror',error)      
    }
    if (error.code === 'ECONNABORTED') {
      _bus.$emit('timeout')
    } 
    return Promise.reject(error)
  })
}
var _createAxois = function (baseurl,contentType) {
  return axios.create({
    baseURL: baseurl,
    timeout: commuConfig.timeout,
    headers: {
      'Content-Type': contentType
      // 'userAccount': userName?userName:null
    }
  })
}
var _json = function () {
  if (!jsonAxiosInstance) {
    jsonAxiosInstance = _createAxois(baseUrl,'application/json;charset=utf-8')
    _addResponseInterceptor(jsonAxiosInstance)
  }
  // ;charset=utf-8
  return jsonAxiosInstance
}
var _form = function () {
  if (!formAxiosInstance) {
    formAxiosInstance = _createAxois(baseUrl,'application/x-www-form-urlencoded;charset=utf-8')
    // ;charset=utf-8
    _addResponseInterceptor(formAxiosInstance)
  }
  return formAxiosInstance
}
var _formPost = function (url, data) {
  return _form().post(url, data).catch(error => {
    console.warn(error.message)
  })
}
var _jsonPost = function (url, data, ble) {
  return _json(ble).post(url, data).catch(error => {
    console.warn(error.message)
  })
}
var _Get = function (url) {
  return _json().get(url).catch(error => {
    console.warn(error.message)
  })
}
export var bus = _bus   //事件总线
export var formPost = _formPost   //表单请求
export var jsonPost = _jsonPost   //POST请求
export var Get = _Get   //GET请求
