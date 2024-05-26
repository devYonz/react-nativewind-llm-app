import * as React from 'react';

import { OnnxLlmExpoViewProps } from './OnnxLlmExpo.types';

export default function OnnxLlmExpoView(props: OnnxLlmExpoViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
