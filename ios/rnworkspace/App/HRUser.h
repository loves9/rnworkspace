//
//  HRUser.h
//  rnworkspace
//
//  Created by iFeng on 2018/12/26.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface HRUser : NSObject
// 手机号
@property(nonatomic, copy)NSString * Mobile;

// 用户ID
@property (copy,nonatomic) NSString*  UserId;

// 访问Token
@property (copy,nonatomic)  NSString* AccessToken;

//是否登录
@property (assign,nonatomic) BOOL isLogin;

@end

NS_ASSUME_NONNULL_END
