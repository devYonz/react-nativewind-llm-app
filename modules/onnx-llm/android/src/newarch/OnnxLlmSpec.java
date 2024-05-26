package com.onnxllm;

import com.facebook.react.bridge.ReactApplicationContext;

abstract class OnnxLlmSpec extends NativeOnnxLlmSpec {
  OnnxLlmSpec(ReactApplicationContext context) {
    super(context);
  }
}
