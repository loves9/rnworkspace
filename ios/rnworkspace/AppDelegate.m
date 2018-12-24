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

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
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
  
  return YES;
}

- (NSString *)currentVersion
{
  NSUserDefaults *df = [NSUserDefaults standardUserDefaults];
  return [NSString stringWithFormat:@"%@", [df  valueForKey:@"splash_version"]];
}

- (void)rootViewController:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;
  
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"rnworkspace"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
}

@end
