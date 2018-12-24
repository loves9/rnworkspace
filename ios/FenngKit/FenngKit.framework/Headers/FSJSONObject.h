//
//  FSJSONObject.h
//  FenngKit
//
//  Created by iFeng on 2018/10/8.
//  Copyright © 2018 iFeng. All rights reserved.
//

#import <Foundation/Foundation.h>
@class FSJSONArray;

@interface FSJSONObject : NSObject <NSFastEnumeration>

@property (strong,nonatomic,readonly) NSMutableDictionary* dictionary;

/**
 *  使用字典对象，实例化 LKLJSONObject，如果 dict 是空对象，则实例化一个空的 LKLJSONObject。
 *
 *  @param dict JSONObject 字符串
 *
 *  @return return LKLJSONObject 对象
 */
- (instancetype)initWithMutableDictionary:(NSMutableDictionary*)dict;

/**
 *  使用字典对象，实例化 LKLJSONObject，如果 dict 是空对象，则实例化一个空的 LKLJSONObject。
 *
 *  @param dict JSONObject 字符串
 *
 *  @return return LKLJSONObject 对象
 */
- (instancetype)initWithDictionary:(NSDictionary*)dict;

/**
 *  解析JSON字符串，并实例化 LKLJSONObject。
 *
 *  @param string JSONObject 字符串
 *
 *  @return return LKLJSONObject 对象，如果字符串不是一个 JSONObject 则实例化失败，返回nil。
 */
- (instancetype)initWithString:(NSString*)string;

/**
 *  获取布尔型值
 *
 *  @param key 值的key
 *
 *  @return 如果值不存在或类型不正确返回 false，如果存在返回值内容。
 */
- (BOOL)getBoolean:(NSString*) key;

/**
 *  获取布尔型值
 *
 *  @param key          值的key
 *  @param defaultValue 缺省值
 *
 *  @return 如果值不存在或类型不正确返回缺省值，如果存在返回值内容。
 */
- (BOOL)optBoolean:(NSString*) key defaultValue:(BOOL) defaultValue;

/**
 *  获取整型值
 *
 *  @param key 值的key
 *
 *  @return 如果值不存在或类型不正确返回0，如果存在返回值内容
 */

- (int)getInteger:(NSString*) key;

/**
 *  获取整型值
 *
 *  @param key          值的key
 *  @param defaultValue 缺省值
 *
 *  @return 如果值不存在或类型不正确返回，如果存在返回值内容
 */
- (int)optInteger:(NSString*) key defaultValue:(int) defaultValue;

- (double)getDouble:(NSString*) key;
- (double)optDouble:(NSString*) key defaultValue:(double) defaultValue;

- (long long)getLong:(NSString *)key;
- (long long)optLong:(NSString *)key defaultValue:(long long)defaultValue;

- (NSString*)getString:(NSString*) key;
- (NSString*)optString:(NSString*) key defaultValue:(NSString*) defaultValue;

- (FSJSONArray*) getJSONArray: (NSString*) key;
- (FSJSONObject*)getJSONObject:(NSString*) key;

/**
 *  判断是否有这个key
 *
 *  @param key 值的key
 *
 *  @return 如果有这个key，返回YES否则返回NO
 */
-(BOOL)hasKey:(NSString*) key;



/**
 *  往字典中添加对象
 *
 *  @param key   要添加的值的key
 *  @param value 值
 */
- (void)putWithBoolean:(Boolean)  value key:(NSString*)key;
- (void)putWithInt:    (int)      value key:(NSString*)key;
- (void)putWithDouble: (double)   value key:(NSString*)key;
- (void)putWithString: (NSString*)value key:(NSString*)key;
- (void)putWithJSONArray:(FSJSONArray*) value   key:(NSString*)key;
- (void)putWithJSONObject:(FSJSONObject*) value key:(NSString*)key;

- (NSArray*)allKeys;
- (NSArray *)allValues;
- (NSString *)description;
- (NSUInteger)count;

- (NSUInteger)countByEnumeratingWithState:(NSFastEnumerationState *)state objects:(id __unsafe_unretained [])buffer count:(NSUInteger)len;

@end
