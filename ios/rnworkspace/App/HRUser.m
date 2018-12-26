//
//  HRUser.m
//  rnworkspace
//
//  Created by iFeng on 2018/12/26.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "HRUser.h"

#import <FenngKit/FenngKit.h>

@implementation HRUser

- (instancetype)init
{
  self = [super init];
  if (self) {
    [self initData];
  }
  return self;
}

- (void)initData
{
  _UserId = @"";
  _AccessToken = @"";
  _Mobile = @"186500000";
  
  _isLogin = NO;
}

- (void)reset
{
  [self initData];
}

- (void)setUserData:(NSString *)name
{
  if (!name) return;
  
  NSUserDefaults *standardata = [NSUserDefaults standardUserDefaults];
  NSMutableDictionary  *userdata = [[NSMutableDictionary alloc]init];
  
  [userdata setValue:_Mobile forKey:@"Mobile"];
  [userdata setValue:_AccessToken forKey:@"AccessToken"];
  
  [standardata setValue:userdata forKey:[NSString stringWithFormat:@"name%@",name]];
  [standardata synchronize];

}

- (void)loadUserData:(NSString*)mobile
{
  if (!mobile){
    NSAssert(NO ,@"用户名为空！");
  }
  
  NSUserDefaults *df = [NSUserDefaults standardUserDefaults];
  
  NSDictionary *userdata = [df objectForKey:[NSString stringWithFormat:@"name%@", mobile]];
  if (userdata && [userdata isKindOfClass:[NSDictionary class]]) {
    FSJSONObject * session = [[FSJSONObject alloc]initWithDictionary:userdata];

    _Mobile = [session optString:@"Mobile" defaultValue:@""];
    _AccessToken = [session optString:@"AccessToken" defaultValue:@""];
  }
}

@end
