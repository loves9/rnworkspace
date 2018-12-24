//
//  NSString.m
//  LakalaCommonLibrary
//
//  对原有NSString的一些功能扩展
//
//  Created by Lucongyu on 13-12-9.
//  Mend  by  任建文 13-12-13
//

#import "NSString+Extend.h"

@implementation NSString (Extend)

/**
 *  把字符串 以 待定 字符分割成数据
 *
 *  @param separator 分割符
 *
 *  @return 分割后的数组
 */
- (NSArray *)split:(NSString *)separator
{
    return [self componentsSeparatedByString:separator];
}

/**
 *  去除首尾空格
 *
 *  @return 新的字符串
 */
- (NSString *)trim
{
    return [self stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]];
}
    
/**
 *  json格式字符转换成JSON对象
 *
 *  @return 返回Json对象(IOS 5 Later)
 */
- (id)JSONValue
{
    id obj = [NSJSONSerialization JSONObjectWithData: [self dataUsingEncoding:NSUTF8StringEncoding]
                                             options: 0
                                               error: nil];
    return obj;
}

/**
 *  判断字符转是否为空
 *
 *
 *  @return Check结果
 */
- (BOOL)isNotEmpty
{
    if (self == nil || [self isEqualToString:@""]) {
        return NO;
    }
    
    return YES;
}

/**
 *  去除空格
 *
 *  @return 结果
 */
- (NSString *)trimWhiteSpace
{
    return [self stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceCharacterSet]];
}

/**
 * 是否为纯字母
 *
 * @param str 字符串
 * @return bool
 */
+(BOOL)isLetters:(NSString*)str
{
    NSString *regex = @"[a-zA-Z]+";
    NSPredicate *pred = [NSPredicate predicateWithFormat:@"SELF MATCHES %@",regex];
    BOOL isMatch = [pred evaluateWithObject:str];
    return isMatch;
}
/**
 * 是否为纯数字
 *
 * @param str
 * @return
 */
+(BOOL)isNums:(NSString*)str
{
    NSString *regex = @"[0-9]+";
    NSPredicate *pred = [NSPredicate predicateWithFormat:@"SELF MATCHES %@",regex];
    BOOL isMatch = [pred evaluateWithObject:str];
    return isMatch;
}
/**
 * 判断字符串中是否有连续相同字符长度超过4位
 *
 * @param str
 * @return
 */
+(BOOL)isSeriesSame:(NSString*)str
{
    //允许的最大连续长度4
    return [self isSeriesSame:str length:4];
}

/**
 * 判断字符串中是否有连续相同字符
 *
 * @param str           String
 * @param MaxLength     可以存在连续相同字符串的最大长度
 * @return              boolean
 */
+(BOOL)isSeriesSame:(NSString*)str length:(int)length
{
    BOOL same = false;
    
    for (int i = 0; i<str.length; i++) {
        if (str.length-i<length) {
            break;
        }
        /*
        NSString *tmpStr = [str substringWithRange:NSMakeRange(i, 1)];
        regex = [NSString stringWithFormat:@"%@{%d,}",tmpStr,length];
        pred = [NSPredicate predicateWithFormat:@"SELF MATCHES %@",regex];
        temp = [str substringWithRange:NSMakeRange(i, length)];
        same = [pred evaluateWithObject:temp];
         */
        NSString *regex=@"";
        NSString *temp=@"";
        NSString *tmpStr = [str substringWithRange:NSMakeRange(i, 1)];
        for (int i = 0; i<length; i++) {
            regex = [NSString stringWithFormat:@"%@%@",regex,tmpStr];
        }
        temp = [str substringWithRange:NSMakeRange(i, length)];
        same = [temp isEqualToString:regex];
        if(same){
            break;
        }
    }
    
    return same;
}

/**
 * 判断字符串是否有顺序
 *
 * @param str
 * @return
 */
+(BOOL)isOrder:(NSString*)str
{
    NSString *upOrderStr = @"";
    NSString *downOrderStr = @"";
    for (int i = 33; i<127; i++) {
        NSString * s = [NSString stringWithFormat:@"%d",i];
        upOrderStr = [NSString stringWithFormat:@"%@%@",upOrderStr,s];
    }
    for (int i = 126; i>32; i--) {
        NSString * s = [NSString stringWithFormat:@"%d",i];
        downOrderStr = [NSString stringWithFormat:@"%@%@",downOrderStr,s];
    }
    
    NSString *regex = @"((\\d)|([a-z])|([A-Z]))+";
    NSPredicate *pred = [NSPredicate predicateWithFormat:@"SELF MATCHES %@",regex];
    BOOL isMatch = [pred evaluateWithObject:str];
    if (!isMatch) {
        //无序
        return false;
    }
    
    NSString *strASCII = [self strToASCII:str];
    NSRange rangeUp = [upOrderStr rangeOfString:strASCII];
    NSRange rangeDown = [downOrderStr rangeOfString:strASCII];
    
    if (rangeUp.length>0) {
        return true;
    } else {
        if (rangeDown.length>0) {
            return true;
        }else{
            return false;
        }
    }
    //有序
    return true;
}
+(NSString*)strToASCII:(NSString*)str
{
    NSMutableString * mstr = [NSMutableString string];
    for (int i = 0 ; i < str.length; i ++) {
        int ascii = [str characterAtIndex:i];
        [mstr appendFormat:@"%d",ascii];
    }
    return mstr;
}

@end
