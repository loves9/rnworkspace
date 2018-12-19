//
//  FSProgressHUD.m
//  rnworkspace
//
//  Created by iFeng on 2018/12/19.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "FSProgressHUD.h"

@interface FSProgressHUD ()
{
  UIView *_parentView;
}
@property(nonatomic,strong)UIView *parentView;

/**
 *  引入MBProgressHUD 实例
 */
@property(nonatomic,retain)MBProgressHUD *loading;
/**
 *  加载视图类型
 */
@property(nonatomic,assign)FSLoadingDialogMode mode;

@end

@implementation FSProgressHUD
static FSProgressHUD *loadingDialogInstance = nil;
static FSProgressHUD *loadingToastInstance = nil;
#pragma mark - 单例

-(void)dealloc
{
#if ! __has_feature(objc_arc)
  [super dealloc];
#endif
  NSLog(@"loading destory");
}

- (id)initWithFrame:(CGRect)frame
{
  self = [super initWithFrame:frame];
  if (self) {
    if (self.labelText == nil || [self.labelText isEqualToString:@""]) {
      if (self.mode != FSModeText) {
        self.labelText = @"Loading";
      }
    }
    
    self.backgroundColor = [UIColor clearColor];
  }
  return self;
}


/**
 *  加载对话框初始化方法
 *
 *  @param view           父view 如果为nil，则显示在窗口上。
 *  @param text           文本
 *  @param DialogMode     加载视图类型
 *
 *  @return 加载对话框
 */
- (id)initWithView:(UIView *)view
              text:(NSString*)text
        DialogMode:(FSLoadingDialogMode)DialogMode
{
  if (!view) {
    view = [[UIApplication sharedApplication].windows objectAtIndex:0];
  }
  
  self = [self initWithFrame:CGRectMake(0, 64, view.bounds.size.width, view.bounds.size.height - 64 - 48)];
  //    self.backgroundColor = [UIColor greenColor];
  if (self){
    _mode = DialogMode;
    _labelText  = text;
    _parentView = view;
  }
  return self;
}

/**
 *  加载对话框初始化方法，对话框显示在窗口上。
 *  @param text           文本
 *  @param DialogMode     加载视图类型
 *
 *  @return 加载对话框
 */
- (id)initWithText:(NSString*)text
        DialogMode:(FSLoadingDialogMode)DialogMode
{
  return [self initWithView:nil text:text DialogMode:DialogMode];
}

#pragma mark - Pravite Method
/**
 *  显示视图
 */
-(void)show
{
  if (self.labelText==nil || [self.labelText isEqualToString:@""]) {
    if (self.mode == FSModeText) {
      return;
    }
  }
  
  //默认
  if (self.mode == FSModeIndeterminate){
    [self createDefaultDialog:_parentView];
  }
  //圆形加载框1
  else if (self.mode == FSModeDeterminate){
    [self createProgressDialog:_parentView];
  }
  //圆形加载框2
  else if (self.mode == FSModeAnnularDeterminate){
    [self createProgressDialogAnnular:_parentView];
  }
  //自定义背景的加载框
  else if (self.mode == FSModeCustomView){
    [self createCustomDialog:_parentView];
  }
  //只有文本显示的加载框
  else if (self.mode == FSModeText){
    [self createTextDialog:_parentView];
  }
  
  [self addSubview:self.loading];
  [_parentView addSubview:self];
  [self.loading show:YES];
  
  if (self.mode == FSModeText) {
    [NSObject cancelPreviousPerformRequestsWithTarget:self
                                             selector:@selector(close)
                                               object:nil];
    [self performSelector:@selector(close) withObject:nil afterDelay:2.5];
  }
}

/**
 *  关闭视图
 */
-(void)close
{
  if (self.imageView && [self.imageView isAnimating]) {
    [self.imageView stopAnimating];
  }
  [self hidenAnimation:0.3];
}

