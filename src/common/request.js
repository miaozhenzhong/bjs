
import axios from 'axios';
import {bus} from './EventBus'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
NProgress.configure({ showSpinner: false });
const _TIMEOUT = 30;             // 超时时间默认30s
const _DEVBASEURL = '';          // 开发环境请求地址
const _PROBASEURL = '';          // 生产环境请求地址
let baseURL = process.env.NODE_ENV == 'development'?_DEVBASEURL:process.env.NODE_ENV == 'production'?_PROBASEURL:'';
console.log(baseURL,"process.env.NODE_ENV",process.env.NODE_ENV)
let _JSON = null;
let _FORM = null;
let _FILE = null;
var num = 0

// const cancelToken = axios.CancelToken;    // 如需拦截请重复请求，请使用此方法
// let cancel;

let _CONFIG = (type,url) => {
  return {
    baseURL: url || baseURL,
    timeout: _TIMEOUT * 1000,
    withCredentials: true,
    headers: {
      'Content-Type': type
    }
  };
};

let _INTERCEPT = axios => {
  
  axios.interceptors.request.use( // 请求拦截
    function(config) {
      // 请求前执行一些操作
      // 切记 return config，不然请求无法发送，然后报错
      num++;
     
// setTimeout(function(){
//   NProgress.done(); 
// },1500)
      if(num<=1){
        NProgress.start(); 
        //  bus.$emit('showloadingtoast')
      }
      return config;
    },
    function(error) {
      // 报错信息
     
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(  // 响应拦截
    function(response) {
      num--;
      // 响应前执行一些操作
      if(num<=0){
        NProgress.done(); 
        // bus.$emit('closeLoadingToast')
      }
      // if (response.data.code === -1) {
      //   bus.$emit('show_remote_msg', response.data.message)   //emit:发出
      // }
      // 切记 return response，不然无法接收响应，然后报错
      return response;
    },
    function (error) {
      // 报错信息
      num--
      if (num === 0) {
        bus.$emit('reuesterror',error)      
      }
      if (error.code === 'ECONNABORTED') {
        bus.$emit('timeout')
      } 
      return Promise.reject(error);
    },
  );
};

let CREATAXIOSJSON = () => {  // 创建JSON类型请求
  if (!_JSON) {
    _JSON = axios.create(_CONFIG('application/json;charset=utf-8'));
    _INTERCEPT(_JSON);
  };
  return _JSON;
};

let CREATAXIOSFORM = () => {  // 创建表单类型请求
  if (!_FORM) {
    _FORM = axios.create(_CONFIG('application/x-www-form-urlencoded;charset=utf-8'));
    _INTERCEPT(_FORM);
  };
  return _FORM
};

let CREATAXIOSFILE = () => {  // 创建此请求用于请求前端静态文件
  if (!_FILE) {
    _FILE = axios.create(_CONFIG('此处自行填写URL','application/json;charset=utf-8'));
    _INTERCEPT(_FILE);
  };
};

const JSONPOST = (url, data) => { // jsonpost请求
  return CREATAXIOSJSON().post(url, data).catch((error) => {
    console.warn(error.message);
  });
};

const FORMPOST = (url, data) => { // formpost请求
  return CREATAXIOSFORM().post(url, data).catch((error) => {
    console.warn(error.message);
  });
};

const GET = url => {  // get请求
  return CREATAXIOSJSON().get(url).catch((error) => {
    console.warn(error.message);
  });
};

const FILEGET = url => {  //静态文件请求
  return CREATAXIOSFILE().get(url).catch((error) => {
    console.warn(error.message);
  });
};


export const formPost = FORMPOST;
export const jsonPost = JSONPOST;
export const Get = GET;
export const fileGet = FILEGET;
