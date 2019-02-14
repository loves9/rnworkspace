//
//  FSHttpRequest.h
//  rnworkspace
//
//  Created by iFeng on 2019/2/14.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import <AFNetworking/AFNetworking.h>


NS_ASSUME_NONNULL_BEGIN

typedef NS_ENUM(NSInteger, FSRequestMediaType) {
  JSON,
  FORM,
  MULTI_PART
};

typedef NS_ENUM(NSInteger, FSResponseAcceptType) {
  FSResponseAcceptTypeNone = 0,  // 不指定 Accept
  FSResponseAcceptTypeAutomation,
  FSResponseAcceptTypeJSON,     // application/json;charset=utf-8;
  FSResponseAcceptTypeData,     // application/octet-stream
  FSResponseAcceptTypeText,     // text/plain;charset=utf-8;
  FSResponseAcceptTypeImage,    // image/png,image/gif,image/jpge
  FSResponseAcceptTypeAny       // */*
  
};

typedef NS_ENUM(NSUInteger, FSHttpRequestMethod) {
  HttpRequestMethodGet = 0,
  HttpRequestMethodPost
  //    HttpRequestMethodDelete
};

@class FSHttpRequest;
//Http 请求回调函数。
typedef void (^FSHttpRequestBlock)(FSHttpRequest *request);

/**
 *  Http 请求发错误时的回调函数。
 *  如果 error 对象类型为 LKLServerErrorCode 则说明是服务器返回了非 “000000”状态，
 *　可从 request.resultMessage 取出错误消息，也可使用 “resultMessage” key 从
 *  error.userInfo 字典中取出错误消息。
 *
 *  如果 error 对象为其它错对象类型可使用 “message”,"code" 从 error.userInfo 字典中取出错误消息。
 *
 *  @param request 请求对象
 *  @param error   错误对象
 *
 */
typedef void (^FSHttpRequestFailedBlock) (FSHttpRequest *request, NSError *error);
//HttpRequest 进度回调函数。
typedef void (^FSHttpRequestProgressBlock) (FSHttpRequest *request, double progress);

@interface FSHttpRequest : NSObject

/**
 * 请求 URL
 */
@property (nonatomic, copy) NSString *url;
/**
 * 请求参数
 */
@property (nonatomic, strong) NSMutableDictionary *requestParams;
/**
 * multi-part 请求参数
 */
@property (nonatomic, strong) NSMutableDictionary *multiPartParams;
/**
 * 请求头
 */
@property (nonatomic, strong) NSMutableDictionary *headers;
/**
 * 超时时间
 */
@property (nonatomic) NSInteger timeout;
/**
 * 请求标识
 */
@property (nonatomic, copy) NSString *tag;
/**
 * 请求方法
 */
@property (nonatomic, copy) NSString *method;
/**
 * 请求媒介
 */
@property (nonatomic) FSRequestMediaType mediaType;

/**
 * AFNetworking 请求序列化对象
 */
@property (nonatomic, strong) AFHTTPRequestSerializer *requestSerializer;
/**
 * AFNetworking 响应序列化对象
 */
@property (nonatomic, strong) AFHTTPResponseSerializer *responseSerializer;
/**
 * AFNetworking 请求任务
 */
@property (nonatomic, strong) NSURLSessionDataTask *requestTask;

/**
 *  Http 请求成功处理器，如果 isFromCache = true 表示本次返回的是缓存的数据。
 *  处理器中需要检测 requestState 值，如果不等于 LKLHttpRequestStateFinished，
 *  则表示请求仍在进行，该事件可能还会在次发送。
 *  结果数据保存在 resultData 属性中。
 */
@property (copy,nonatomic) FSHttpRequestBlock requestSuccessfulHandler;

/**
 *  Http 请求失败处理器
 */
@property (copy,nonatomic) FSHttpRequestFailedBlock requestFailedHandler;

/**
 *  服务器结果码，数据正常返回时此值为 "000000"。
 */
@property (copy, nonatomic, readonly)NSString* resultCode;

@property (strong, nonatomic)id resultData;

/**
 *  服务器返回的消息，是服务器结果数据中 message 字段的内容。
 */
@property (copy, nonatomic, readonly)NSString* resultMessage;

- (instancetype)initWithURL:(NSString*)url
                     method:(FSHttpRequestMethod)method;

- (instancetype)initWithURL:(NSString*)url
                 parameter:(NSDictionary*)parameter
                    method:(FSHttpRequestMethod)method;

- (void)execute;

@end

NS_ASSUME_NONNULL_END
