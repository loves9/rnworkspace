//
//  AppInfo.m
//  rnworkspace
//
//  Created by iFeng on 2018/12/21.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "AppInfo.h"
#import <FenngKit/FenngKit.h>

@interface AppInfo ()
- (void)initData;
@end

@implementation AppInfo

// 单例方式获取AppInfo实例
+ (AppInfo *)instance
{
  static dispatch_once_t pred = 0;
  __strong static AppInfo *instance = nil;
  
  dispatch_once(&pred, ^{
    instance = [[self alloc] init];
    [instance initData];
  });
  
  return instance;
}

// 属性赋值
- (void)initData
{
  NSDictionary *dict      = [[NSBundle mainBundle] infoDictionary];
  FSJSONObject *config   = [[FSJSONObject alloc]initWithDictionary:dict];
  
  self.displayName        = [dict valueForKey:@"CFBundleDisplayName"];        // 应用显示名
  self.shortVersion       = [dict valueForKey:@"CFBundleShortVersionString"]; // 发布版本号
  self.version            = [dict valueForKey:@"CFBundleVersion"];            // 内部版本号
  self.bundleIdentifier   = [dict valueForKey:@"CFBundleIdentifier"];         // 应用BundleIdentifier
//  self.buildDateTime      = [dict valueForKey:@"BuildDateTime"];
  
  self.configVersion      = @"0";     // Config版本号
  self.deviceToken        = @"";      // 应用deviceToken
  
  self.internalVersion    = [config optInteger:@"InternalVersion" defaultValue:0];
}

- (NSString *)description
{
  return [NSString stringWithFormat:@"{\"displayName\":\"%@\",\"shortVersion\":\"%@\",\"version\":\"%@\",\"bundleIdentifier\":\"%@\",\"configVersion\":\"%@\",\"deviceToken\":\"%@\"}", self.displayName, self.shortVersion, self.version, self.bundleIdentifier, self.configVersion, self.deviceToken];
}

@end
