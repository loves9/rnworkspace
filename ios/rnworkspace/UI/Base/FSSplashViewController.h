//
//  FSSplashViewController.h
//  rnworkspace
//
//  Created by iFeng on 2018/12/24.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

typedef void(^FinishSplashBlock)(void);

@interface FSSplashViewController : UIViewController

@property(nonatomic, copy)FinishSplashBlock finishSplashBlock;

@end

NS_ASSUME_NONNULL_END
