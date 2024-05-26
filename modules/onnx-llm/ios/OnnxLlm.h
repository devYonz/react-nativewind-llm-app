#ifdef __cplusplus
#import "react-native-onnx-llm.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNOnnxLlmSpec.h"

@interface OnnxLlm : NSObject <NativeOnnxLlmSpec>
#else
#import <React/RCTBridgeModule.h>

@interface OnnxLlm : NSObject <RCTBridgeModule>
#endif

@end
