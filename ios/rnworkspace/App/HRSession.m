//
//  HRSession.m
//  rnworkspace
//
//  Created by iFeng on 2018/12/26.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "HRSession.h"

@implementation HRSession

+ (HRSession *)instance
{
  static HRSession * instance;
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    instance = [[HRSession alloc] init];
  });
  
  return instance;
}

- (instancetype)init
{
  self = [super init];
  if (self) {
    self.hrUser = [[HRUser alloc] init];
  }
  return self;
}

@end

HRSession * getHRSession()
{
  return [HRSession instance];
}
