#import "OnnxLlm.h"

@implementation OnnxLlm
RCT_EXPORT_MODULE()

// Example method
// See // https://reactnative.dev/docs/native-modules-ios
RCT_EXPORT_METHOD(multiply:(double)a
                  b:(double)b
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
    NSNumber *result = @(onnxllm::multiply(a, b));

    resolve(result);
}

RCT_EXPORT_METHOD(hello:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
    NSLog(@"Hello method called");
    const char* result = onnxllm::hello();
    NSString* str = [NSString stringWithUTF8String:result];
    resolve(str);
}

// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeOnnxLlmSpecJSI>(params);
}
#endif

@end
