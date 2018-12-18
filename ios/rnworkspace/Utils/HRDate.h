//
//  HRDate.h
//  rnworkspace
//
//  Created by iFeng on 2018/12/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

typedef NS_ENUM(NSInteger, LKLDATE_WEEK_DAY) {
  LKLDATE_MON = 1,
  LKLDATE_TUES,
  LKLDATE_WED,
  LKLDATE_THUR,
  LKLDATE_FRI,
  LKLDATE_SAT,
  LKLDATE_SUN
};

@interface HRDate : NSObject

/**
 *  日期转字符串
 *
 *  @param date 原日期
 *
 *  @return 转换后的日期
 */
- (NSString *)stringFromDate:(NSDate *)date;

/**
 *  字符串转日期
 *
 *  @param dateString 原字符串
 *
 *  @return 转换后的日期
 */
- (NSDate *)dateFromString:(NSString *)dateString;

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
                              target:(NSString *)targetFormat;

/**
 *  获取当前日期的星期
 *
 *  @return 星期
 */
- (LKLDATE_WEEK_DAY)getWeekOfDate;

/**
 *  转换日期——毫秒->指定日期格式
 *
 *  @param Sec          毫秒
 *  @param parternFormat 日期格式: "yyyy/MM/dd"(Default)
 *
 *  @return 转换后的日期
 */
+ (NSString *)formatDateFromLong:(long long)Sec partern:(NSString *)parternFormat;

/**
 *  格式化当前日期
 *
 *  @param fmt 格式
 *
 *  @return 格式化后的日期字符串
 */
+ (NSString *)format:(NSString *)fmt;

/**
 *  把timeIntervalSince1970时间转成格式化字符串
 *
 *  @param time 秒
 *  @param fmt  格式
 *
 *  @return 格式化后日期
 */
+ (NSString *)date:(NSTimeInterval)time format:(NSString *)fmt;
@end


NS_ASSUME_NONNULL_END
