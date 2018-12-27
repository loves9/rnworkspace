//
//  HRPaymentModule.m
//  rnworkspace
//
//  Created by iFeng on 2018/12/26.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "HRPaymentModule.h"

#import <WXApi.h>

@implementation HRPaymentModule
RCT_EXPORT_MODULE();

#pragma mark - 微信支付
RCT_EXPORT_METHOD(WXPayment:(RCTResponseSenderBlock)callback)
{
  [WXApi registerApp:@"wxd930ea5d5a258f4f"];
  
  PayReq *request = [[PayReq alloc] init];
  request.partnerId = @"10000100";
  request.prepayId= @"1101000000140415649af9fc314aa427";
  request.package = @"Sign=WXPay";
  request.nonceStr= @"a462b76e7436e98e0ed6e13c64b4fd1c";
//  request.timeStamp= @"1397527777";
  request.sign= @"582282D72DD2B03AD892830965F428CB16E7A256";
  [WXApi sendReq:request];
  
  
//  callback(@[[NSNull null], @""]);
}

-(void)onResp:(BaseResp*)resp{
  if ([resp isKindOfClass:[PayResp class]]){
    PayResp*response=(PayResp*)resp;
    switch(response.errCode){
      case WXSuccess:
        //服务器端查询支付通知或查询API返回的结果再提示成功
        NSLog(@"支付成功");
        break;
      default:
        NSLog(@"支付失败，retcode=%d",resp.errCode);
        break;
    }
  }
}
@end
