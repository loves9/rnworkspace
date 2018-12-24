//
//  FSJSONArray.h
//  FenngKit
//
//  Created by iFeng on 2018/10/8.
//  Copyright © 2018 iFeng. All rights reserved.
//

#import <Foundation/Foundation.h>

@class FSJSONObject;

@interface FSJSONArray: NSObject<NSFastEnumeration>

@property (strong,nonatomic,readonly) NSMutableArray* array;

/**
 *  使用Array 对象实例化 LKLJSONArray。
 *
 *  @param array JSONArray 字符串
 *
 *  @return return LKLJSONArray 对象
 */
-(instancetype)initWithMutableArray:(NSMutableArray*)array;

/**
 *  使用Array 对象实例化 LKLJSONArray。
 *
 *  @param array JSONArray 字符串
 *
 *  @return return LKLJSONArray 对象
 */
- (instancetype)initWithArray:(NSArray*)array;

/**
 *  解析JSON字符串，并实例化 LKLJSONArray。
 *
 *  @param string JSONArray 字符串
 *
 *  @return return LKLJSONArray 对象，如果字符串不是一个 JSONArray 则实例化失败，返回nil。
 */
- (instancetype)initWithString:(NSString*)string;


/**
 *  获取布尔值
 *
 *  @param index 索引
 *
 *  @return 如果值不存在或类型不正确返回 false，如果存在返回值内容。
 */
- (BOOL)getBoolean:(NSUInteger) index;
- (BOOL)optBoolean:(NSUInteger) index defaultValue:(BOOL) defaultValue;

- (NSInteger)getInteger:(NSUInteger) index;
- (NSInteger)optInteger:(NSUInteger) index defaultValue:(NSInteger) defaultValue;

- (double)getDouble:(NSUInteger) index;
- (double)optDouble:(NSUInteger) index defaultValue:(double) defaultValue;

- (NSString*)getString:(NSUInteger) index;
- (NSString*)optString:(NSUInteger) index defaultValue:(NSString*) defaultValue;

- (FSJSONArray*) getJSONArray: (NSUInteger) index;
- (FSJSONObject*)getJSONObject:(NSUInteger) index;

- (void)putWithBoolean:(Boolean)  value;
- (void)putWithInt:    (int)      value;
- (void)putWithDouble: (double)   value;
- (void)putWithString: (NSString*)value;
- (void)putWithJSONArray:(FSJSONArray*) value;
- (void)putWithJSONObject:(FSJSONObject*) value;

- (BOOL)hasIndex:(NSUInteger)index;
- (NSUInteger)countByEnumeratingWithState:(NSFastEnumerationState *)state objects:(id __unsafe_unretained [])buffer count:(NSUInteger)len;
- (NSUInteger)count;
- (NSString *)description;

@end
