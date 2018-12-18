//
//  HRDate.m
//  rnworkspace
//
//  Created by iFeng on 2018/12/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "HRDate.h"

@implementation HRDate
/**
 *  日期转字符串
 *
 *  @param date 原日期
 *
 *  @return 转换后的日期
 */
- (NSString *)stringFromDate:(NSDate *)date
{
  NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
  [dateFormatter setDateFormat:@"yyyy-MM-dd HH:mm:ss"];
  NSString *destDateString = [dateFormatter stringFromDate:date];
  return destDateString;
}


/**
 *  字符串转日期
 *
 *  @param dateString 原字符串
 *
 *  @return 转换后的日期
 */
- (NSDate *)dateFromString:(NSString *)dateString
{
  NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
  [dateFormatter setDateFormat: @"yyyy-MM-dd HH:mm:ss"];
  NSDate *destDate= [dateFormatter dateFromString:dateString];
  return destDate;
}

/**
 *  日期格式转换
 *
 *  @param date          时间日期
 *  @param parternFormat 原有格式 "yyyy-MM-dd HH:mm:ss"
 *  @param targetFormat  目标格式 "yyyy/MM/dd HH:mm:ss"
 *
 *  @return 日期字符串
 */
- (NSString *)formatDateStrToPartern:(NSString *)date
                             partern:(NSString *)parternFormat
                              target:(NSString *)targetFormat{
  
  NSDateFormatter *originDateFormat = [[NSDateFormatter alloc] init];
  [originDateFormat setDateFormat:parternFormat];
  
  NSDateFormatter *targetDateFormat = [[NSDateFormatter alloc] init];
  [targetDateFormat setDateFormat:targetFormat];
  
  NSDate *originDate = [originDateFormat dateFromString:date];
  return [targetDateFormat stringFromDate:originDate];
}

/**
 *  获取当前日期的星期
 *
 *  @return 星期
 */
- (LKLDATE_WEEK_DAY)getWeekOfDate{
  NSCalendar *calendar = [[NSCalendar alloc] initWithCalendarIdentifier:NSCalendarIdentifierGregorian];
  NSInteger unitFlags = NSCalendarUnitWeekday;
  NSDateComponents *comps = [calendar components:unitFlags fromDate:[NSDate date]];
  return [comps weekday];
}

/**
 *  转换日期——毫秒->指定日期格式
 *
 *  @param Sec          毫秒
 *  @param parternFormat 日期格式: "yyyy/MM/dd"(Default)
 *
 *  @return 转换后的日期
 */
+ (NSString *)formatDateFromLong:(long long)Sec partern:(NSString *)parternFormat
{
  if (Sec < 0) {
    return nil;
  }
  
  if (parternFormat.length == 0) {
    parternFormat = @"yyyy/MM/dd";
  }
  
  long long secTime = Sec/1000;
  NSDate *inputDate = [NSDate dateWithTimeIntervalSince1970:secTime];
  NSDateFormatter *dateFormater = [[NSDateFormatter alloc] init];
  [dateFormater setDateFormat:parternFormat];
  
  return [dateFormater stringFromDate:inputDate];
}

+ (NSString *)format:(NSString *)fmt
{
  @autoreleasepool {
    //@"yyyy-MM-dd HH:mm:ss"
    NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
    [dateFormatter setDateFormat:fmt];
    NSString *destDateString = [dateFormatter stringFromDate:[NSDate date]];
    return destDateString;
  }
}

/**
 *  把timeIntervalSince1970时间转成格式化字符串
 *
 *  @param time 秒
 *  @param fmt  格式
 *
 *  @return 格式化后日期
 */
+ (NSString *)date:(NSTimeInterval)time format:(NSString *)fmt
{
  @autoreleasepool {
    NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
    [dateFormatter setDateFormat:fmt];
    NSString *destDateString = [dateFormatter stringFromDate:[NSDate dateWithTimeIntervalSince1970:time]];
    return destDateString;
  }
}
@end
