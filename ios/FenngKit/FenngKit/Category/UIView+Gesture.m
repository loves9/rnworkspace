//
//  UIView+Gesture.m
//  LakalaUILibrary
//
//  Created by bob on 29/12/13.
//
//

#import "UIView+Gesture.h"

@implementation UIView (Gesture)
- (void)addTarget:(id)target action:(SEL)action
{
    UITapGestureRecognizer *tap = [[UITapGestureRecognizer alloc] initWithTarget:target
                                                                          action:action];
    self.userInteractionEnabled = YES;
    [self addGestureRecognizer:tap];
    tap.cancelsTouchesInView=NO;
}
@end
