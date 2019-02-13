//
//  FSWebViewController.m
//  rnworkspace
//
//  Created by iFeng on 2019/2/12.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "FSWebViewController.h"

#import <FenngKit/FenngKit.h>

#define MAIN_SCREEN_WIDTH [UIScreen mainScreen].bounds.size.width

@interface FSWebViewController () <WKUIDelegate, WKNavigationDelegate>

@end

@implementation FSWebViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    self.view.backgroundColor = [UIColor colorWithRGBLKL:@"190,189,195"];
                                 
                            
    [self setUpWebView];
    
    [self nodoWithApple];
  
  
}

- (void)setUpWebView
{
    [self cleanWKWebViewCache];
    _wkWebView = [[WKWebView alloc] initWithFrame:CGRectMake(0, 0, MAIN_SCREEN_WIDTH, [UIScreen mainScreen].bounds.size.height)];
    self.wkWebView.navigationDelegate = self;
    self.wkWebView.UIDelegate = self;
//    self.wkWebView.backgroundColor = [UIColor clearColor];
//    self.wkWebView.scrollView.backgroundColor = [UIColor clearColor];
    self.wkWebView.allowsBackForwardNavigationGestures = TRUE;
    [self.view addSubview:_wkWebView];
    
    [self loadURL:[NSURL URLWithString:@"https://www.baidu.com"] isLocalWebPage:NO];
}

- (void)cleanWKWebViewCache
{
    NSSet *websiteDataTypes = [NSSet setWithArray:@[WKWebsiteDataTypeDiskCache]];
    //NSSet *websiteDataTypes = [WKWebsiteDataStore allWebsiteDataTypes];
    NSDate *dateFrom = [NSDate dateWithTimeIntervalSince1970:0];
    [[WKWebsiteDataStore defaultDataStore] removeDataOfTypes:websiteDataTypes
                                               modifiedSince:dateFrom completionHandler:^{
                                               }];
}

- (void)loadURL:(NSURL *)url isLocalWebPage:(BOOL)isLocalWebPage
{
    NSURLRequest *req = [NSURLRequest requestWithURL:url];
    

    if(self.wkWebView){
        if(isLocalWebPage){
//            NSString *path = [LKLFile getLakalaPath];
//            NSURL *dir = [NSURL fileURLWithPath:path];
//            [self.wkWebView loadFileURL:url allowingReadAccessToURL:dir];
        }
        else {
            
            [self.wkWebView loadRequest:req];

        }
    }else{
        
    }
}

#pragma mark 申明与Apple公司无关
- (void)nodoWithApple
{
    
    CGRect frame;

    
    frame = self.wkWebView.frame;
    frame.size.height -= 20;
    self.wkWebView.frame = frame;
    
    UILabel *label = [[UILabel alloc] initWithFrame:CGRectMake(0, frame.size.height, MAIN_SCREEN_WIDTH, 20)];
    label.textAlignment = NSTextAlignmentCenter;
    label.textColor = [UIColor whiteColor];
    label.backgroundColor = [UIColor grayColor];
    label.font = [UIFont systemFontOfSize:12.];
    [self.view addSubview:label];
}

#pragma mark WKNavigationDelegate
- (void)webView:(WKWebView *)webView decidePolicyForNavigationAction:(WKNavigationAction *)navigationAction decisionHandler:(void (^)(WKNavigationActionPolicy))decisionHandler{
    // WKWebView默认拦截scheme 需在下面方法手动打开
    // 打开外部应用 Safari等操作
    NSURL* url = [navigationAction.request URL];
    if ([[url scheme] isEqualToString:@"lakala"]) {
        NSString *urlstr;
        urlstr = [NSString stringWithFormat:@"%@", url.absoluteString];
        urlstr = [urlstr stringByReplacingOccurrencesOfString:@"lakala://" withString:@"koala://"];
        url = [NSURL URLWithString:urlstr];
        if([[UIApplication sharedApplication] canOpenURL:url]) {
            [[UIApplication sharedApplication] openURL:url];
        }
    }
    else if ([[url scheme] isEqualToString:@"koala"]) {
        [[UIApplication sharedApplication] openURL:navigationAction.request.URL];
    }
    else if ([[url scheme] isEqualToString:@"koalajs"]) {
//        [self koalajs:url];
    }
    else if([[url scheme] isEqualToString:@"itms-appss"]){
        if([[UIApplication sharedApplication] canOpenURL:url]) {
            [[UIApplication sharedApplication] openURL:url];
        }
    }else{
        
    }
    decisionHandler(WKNavigationActionPolicyAllow);
}

#pragma mark - WKUIDelegate
- (nullable WKWebView *)webView:(WKWebView *)webView createWebViewWithConfiguration:(WKWebViewConfiguration *)configuration forNavigationAction:(WKNavigationAction *)navigationAction windowFeatures:(WKWindowFeatures *)windowFeatures;
{
    WKFrameInfo *frameInfo = navigationAction.targetFrame;
    if (![frameInfo isMainFrame]) {
        [webView loadRequest:navigationAction.request];
    }
    return nil;
}

@end
