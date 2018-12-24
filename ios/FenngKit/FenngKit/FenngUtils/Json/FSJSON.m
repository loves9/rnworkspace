//
//  FSJSON.m
//  FenngKit
//
//  Created by iFeng on 2018/10/8.
//  Copyright © 2018 iFeng. All rights reserved.
//

#import "FSJSON.h"

#import <Foundation/NSJSONSerialization.h>

@implementation NSArray (FSJSONSerializing)

- (NSString*)JSONRepresentation
{
    NSError* error = nil;
    NSData* jsonData = [NSJSONSerialization dataWithJSONObject:self
                                                       options:0
                                                         error:&error];
    
    if (error != nil) {
        NSLog(@"NSArray JSONString error: %@", [error localizedDescription]);
        return @"";
    } else {
        return [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
    }
}

@end

@implementation NSDictionary (FSJSONSerializing)

- (NSString*)JSONRepresentation
{
    NSError* error = nil;
    NSData* jsonData = [NSJSONSerialization dataWithJSONObject:self
                                                       options:0
                                                         error:&error];
    
    if (error != nil) {
        NSLog(@"NSDictionary JSONString error: %@", [error localizedDescription]);
        return @"";
    } else {
        return [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
    }
}

@end

@implementation NSString (FSJSONSerializing)

- (id)JSONSerialization
{
    NSError* error = nil;
    id object = [NSJSONSerialization JSONObjectWithData:[self dataUsingEncoding:NSUTF8StringEncoding]
                                                options:kNilOptions
                                                  error:&error];
    
    if (error != nil) {
        NSLog(@"NSString JSONObject error: %@", [error localizedDescription]);
    }
    
    return object;
}

@end

