import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-onnx-llm' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';


const isTurboModuleEnabled = global.__turboModuleProxy != null;

const OnnxLlmModule = isTurboModuleEnabled
  ? require('./NativeOnnxLlm').default
  : NativeModules.OnnxLlm;

const OnnxLlm = OnnxLlmModule
  ? OnnxLlmModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return OnnxLlm.multiply(a, b);
}

export function hello(): Promise<string> {
  return OnnxLlm.hello();
}