-(void)showAnimation:(float)timer
{
  [UIView animateWithDuration:timer
                   animations:^{
                     self.alpha = !self.alpha;
                   }];
}

-(void)hidenAnimation:(float)timer
{
  [UIView animateWithDuration:timer
                   animations:^{
                     self.alpha = !self.alpha;
                   } completion:^(BOOL finished) {
                     [self removeFromSuperview];
                   }];
}
/**
 *  默认类型加载框
 *
 *  @param view 父视图
 */
-(void)createDefaultDialog:(UIView*)view
{
  self.loading = [[MBProgressHUD alloc] initWithView:view];
  [self addSubview:self.loading];
  
  //显示背景
  self.loading.dimBackground = NO;
  
  //设置对话框文字
  self.loading.labelText = self.labelText;
  //    self.loading.labelFont = [LKLFontTable FontCellNormal];
}

/**
 *  圆形加载框1
 *
 *  @param view 父视图
 */
-(void)createProgressDialog:(UIView*)view
{
  self.loading = [[MBProgressHUD alloc] initWithView:view];
  self.loading.labelText = self.labelText;
  //显示背景
  self.loading.dimBackground = NO;
  //设置模式为进度框形
  self.loading.mode = MBProgressHUDModeDeterminate;
}

/**
 *  圆形加载框2
 *
 *  @param view 父视图
 */
-(void)createProgressDialogAnnular:(UIView*)view
{
  self.loading = [[MBProgressHUD alloc] initWithView:view];
  //    self.loading.labelText = self.labelText;
  //    self.loading.labelFont = [LKLFontTable FontCellNormal];
  //显示背景
  //    self.loading.dimBackground = NO;
  //设置模式为进度框形
  self.loading.mode = MBProgressHUDModeAnnularDeterminate;
}

/**
 *  自定义背景的加载框
 *
 *  @param view 父视图
 */
-(void)createCustomDialog:(UIView*)view
{
  if (!self.imageView) {
    [self defaultCustomLoadingAnimation];
  }
  self.loading = [[MBProgressHUD alloc]initWithView:view];
  self.loading.labelText = self.labelText;
  //    self.loading.labelFont = [LKLFontTable FontCellNormal];
  
  //显示背景
  //    self.loading.dimBackground = NO;
  //设置模式为自定义
  self.loading.mode = MBProgressHUDModeCustomView;
  self.loading.customView = self.imageView;
}

/**
 *  只有文本显示的加载框
 *
 *  @param view 父视图
 */
-(void)createTextDialog:(UIView*)view
{
  self.loading = [[MBProgressHUD alloc] initWithView:view];
  [self addSubview:self.loading];
  self.loading.detailsLabelText = self.labelText;
  self.loading.detailsLabelColor = [UIColor whiteColor];
  //    self.loading.detailsLabelFont = [LKLFontTable FontCellNormal];
  //自适应大小
  //    [ sizeToFit];
  self.loading.mode = MBProgressHUDModeText;
  //    self.loading.bezelView.backgroundColor = [UIColor blackColor];
  //loadingDialogInstance.loading.dimBackground = NO;
  self.userInteractionEnabled = NO;
  //改变消息框大小和位置
  //    self.loading.margin = 10;//默认边界距离
  //    [self.loading layoutSubviews];
  //
  //    self.yOffSet = 0;
}

-(void)defaultCustomLoadingAnimation
{
  NSMutableArray *imgs = [NSMutableArray arrayWithCapacity:1];
  
  for (int i = 1; i<9; i++) {
    UIImage *img = [UIImage imageNamed:[NSString stringWithFormat:@"assets/7.0/koalaAnimate/00000%d.png",i]];
    [imgs addObject:img];
  }
  
  self.imageView = [[UIImageView alloc]initWithFrame:CGRectMake(0, 0, 50, 50)];
  self.imageView.animationImages = imgs;
  self.imageView.contentMode = UIViewContentModeScaleAspectFit;
  self.imageView.animationRepeatCount = 0;
  self.imageView.animationDuration = 0.8;
  [self.imageView startAnimating];
}
#pragma mark 属性 重写 Set方法

