//
//  FSProgressHUD.h
//  rnworkspace
//
//  Created by iFeng on 2018/12/19.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <MBProgressHUD/MBProgressHUD.h>

NS_ASSUME_NONNULL_BEGIN

/**
 *  加载视图类型
 */
typedef enum {
  /** 默认类型 菊花*/
  FSModeIndeterminate,
  /**  pie-chart 类型 （圆形1，饼）, progress view. */
  FSModeDeterminate,
  /** ring-shaped 类型（圆形2，圆环） progress view. */
  FSModeAnnularDeterminate,
  /** 自定义类型 */
  FSModeCustomView,
  /** 纯文本模式 */
  FSModeText
} FSLoadingDialogMode;

@interface FSProgressHUD : UIView


/**
 *  背景色
 */
@property(nonatomic,retain)UIColor *bgColor;

/**
 *  自定义背景图片
 */
@property(nonatomic,retain)UIImageView *bgView;

/**
 *  自定义loading图片
 */
@property(nonatomic,retain)UIImageView *imageView;
/**
 *  对话框大小
 */
//@property(readonly)CGSize dialogSize;

/**
 *  对话框y方向位置
 */
@property(nonatomic,assign)float yOffSet;
/**
 *  子视图于边界间距
 */
@property(nonatomic,assign)float defaultMargin;
/**
 *  加载对话框要显示的文字
 */
@property(nonatomic,retain)NSString *labelText;


/**
 *  加载对话框初始化方法   这个是有加载顺序影响的，要放在最上层显示
 *
 *  @param view           父view 如果为 nil，则显示在窗口上。
 *  @param text           文本
 *  @param DialogMode     加载视图类型
 *
 *  @return 加载对话框
 */
- (id)initWithView:(UIView *)view
              text:(NSString*)text
        DialogMode:(FSLoadingDialogMode)DialogMode ;

/**
 *  加载对话框初始化方法，对话框显示在窗口上。
 *  @param text           文本
 *  @param DialogMode     加载视图类型
 *
 *  @return 加载对话框
 */
- (id)initWithText:(NSString*)text
        DialogMode:(FSLoadingDialogMode)DialogMode;
/**
 *  显示视图对话框
 */
-(void)show;

/**
 *  关闭视图对话框
 */
-(void)close;

//toast快速显示方法
+(void)toast:(NSString*)message;
//toast快速显示方法  被键盘遮挡  上移60
+(void)toastForNumpad:(NSString*)message;
//toast快速显示方法  可以指定父视图
+(void)toastWithView:(UIView*)view message:(NSString*)message;

//loading 静态显示方法
+(void)showLoading:(NSString*)message;
+(void)showLoading:(NSString*)message parentView:(UIView *)parentView;

//loading  静态关闭方法
+(void)closeLoading;
@end

NS_ASSUME_NONNULL_END
