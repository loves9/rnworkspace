//
//  FSSplashViewController.m
//  rnworkspace
//
//  Created by iFeng on 2018/12/24.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "FSSplashViewController.h"

#import "AppInfo.h"



@class SplashImageView;

@protocol SplashImageViewDelegate<NSObject>

@optional

- (void)didSplashImageView:(SplashImageView *)tableView;

@end

@interface SplashImageView: UIImageView
@property (nonatomic, weak, nullable) id <SplashImageViewDelegate> delegate;
@end

@implementation SplashImageView

- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event
{
    if(self.delegate && [self.delegate respondsToSelector:@selector(didSplashImageView:)]) {
        [self.delegate didSplashImageView:self];
    }
}
@end

#pragma mark - FSSplashViewController
@interface FSSplashViewController () <SplashImageViewDelegate>

@end

@implementation FSSplashViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    CGRect bounds    = [UIScreen mainScreen].bounds;
    CGSize size     = bounds.size;
    
    UIScrollView *scroll = [[UIScrollView alloc] initWithFrame:bounds];
    [self.view addSubview:scroll];
    
    NSInteger len = 3;
    scroll.contentSize = CGSizeMake(size.width*len, size.height);
    scroll.pagingEnabled = YES;
    scroll.showsVerticalScrollIndicator = NO;
    scroll.showsHorizontalScrollIndicator = NO;
    //  scroll.backgroundColor = [UIColor colorWithRGBLKL:@"#1d96d4"];
    
    for(NSInteger i=0; i<len; ++i){
        UIImage *image = [UIImage imageNamed:[NSString stringWithFormat:@"splash00%@", @(i+1)]];
        float height = (size.width/image.size.width)*image.size.height;
        SplashImageView *view = [[SplashImageView alloc] initWithImage:image];
        CGRect frame = CGRectZero;
        frame.size = CGSizeMake(size.width, height);
        frame.origin.x = i*size.width;
        frame.origin.y = (size.height-height)/2.;
        view.frame = frame;
        if(i==len-1) {
            view.delegate = self;
            view.userInteractionEnabled = YES;
        }
        [scroll addSubview:view];
    }
}

- (void)didSplashImageView:(SplashImageView *)tableView
{
    NSUserDefaults *df = [NSUserDefaults standardUserDefaults];
    [df setObject:[AppInfo instance].shortVersion forKey:@"splash_version"];
    [df synchronize];
    
    self.finishSplashBlock();
}

@end