/**
 *  设置dialog背景色
 *
 *  @param backgroundColor 颜色
 */
-(void)setBgColor:(UIColor *)backgroundColor
{
  if (backgroundColor) {
    self.loading.color = backgroundColor;
  }
}

/**
 *  imageView 属性 set 方法
 *
 *  @param backgroundView 图片视图
 */
-(void)setBgView:(UIImageView *)backgroundView
{
  if (backgroundView){
    self.loading.customView = backgroundView;
  }
}

/**
 *  加载对话框要显示的文字
 */
- (void)setLabelText:(NSString *)labelText
{
  _labelText = labelText;
  self.loading.labelText = _labelText;
}
/**
 *  yOffSet 属性 set 方法
 *
 */
-(void)setYOffSet:(float)yOffSet
{
  self.loading.yOffset = yOffSet;
}

/**
 *  子视图间距 set 方法
 *
 *  @param defaultMargin 间距
 */
-(void)setDefaultMargin:(float)defaultMargin
{
  self.loading.margin = defaultMargin;
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+(void)toast:(NSString*)message
{
  [self toastWithView:nil message:message];
}

+(void)toastForNumpad:(NSString*)message
{
  if (![NSThread isMainThread]) {
    dispatch_async(dispatch_get_main_queue(), ^(){
      [self toastForNumpad:message];
    });
    return ;
  }
  @synchronized(loadingToastInstance){
    if (loadingToastInstance) {
      [loadingToastInstance close];
      loadingToastInstance = nil;
    }
    
    //添加到window上
    loadingToastInstance = [[FSProgressHUD alloc]initWithView:nil
                                                            text:message
                                                   DialogMode:FSModeText];
    
    loadingToastInstance.loading.dimBackground = NO;
    [loadingToastInstance show];
    
    if ([UIScreen mainScreen].bounds.size.height>480) {
      loadingToastInstance.yOffSet = 0;
    } else {
      loadingToastInstance.yOffSet = -60;
    }
  }
}

+(void)toastWithView:(UIView*)view message:(NSString*)message
{
  if (![NSThread isMainThread]) {
    dispatch_async(dispatch_get_main_queue(), ^(){
      [self toastWithView:view message:message];
    });
    return ;
  }
  @synchronized(loadingToastInstance){
    if (loadingToastInstance) {
      [loadingToastInstance close];
      loadingToastInstance = nil;
    }
    
    //添加到window上
    loadingToastInstance = [[FSProgressHUD alloc]initWithView:view
                                                            text:message
                                                      DialogMode:FSModeText];
    loadingToastInstance.loading.dimBackground = NO;
    [loadingToastInstance show];
  }
}

+ (void) showLoading:(NSString*)message {
  return [self showLoading:message parentView:nil];
}

+(void)showLoading:(NSString*)message parentView:(UIView *)parentView
{
  if (![NSThread isMainThread]) {
    dispatch_async(dispatch_get_main_queue(), ^(){
      [self showLoading:message parentView:parentView];
    });
    return;
  }
  
  @synchronized(loadingDialogInstance){
    if (loadingDialogInstance) {
      [loadingDialogInstance close];
      loadingDialogInstance = nil;
    }
    loadingDialogInstance = [[FSProgressHUD alloc]initWithView:parentView
                                                             text:message
                                                    DialogMode:FSModeIndeterminate];
    [loadingDialogInstance show];
  }
}

+(void)closeLoading
{
  if (![NSThread isMainThread]) {
    dispatch_async(dispatch_get_main_queue(), ^(){
      [self closeLoading];
    });
    
    return;
  }
  
  @synchronized (loadingDialogInstance)
  {
    if(loadingDialogInstance){
      [loadingDialogInstance close];
      loadingDialogInstance = nil;
    }
  }
}
@end
