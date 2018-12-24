//
//  AppInfo.h
//  rnworkspace
//
//  Created by iFeng on 2018/12/21.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface AppInfo : NSObject

@property(copy, nonatomic)NSString *displayName;      // 应用显示名
@property(copy, nonatomic)NSString *shortVersion;     // 发布版本号
@property(copy, nonatomic)NSString *version;          // 内部版本号
@property(copy, nonatomic)NSString *deviceToken;      // 应用deviceToken
@property(copy, nonatomic)NSString *bundleIdentifier; // 应用BundleIdentifier
@property(copy, nonatomic)NSString *buildDateTime;    // 应用build时间：YYYYMMDDhhmmss
@property(assign, nonatomic)BOOL   isFirstRun;        // 是否是第一次运行
@property(assign, nonatomic)BOOL   isUpgradeAfterFirstRun;    // 是否是更新后第一次运行

@property(assign, nonatomic)NSInteger internalVersion; //数值型内部版本号

@property(strong, nonatomic)NSString *configVersion;    // Config版本号

// 单例方式获取AppInfo实例
+ (AppInfo *)instance;

@end

NS_ASSUME_NONNULL_END
