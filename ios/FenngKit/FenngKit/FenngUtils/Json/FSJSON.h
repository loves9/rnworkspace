//
//  FSJSON.h
//  FenngKit
//
//  Created by iFeng on 2018/10/8.
//  Copyright © 2018 iFeng. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface NSArray (FSJSONSerializing)
- (NSString*)JSONRepresentation;
@end

@interface NSDictionary (FSJSONSerializing)
- (NSString*)JSONRepresentation;
@end

@interface NSString (FSJSONSerializing)
- (id)JSONSerialization;
@end
