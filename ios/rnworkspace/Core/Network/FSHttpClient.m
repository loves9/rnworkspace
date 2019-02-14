//
//  FSHttpClient.m
//  rnworkspace
//
//  Created by iFeng on 2019/2/14.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "FSHttpClient.h"

@interface FSHttpClient()

@property (nonatomic, strong) AFHTTPSessionManager *httpSessionManager;

@end

@implementation FSHttpClient

+ (FSHttpClient *)instance
{
  static FSHttpClient *instance;
  static dispatch_once_t predicate;
  dispatch_once(&predicate, ^{
    instance = [[FSHttpClient alloc] init];
  });
  return instance;
}

- (instancetype)init
{
  self = [super init];
  if (self) {
    _timeout = 30;
//    _queue = [NSMutableDictionary dictionary];
    _httpSessionManager = [AFHTTPSessionManager manager];
  }
  return self;
}

- (NSURLSessionDataTask *)enqueue:(FSHttpRequest *)request
{
//  _httpSessionManager.requestSerializer = request.requestSerializer;
//  _httpSessionManager.responseSerializer = request.responseSerializer;
  
  if ([request.method isEqualToString: @"GET"]) {
    
    [_httpSessionManager GET:request.url parameters:request.requestParams progress:^(NSProgress * _Nonnull downloadProgress) {
      NSLog(@"当前下载进度为:%lf", 1.0 * downloadProgress.completedUnitCount / downloadProgress.totalUnitCount);
      
    } success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
      request.resultData = responseObject;
      request.requestSuccessfulHandler(request);
      
      
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
      
    }];
    
  }else if ([request.method isEqualToString: @"POST"]){
    [_httpSessionManager POST:request.url parameters:request.requestParams progress:^(NSProgress * _Nonnull uploadProgress) {
      
    } success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
      request.resultData = responseObject;
      request.requestSuccessfulHandler(request);
      
      
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
      //
    }];
  }
  
  
  return request.requestTask;
  
}

- (void)cancel:(FSHttpRequest *)request {
  NSURLSessionDataTask *requestTask = request.requestTask;
  if (requestTask){
    [requestTask cancel];
  }
}

@end
