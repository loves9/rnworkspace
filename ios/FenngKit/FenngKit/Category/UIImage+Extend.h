//
//  TT.h
//  LakalaUILibrary
//
//  Created by lucongyu on 14-1-4.
//
//

#import <Foundation/Foundation.h>

#import <UIKit/UIKit.h>

@interface UIImage (Extend)

/**
 *  用颜色生成一个Image
 *
 *  @param color 颜色
 *  @param size  生成图片的大小
 *
 *  @return color生成的图片
 */
+ (UIImage *)imageWithColor:(UIColor *)color size:(CGSize)size;

/**
 *  用颜色生成一个Image
 *
 *  @param color       主体颜色
 *  @param size        生成图片的大小
 *  @param bottomColor 底部颜色
 *  @param height      底部高
 *
 *  @return color生成的图片
 */
+ (UIImage *)imageWithColor:(UIColor *)color size:(CGSize)size bottomColor:(UIColor *)bottomColor bottomHeight:(float)height;

/**
 *  图片转换成颜色
 *
 *  @return 颜色
 */
- (UIColor *)color;

/**
 *  图片中间拉伸生成新图片
 *
 *  @param size 生产图片的尺寸
 *
 *  @return 新图片
 */
- (UIImage *)scaleToSize:(CGSize)size;


/**
 *  图片中间拉伸生成新图片
 *
 *  @param size 生产图片的尺寸
 *
 *  @return 新图片
 */
- (UIImage *)scaleToSize:(CGSize)size fromPoint:(CGPoint)point;
@end
