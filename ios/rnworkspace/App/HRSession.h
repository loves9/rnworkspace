//
//  HRSession.h
//  rnworkspace
//
//  Created by iFeng on 2018/12/26.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "HRUser.h"

NS_ASSUME_NONNULL_BEGIN

@interface HRSession : NSObject

@property(nonatomic, strong)HRUser * hrUser;

+ (HRSession *)instance;

@end

HRSession* getHRSession(void);

NS_ASSUME_NONNULL_END
