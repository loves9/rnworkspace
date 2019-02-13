//
//  FSWebViewController.h
//  rnworkspace
//
//  Created by iFeng on 2019/2/12.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

#import "FSBaseViewController.h"

#import <WebKit/WebKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface FSWebViewController : FSBaseViewController

@property(nonatomic, strong)WKWebView *wkWebView;

- (void)loadURL:(NSURL *)url isLocalWebPage:(BOOL)isLocalWebPage;

@end

NS_ASSUME_NONNULL_END
