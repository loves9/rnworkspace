//
//  HRTestModule.m
//  rnworkspace
//
//  Created by iFeng on 2018/12/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "HRTestModule.h"

@implementation HRTestModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getUser:(NSString *)name callBack:(RCTResponseSenderBlock)callback)
{
  NSLog(@"feng---------");
  callback(@[[NSNull null], @"666"]);
}

@end
