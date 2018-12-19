// import axios from 'axios'
// import { baseURL } from '../config';
// import Statistics from './statistics'

import { NativeModules } from "react-native";

const baseURL = "http://10.65.105.224:3030";

const HRDialogModule = NativeModules.HRDialogModule;

class BusinessRequest {
    constructor(options = {}) {}
    /**
     *  http 状态码对应的文本
     */
    statusReasons = {
        100: "Continue",
        101: "Switching Protocols",
        102: "Processing",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        207: "Multi-Status",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Moved Temporarily",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Time-out",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Request Entity Too Large",
        414: "Request-URI Too Large",
        415: "Unsupported Media Type",
        416: "Requested range not satisfiable",
        417: "Expectation Failed",
        422: "Unprocessable Entity",
        423: "Locked",
        424: "Failed Dependency",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Time-out",
        505: "HTTP Version not supported",
        507: "Insufficient Storage",
        1000: "Request Timeout",
        1002: "Cannot Connect To Host",
        1003: "Unknown error",
        1004: "Not network",
        1008: "Not Connected To Internet",
        4000: "Transaction fail",
        4001: "Parse data fail"
    };

    //----------------- 请求数据 ---------------
    config = {
        method: "GET",
        url: "",
        parameter: {},

        mask: true,

        /**
         *  ProgressBar 要显示的文字，该属性可以有三种状态：
         *
         *  1. ''    :空串，发送http请求的过程中显示一个带有缺省文字的 ProgressBar。
         *  2. null  :空值，发送http请求的过程中不显示 ProgressBar。
         *  3. string:非空字符串，发送http请求的过程中显示一个 ProgressBar，其中的文字为该属性设定的值。
         */
        maskMsg: "请稍候...",

        /**
         *  http请求出错时是否自动显示 toast 消息，测试环境下此值无效，强制弹出错误 toast 。
         */
        autoToast: true,

        /**
         * 请求数据的类型，它决定了 htpp 请求返回的数据类型及数据加载的位置。可以取以下值之一：
         * ’json‘：
         *      从服务加载 JSON 格式数据，请求如果成功返回，则 resultData 属性是一个 JSON 对象。
         *
         */
        dataType: "json" //内部使用属性，不要访问。
    };

    requestId = "";

    //请求队列相关数据
    requestCount = 0;
    requestIdPrefix = (function() {
        var date = new Date();
        return (
            "R" +
            date.getHours() +
            date.getMinutes() +
            date.getSeconds() +
            date.getMilliseconds()
        );
    })();
    getReqeustId() {
        let random = "";
        return this.requestIdPrefix + this.requestCount++;
    }

    baseRequest(args) {
        //公共参数
        var _parameter = {
            //这里可添加公共参数，预留
            _Guid: this.getReqeustId()
        };

        //合并业务请求参数
        if (args.hasOwnProperty("parameter")) {
            var keys = Object.keys(args.parameter);
            keys.forEach(function(key) {
                _parameter[key] = args.parameter[key];
            });
        }

        var _url = "";
        // url如果包含api://就拼接baseurl
        if (args.url.indexOf("api://") != -1) {
            _url = args.url.replace("api:/", baseURL);
        } else {
            _url = args.url;
        }

        this.config.method = args.method ? args.method : "json";
        this.config.url = _url;
        this.config.parameter = _parameter;
        this.config.maskMsg = args.maskMsg ? args.maskMsg : this.config.maskMsg;
        this.config.autoToast = args.autoToast ? true : false;
        this.config.dataType = args.dataType;

        if (args.mask != undefined) {
            this.config.mask = false;
        }

        return this;
    }

    beforeRequest() {
        if (this.config.mask) {
            HRDialogModule.showLoading("请稍候...");

            // 设置超时消失
            setTimeout(() => {
                HRDialogModule.closeLoading();
            }, 6000);
        }
    }

    /**
     * Application.BusinessRequest
     *
     * @method send
     *
     * 发送 http 请求
     * @param parameter {Object}
     * 请求参数字典
     */
    send(parameter) {
        this.beforeRequest();

        let _this = this;

        parameter = parameter || this.config.parameter;

        fetch(_this.config.url, {
            method: _this.config.method,
            headers: {
                "Content-Type": "application/json"
            }
            // body: parameter
        })
            .then(response => {
                let responseData = response.json();

                let responseStatus = response.status;
                let responsestatusText = response.statusText;
                let resultData = response._bodyText;

                // 请求成功
                if (responseStatus == 200) {
                    // TODO: 判断业务成功与否

                    this.success(resultData, responseStatus, responsestatusText)
                }

                // 请求成功 loading消失
                HRDialogModule.closeLoading();
                return responseData;
            })
            .then(responseJson => {
                return responseJson;
            })
            .catch(error => {
                console.error(error);
                if (this.config.autoToast) {
                    HRDialogModule.toast("请求异常" + error);
                }

                // 错误回传
                this.error(error);
            });
    }
}

export default BusinessRequest;
