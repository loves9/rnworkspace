//
//  HRSessionModule.m
//  rnworkspace
//
//  Created by iFeng on 2018/12/26.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "HRSessionModule.h"
#import "HRSession.h"

@implementation HRSessionModule
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getUser:(RCTResponseSenderBlock)callback)
{
  
  NSMutableDictionary * mDict = [[NSMutableDictionary alloc] init];
  [mDict setValue:getHRSession().hrUser.Mobile forKey:@"mobile"];
  
  callback(@[[NSNull null], mDict]);
}

@end
