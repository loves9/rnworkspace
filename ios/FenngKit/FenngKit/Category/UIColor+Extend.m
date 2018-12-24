//
//  UIColor+Extend.m
//  LakalaCommonLibrary
//
//  Created by lucongyu on 13-12-30.
//
//

#import "UIColor+Extend.h"
#import "NSString+Extend.h"

@implementation UIColor (Extend)

/**
 *  通过RGB转换成UIColor
 *
 *  @param rgb RGB格式: 234,234,234
 *
 *  @return 返回UIColor
 */
+ (UIColor *)colorWithRGBLKL:(NSString *)rgb
{
    if ([rgb rangeOfString:@"#"].location != NSNotFound) {
        return [UIColor colorWithHtmlColor:rgb];
    }
    NSArray *arr = [rgb split:@","];
    if (arr.count!=3) return [UIColor clearColor];
    
    return [UIColor colorWithRed:[[arr objectAtIndex:0] floatValue]/255.
                           green:[[arr objectAtIndex:1] floatValue]/255.
                            blue:[[arr objectAtIndex:2] floatValue]/255.
                           alpha:1.];
}

/**
 *  html color转换成UIColor
 *
 *  @param htmlColor 格式如: #3b4878 或 #c44 或 3b4878 或 c44
 *
 *  @return 返回UIColor
 */
+ (UIColor *)colorWithHtmlColor:(NSString *)htmlColor
{
    if (!htmlColor) return [UIColor clearColor];
    unsigned int rr, gg, bb;
    @autoreleasepool {
        NSString *r, *g, *b;
        if ([htmlColor hasPrefix:@"#"] && htmlColor.length==4) {
            r = [htmlColor substringWithRange:NSMakeRange(1, 1)];
            g = [htmlColor substringWithRange:NSMakeRange(2, 1)];
            b = [htmlColor substringWithRange:NSMakeRange(3, 1)];
        }
        else if (![htmlColor hasPrefix:@"#"] && htmlColor.length==3)
        {
            r = [htmlColor substringWithRange:NSMakeRange(0, 1)];
            g = [htmlColor substringWithRange:NSMakeRange(1, 1)];
            b = [htmlColor substringWithRange:NSMakeRange(2, 1)];
        }
        else if ([htmlColor hasPrefix:@"#"] && htmlColor.length==7) {
            r = [htmlColor substringWithRange:NSMakeRange(1, 2)];
            g = [htmlColor substringWithRange:NSMakeRange(3, 2)];
            b = [htmlColor substringWithRange:NSMakeRange(5, 2)];
        }
        else if (![htmlColor hasPrefix:@"#"] && htmlColor.length==6)
        {
            r = [htmlColor substringWithRange:NSMakeRange(0, 2)];
            g = [htmlColor substringWithRange:NSMakeRange(2, 2)];
            b = [htmlColor substringWithRange:NSMakeRange(4, 2)];
        }
        [[NSScanner scannerWithString:r] scanHexInt:&rr];
        [[NSScanner scannerWithString:g] scanHexInt:&gg];
        [[NSScanner scannerWithString:b] scanHexInt:&bb];
    }
    return [UIColor colorWithRed:rr/255. green:gg/255. blue:bb/255. alpha:1.0f];
}

+ (NSString *)stringFromColor:(UIColor *)color
{
    const size_t totalComponents = CGColorGetNumberOfComponents(color.CGColor);
    const CGFloat * components = CGColorGetComponents(color.CGColor);
   return [NSString stringWithFormat:@"#%02X%02X%02X",
            (int)(255 * components[MIN(0,totalComponents-2)]),
            (int)(255 * components[MIN(1,totalComponents-2)]),
            (int)(255 * components[MIN(2,totalComponents-2)])];
}
@end
