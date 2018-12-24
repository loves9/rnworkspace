//
//  NSString.h
//  LakalaCommonLibrary
//
//  对原有NSString的一些功能扩展
//
//  Created by Lucongyu on 13-12-9.
//  Mend by 任建文  13-12-13
//

#import <Foundation/Foundation.h>

@interface NSString (Extend)

/**
 *  把字符串 以 待定 字符分割成数据
 *
 *  @param separator 分割符
 *
 *  @return 分割后的数组
 */
- (NSArray *)split:(NSString *)separator;

/**
 *  去除首尾空格
 *
 *  @return 新的字符串
 */
- (NSString *)trim;

/**
 *  json格式字符转换成JSON对象
 *
 *  @return 返回Json对象(IOS 5 Later)
 */
- (id)JSONValue;

/**
 *  判断字符转是否为空
 *
 *
 *  @return Check结果
 */
- (BOOL)isNotEmpty;

/**
 *  去除空格
 *
 *  @return 结果
 */
- (NSString *)trimWhiteSpace;

/**
 * 是否为纯字母
 *
 * @param str 字符
 * @return bool
 */
+(BOOL)isLetters:(NSString*)str;
/**
 * 是否为纯数字
 *
 * @param str 字符
 * @return bool
 */
+(BOOL)isNums:(NSString*)str;
/**
 * 判断字符串中是否有连续相同字符长度超过4位
 *
 * @param str 字符
 * @return bool
 */
+(BOOL)isSeriesSame:(NSString*)str;

/**
 * 判断字符串中是否有连续相同字符
 *
 * @param str           String
 * @param length     可以存在连续相同字符串的最大长度
 * @return              boolean
 */
+(BOOL)isSeriesSame:(NSString*)str length:(int)length;

/**
 * 判断字符串是否有顺序
 *
 * @param str 字符串
 * @return bool
 */
+(BOOL)isOrder:(NSString*)str;

@end
