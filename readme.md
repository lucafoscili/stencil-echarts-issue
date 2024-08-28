Log:

C:\Users\Luca\Documents\GitHub\stencil-echarts-issue>npm install
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful. 
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated puppeteer@21.11.0: < 22.8.2 is no longer supported

added 353 packages, and audited 354 packages in 13s

38 packages are looking for funding
  run `npm fund` for details

3 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

C:\Users\Luca\Documents\GitHub\stencil-echarts-issue>npm run build

> stencil-echarts-issue@0.0.1 build
> stencil build

[57:30.3]  @stencil/core
[57:30.7]  v4.21.0
[57:31.6]  build, stencil-echarts-issue, prod mode, started ...
[57:31.6]  transpile started ...
[57:32.6]  transpile finished in 949 ms
[57:32.6]  generate custom elements + source maps started ...
[57:32.6]  generate lazy + source maps started ...
[57:32.7]  generate custom elements + source maps finished in 170 ms
[57:32.9]  generate lazy + source maps finished in 305 ms
[57:32.9]  copy started ...
[57:32.9]  copy finished (0 files) in 18 ms
[57:32.9]  updated readme docs: my-component
[57:32.9]  build finished in 1.31 s


C:\Users\Luca\Documents\GitHub\stencil-echarts-issue>npm run build

> stencil-echarts-issue@0.0.1 build
> stencil build

[57:36.0]  @stencil/core
[57:36.3]  v4.21.0
[57:37.0]  build, stencil-echarts-issue, prod mode, started ...
[57:37.0]  transpile started ...
[57:38.2]  transpile finished in 1.23 s

[ ERROR ]  TypeScript: src/components.d.ts:8:10
           Module '"echarts"' has no exported member 'XAXisOption'.

      L7:  import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
      L8:  import { XAXisOption as XAXisComponentOption, YAXisOption as YAXisComponentOption } from "echarts";
      L9:  export { XAXisOption as XAXisComponentOption, YAXisOption as YAXisComponentOption } from "echarts";

[ ERROR ]  TypeScript: src/components.d.ts:8:47
           Module '"echarts"' has no exported member 'YAXisOption'.

      L7:  import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
      L8:  import { XAXisOption as XAXisComponentOption, YAXisOption as YAXisComponentOption } from "echarts";
      L9:  export { XAXisOption as XAXisComponentOption, YAXisOption as YAXisComponentOption } from "echarts";

[57:38.2]  build failed in 1.25 s


C:\Users\Luca\Documents\GitHub\stencil-echarts-issue>