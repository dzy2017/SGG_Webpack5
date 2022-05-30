import{_ as n,c as a}from"./app.0e05b676.js";const s={},e=a(`<h1 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h1><p><strong><code>Webpack</code> \u662F\u4E00\u4E2A\u9759\u6001\u8D44\u6E90\u6253\u5305\u5DE5\u5177\u3002</strong></p><p>\u5B83\u4F1A\u4EE5\u4E00\u4E2A\u6216\u591A\u4E2A\u6587\u4EF6\u4F5C\u4E3A\u6253\u5305\u7684\u5165\u53E3\uFF0C\u5C06\u6211\u4EEC\u6574\u4E2A\u9879\u76EE\u6240\u6709\u6587\u4EF6\u7F16\u8BD1\u7EC4\u5408\u6210\u4E00\u4E2A\u6216\u591A\u4E2A\u6587\u4EF6\u8F93\u51FA\u51FA\u53BB\u3002</p><p>\u8F93\u51FA\u7684\u6587\u4EF6\u5C31\u662F\u7F16\u8BD1\u597D\u7684\u6587\u4EF6\uFF0C\u5C31\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u6BB5\u8FD0\u884C\u4E86\u3002</p><p>\u6211\u4EEC\u5C06 <code>Webpack</code> \u8F93\u51FA\u7684\u6587\u4EF6\u53EB\u505A <code>bundle</code>\u3002</p><h2 id="\u529F\u80FD\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD\u4ECB\u7ECD" aria-hidden="true">#</a> \u529F\u80FD\u4ECB\u7ECD</h2><p>Webpack \u672C\u8EAB\u529F\u80FD\u662F\u6709\u9650\u7684:</p><ul><li>\u5F00\u53D1\u6A21\u5F0F\uFF1A\u4EC5\u80FD\u7F16\u8BD1 JS \u4E2D\u7684 <code>ES Module</code> \u8BED\u6CD5</li><li>\u751F\u4EA7\u6A21\u5F0F\uFF1A\u80FD\u7F16\u8BD1 JS \u4E2D\u7684 <code>ES Module</code> \u8BED\u6CD5\uFF0C\u8FD8\u80FD\u538B\u7F29 JS \u4EE3\u7801</li></ul><h2 id="\u5F00\u59CB\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB\u4F7F\u7528" aria-hidden="true">#</a> \u5F00\u59CB\u4F7F\u7528</h2><h3 id="_1-\u8D44\u6E90\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#_1-\u8D44\u6E90\u76EE\u5F55" aria-hidden="true">#</a> 1. \u8D44\u6E90\u76EE\u5F55</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>webpack_code # \u9879\u76EE\u6839\u76EE\u5F55\uFF08\u6240\u6709\u6307\u4EE4\u5FC5\u987B\u5728\u8FD9\u4E2A\u76EE\u5F55\u8FD0\u884C\uFF09
    \u2514\u2500\u2500 src # \u9879\u76EE\u6E90\u7801\u76EE\u5F55
        \u251C\u2500\u2500 js # js\u6587\u4EF6\u76EE\u5F55
        \u2502   \u251C\u2500\u2500 count.js
        \u2502   \u2514\u2500\u2500 sum.js
        \u2514\u2500\u2500 main.js # \u9879\u76EE\u4E3B\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_2-\u521B\u5EFA\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u6587\u4EF6" aria-hidden="true">#</a> 2. \u521B\u5EFA\u6587\u4EF6</h3><ul><li>count.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">-</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>sum.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> args<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">p<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> p <span class="token operator">+</span> c<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>main.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> count <span class="token keyword">from</span> <span class="token string">&quot;./js/count&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> sum <span class="token keyword">from</span> <span class="token string">&quot;./js/sum&quot;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_3-\u4E0B\u8F7D\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_3-\u4E0B\u8F7D\u4F9D\u8D56" aria-hidden="true">#</a> 3. \u4E0B\u8F7D\u4F9D\u8D56</h3><p>\u6253\u5F00\u7EC8\u7AEF\uFF0C\u6765\u5230\u9879\u76EE\u6839\u76EE\u5F55\u3002\u8FD0\u884C\u4EE5\u4E0B\u6307\u4EE4\uFF1A</p><ul><li>\u521D\u59CB\u5316<code>package.json</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm init -y
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6B64\u65F6\u4F1A\u751F\u6210\u4E00\u4E2A\u57FA\u7840\u7684 <code>package.json</code> \u6587\u4EF6\u3002</p><p><strong>\u9700\u8981\u6CE8\u610F\u7684\u662F <code>package.json</code> \u4E2D <code>name</code> \u5B57\u6BB5\u4E0D\u80FD\u53EB\u505A <code>webpack</code>, \u5426\u5219\u4E0B\u4E00\u6B65\u4F1A\u62A5\u9519</strong></p><ul><li>\u4E0B\u8F7D\u4F9D\u8D56</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm i webpack webpack-cli -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_4-\u542F\u7528-webpack" tabindex="-1"><a class="header-anchor" href="#_4-\u542F\u7528-webpack" aria-hidden="true">#</a> 4. \u542F\u7528 Webpack</h3><ul><li>\u5F00\u53D1\u6A21\u5F0F</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npx webpack ./src/main.js --mode=development
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u751F\u4EA7\u6A21\u5F0F</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npx webpack ./src/main.js --mode=production
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>npx webpack</code>: \u662F\u7528\u6765\u8FD0\u884C\u672C\u5730\u5B89\u88C5 <code>Webpack</code> \u5305\u7684\u3002</p><p><code>./src/main.js</code>: \u6307\u5B9A <code>Webpack</code> \u4ECE <code>main.js</code> \u6587\u4EF6\u5F00\u59CB\u6253\u5305\uFF0C\u4E0D\u4F46\u4F1A\u6253\u5305 <code>main.js</code>\uFF0C\u8FD8\u4F1A\u5C06\u5176\u4F9D\u8D56\u4E5F\u4E00\u8D77\u6253\u5305\u8FDB\u6765\u3002</p><p><code>--mode=xxx</code>\uFF1A\u6307\u5B9A\u6A21\u5F0F\uFF08\u73AF\u5883\uFF09\u3002</p><h3 id="_5-\u89C2\u5BDF\u8F93\u51FA\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_5-\u89C2\u5BDF\u8F93\u51FA\u6587\u4EF6" aria-hidden="true">#</a> 5. \u89C2\u5BDF\u8F93\u51FA\u6587\u4EF6</h3><p>\u9ED8\u8BA4 <code>Webpack</code> \u4F1A\u5C06\u6587\u4EF6\u6253\u5305\u8F93\u51FA\u5230 <code>dist</code> \u76EE\u5F55\u4E0B\uFF0C\u6211\u4EEC\u67E5\u770B <code>dist</code> \u76EE\u5F55\u4E0B\u6587\u4EF6\u60C5\u51B5\u5C31\u597D\u4E86</p><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p><code>Webpack</code> \u672C\u8EAB\u529F\u80FD\u6BD4\u8F83\u5C11\uFF0C\u53EA\u80FD\u5904\u7406 <code>js</code> \u8D44\u6E90\uFF0C\u4E00\u65E6\u9047\u5230 <code>css</code> \u7B49\u5176\u4ED6\u8D44\u6E90\u5C31\u4F1A\u62A5\u9519\u3002</p><p>\u6240\u4EE5\u6211\u4EEC\u5B66\u4E60 <code>Webpack</code>\uFF0C\u5C31\u662F\u4E3B\u8981\u5B66\u4E60\u5982\u4F55\u5904\u7406\u5176\u4ED6\u8D44\u6E90\u3002</p>`,39);function p(c,t){return e}var l=n(s,[["render",p],["__file","base.html.vue"]]);export{l as default};
