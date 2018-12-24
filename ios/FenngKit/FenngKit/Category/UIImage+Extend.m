//
//  TT.m
//  LakalaUILibrary
//
//  Created by lucongyu on 14-1-4.
//
//

#import "UIImage+Extend.h"


@implementation UIImage (Extend)

/**
 *  用颜色生成一个Image
 *
 *  @param color 颜色
 *  @param size  生成图片的大小
 *
 *  @return color生成的图片
 */
+ (UIImage *)imageWithColor:(UIColor *)color size:(CGSize)size
{
    UIGraphicsBeginImageContext(size);
    CGContextRef context = UIGraphicsGetCurrentContext();
    CGContextSetFillColorWithColor(context, [color CGColor]);
    CGContextFillRect(context, CGRectMake(0, 0, size.width, size.height));
    UIImage *img = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    return img;
}


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
+ (UIImage *)imageWithColor:(UIColor *)color size:(CGSize)size bottomColor:(UIColor *)bottomColor bottomHeight:(float)height
{
    UIGraphicsBeginImageContext(size);
    CGContextRef context = UIGraphicsGetCurrentContext();
    CGContextSetFillColorWithColor(context, color.CGColor);
    CGContextFillRect(context, CGRectMake(0, 0, size.width, size.height));
    CGContextSetFillColorWithColor(context, bottomColor.CGColor);
    CGContextFillRect(context, CGRectMake(0, size.height-height, size.width, height));
    UIImage *img = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    return img;
}

/**
 *  图片转换成颜色
 *
 *  @return 颜色
 */
- (UIColor *)color
{
    return [UIColor colorWithPatternImage:self];
}

/**
 *  图片中间拉伸生成新图片
 *
 *  @param size 生产图片的尺寸
 *
 *  @return 新图片
 */
- (UIImage *)scaleToSize:(CGSize)size
{
    return [self scaleToSize:size fromPoint:CGPointMake(self.size.width/2., self.size.height/2.)];
}

/**
 *  图片中间拉伸生成新图片
 *
 *  @param size 生产图片的尺寸
 *
 *  @return 新图片
 */
- (UIImage *)scaleToSize:(CGSize)size fromPoint:(CGPoint)point
{
    // 创建一个bitmap的context
    // 并把它设置成为当前正在使用的context
    UIGraphicsBeginImageContext(size);
    // 绘制改变大小的图片
    [[self stretchableImageWithLeftCapWidth:point.x topCapHeight:point.y] drawInRect:CGRectMake(0, 0, size.width, size.height)];
    // 从当前context中创建一个改变大小后的图片
    UIImage* scaledImage = UIGraphicsGetImageFromCurrentImageContext();
    // 使当前的context出堆栈
    UIGraphicsEndImageContext();
    // 返回新的改变大小后的图片
    return scaledImage;
}
@end
