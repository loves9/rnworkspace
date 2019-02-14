/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

#import "AppInfo.h"
#import "FSSplashViewController.h"

#import <Fabric/Fabric.h>
#import <Crashlytics/Crashlytics.h>

#import "FSWebViewController.h"

#import "FSHttpRequest.h"

@implementation AppDelegate
{
  RCTRootView * _rootView;
}

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
//  [Fabric with:@[[Crashlytics class]]];
  
  // 初始化RN
//  NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
//  _rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
//                                                      moduleName:@"rnworkspace"
//                                               initialProperties:nil
//                                                   launchOptions:launchOptions];
//  _rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  
  // 判断splash
  if(![[self currentVersion] isEqualToString: [AppInfo instance].shortVersion]){
    // 显示splash
    FSSplashViewController * fssvc = [[FSSplashViewController alloc] init];
    fssvc.finishSplashBlock = ^{
      [self rootViewController:launchOptions];
    };
    
    self.window.rootViewController = fssvc;
    [self.window makeKeyAndVisible];
  }
  else {
    // 不经过splash
    
    [self rootViewController:launchOptions];
    
    //设置启动页面停留时间
    [self launchScreen];
  }
  
  
  return YES;
}

- (NSString *)currentVersion
{
  NSUserDefaults *df = [NSUserDefaults standardUserDefaults];
  return [NSString stringWithFormat:@"%@", [df  valueForKey:@"splash_version"]];
}

- (void)rootViewController:(NSDictionary *)launchOptions
{
//  UIViewController *rootViewController = [UIViewController new];
//  rootViewController.view = _rootView;
  
  // request判断跳转
  FSHttpRequest * req = [[FSHttpRequest alloc] initWithURL:@"http://10.65.55.224:3030/user" method:HttpRequestMethodGet];
  req.requestSuccessfulHandler = ^(FSHttpRequest * _Nonnull request) {
    
  };
  
  [req execute];
  
  
  FSWebViewController * webVC = [[FSWebViewController alloc] init];
  self.window.rootViewController = webVC;
  [self.window makeKeyAndVisible];
}

- (void)launchScreen
{
  NSArray *objs = [[NSBundle mainBundle]loadNibNamed:@"LaunchScreen" owner:nil options:nil];
  
  UIView *launchView = objs[0];
  
  UIWindow *mainWindow = [UIApplication sharedApplication].keyWindow;
  launchView.frame = [UIApplication sharedApplication].keyWindow.frame;
  [mainWindow addSubview:launchView];
  
  // TODO:适配不同机型
  
  // 停留时间 动画
  [UIView animateWithDuration:1.0f delay:3.0f options:UIViewAnimationOptionBeginFromCurrentState animations:^{
    launchView.alpha = 0.0f;
    launchView.layer.transform = CATransform3DScale(CATransform3DIdentity, 1.5f, 1.5f, 1.0f);
  } completion:^(BOOL finished) {
    [launchView removeFromSuperview];
  }];
}

@end
