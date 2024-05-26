import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to OnnxLlmExpo.web.ts
// and on native platforms to OnnxLlmExpo.ts
import OnnxLlmExpoModule from './src/OnnxLlmExpoModule';
import OnnxLlmExpoView from './src/OnnxLlmExpoView';
import { ChangeEventPayload, OnnxLlmExpoViewProps } from './src/OnnxLlmExpo.types';

// Get the native constant value.
export const PI = OnnxLlmExpoModule.PI;

export function hello(): string {
  return OnnxLlmExpoModule.hello();
}

export async function setValueAsync(value: string) {
  return await OnnxLlmExpoModule.setValueAsync(value);
}

const emitter = new EventEmitter(OnnxLlmExpoModule ?? NativeModulesProxy.OnnxLlmExpo);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { OnnxLlmExpoView, OnnxLlmExpoViewProps, ChangeEventPayload };
