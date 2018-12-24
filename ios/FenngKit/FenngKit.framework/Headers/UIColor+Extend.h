//
//  UIColor+Extend.h
//  LakalaCommonLibrary
//
//  Created by lucongyu on 13-12-30.
//
//

#import <UIKit/UIKit.h>

@interface UIColor (Extend)

/**
 *  通过RGB转换成UIColor
 *
 *  @param rgb RGB格式: 234,234,234
 *
 *  @return 返回UIColor
 */
+ (UIColor *)colorWithRGBLKL:(NSString *)rgb;

/**
 *  html color转换成UIColor
 *
 *  @param htmlColor 格式如: #3b4878 或 #c44
 *
 *  @return 返回UIColor
 */
+ (UIColor *)colorWithHtmlColor:(NSString *)htmlColor;


+ (NSString *)stringFromColor:(UIColor *)color;

@end
