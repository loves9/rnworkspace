//
//  FSHttpClient.h
//  rnworkspace
//
//  Created by iFeng on 2019/2/14.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import <AFNetworking/AFNetworking.h>

#import "FSHttpRequest.h"

NS_ASSUME_NONNULL_BEGIN

@interface FSHttpClient : NSObject
/**
 * 默认超时时间，单位秒
 */
@property(nonatomic)NSInteger timeout;

/**
 * 默认请求方式
 */
@property(nonatomic, copy)NSString *method;

+ (FSHttpClient *)instance;

- (NSURLSessionDataTask *)enqueue:(FSHttpRequest *)request;

- (void)cancel:(FSHttpRequest *)request;


@end

NS_ASSUME_NONNULL_END
