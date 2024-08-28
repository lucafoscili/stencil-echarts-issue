import { Component, Prop, h } from '@stencil/core';
import { XAXisComponentOption, YAXisComponentOption } from 'echarts';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() x: XAXisComponentOption;

  /**
   * The middle name
   */
  @Prop() y: YAXisComponentOption;

  render() {
    return <div>Hello, World! I'm a mock</div>;
  }
}
