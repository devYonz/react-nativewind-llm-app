#include <jni.h>
#include "react-native-onnx-llm.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_onnxllm_OnnxLlmModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return onnxllm::multiply(a, b);
}
