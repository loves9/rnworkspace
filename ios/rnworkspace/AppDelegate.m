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

@implementation AppDelegate
{
  RCTRootView * _rootView;
}

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;
  
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  
  _rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"rnworkspace"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  _rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  

  
  if(![[self currentVersion] isEqualToString: [AppInfo instance].shortVersion]){
    // 显示splash
    FSSplashViewController * fssvc = [[FSSplashViewController alloc] init];
    fssvc.callBack = ^{
      [self rootViewController:launchOptions];
    };
    
    self.window.rootViewController = fssvc;
    [self.window makeKeyAndVisible];
  }
  else {
    
    [self rootViewController:launchOptions];
  }
  
  
  [NSThread sleepForTimeInterval:3.0];//设置启动页面时间
  
  return YES;
}

- (NSString *)currentVersion
{
  NSUserDefaults *df = [NSUserDefaults standardUserDefaults];
  return [NSString stringWithFormat:@"%@", [df  valueForKey:@"splash_version"]];
}

- (void)rootViewController:(NSDictionary *)launchOptions
{
  
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = _rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
}

- (void)launchScreen
{
  UIViewController *viewController = [[UIStoryboard storyboardWithName:@"LaunchScreen" bundle:nil] instantiateViewControllerWithIdentifier:@"LaunchScreen"];
  
  UIView *launchView = viewController.view;
  launchView.backgroundColor = [UIColor redColor];
  
  UIWindow *mainWindow = [UIApplication sharedApplication].keyWindow;
  launchView.frame = [UIApplication sharedApplication].keyWindow.frame;
  [mainWindow addSubview:launchView];
  
  [UIView animateWithDuration:0.6f delay:0.5f options:UIViewAnimationOptionBeginFromCurrentState animations:^{
    launchView.alpha = 0.0f;
    launchView.layer.transform = CATransform3DScale(CATransform3DIdentity, 1.5f, 1.5f, 1.0f);
  } completion:^(BOOL finished) {
    [launchView removeFromSuperview];
  }];
}

@end
