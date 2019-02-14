//
//  FSHttpRequest.m
//  rnworkspace
//
//  Created by iFeng on 2019/2/14.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "FSHttpRequest.h"

#import "FSHttpClient.h"

@implementation FSHttpRequest

- (instancetype)init
{
  self = [super init];
  if (self) {
    _requestParams = [[NSMutableDictionary alloc] init];
    _multiPartParams = [[NSMutableDictionary alloc] init];
    _headers = [[NSMutableDictionary alloc] init];
    _timeout = 30;
    _method = @"POST";
    _tag = [NSString stringWithFormat:@"%.0f", [NSDate date].timeIntervalSince1970 * 1000];
    _mediaType = JSON;
  }
  return self;
}

/**
 *  构造方法
 *
 *  @param url        Http 请求地址
 *  @param method     请求方法
 */
- (instancetype)initWithURL:(NSString *)url
                     method:(FSHttpRequestMethod)method
{
  return [self initWithURL:url parameter:@{} method:method];
}

-(instancetype)initWithURL:(NSString *) url
                 parameter:(NSDictionary *) parameter
                    method:(FSHttpRequestMethod)method
{
  if ([self init]){
    switch (method) {
        case HttpRequestMethodGet:
        self.method = @"GET";
        break;
        
        case HttpRequestMethodPost:
        self.method = @"POST";
        break;
        
      default:
        self.method = @"POST";

        break;

    }
    
    self.url = url;
  }
  
  return self;
}

#pragma mark - 执行
-(void)execute
{
  //添加公共参数
//  [self addGlobalParameter:self.params];
  
  //执行请求
  [[FSHttpClient instance] enqueue:self];
}

@end
