import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { OnnxLlmExpoViewProps } from './OnnxLlmExpo.types';

const NativeView: React.ComponentType<OnnxLlmExpoViewProps> =
  requireNativeViewManager('OnnxLlmExpo');

export default function OnnxLlmExpoView(props: OnnxLlmExpoViewProps) {
  return <NativeView {...props} />;
}
