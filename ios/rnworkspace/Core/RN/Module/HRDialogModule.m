//
//  HRDialogModule.m
//  rnworkspace
//
//  Created by iFeng on 2018/12/19.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "HRDialogModule.h"
#import "FSProgressHUD.h"

@implementation HRDialogModule
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(toast:(NSString *)message)
{
  [FSProgressHUD toast:message];
}
@end
