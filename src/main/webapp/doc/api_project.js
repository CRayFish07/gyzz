define({
  "name": "gyzz接口文档",
  "version": "0.0.1",
  "description": "",
  "title": "gyzz接口测试界面",
  "url": "http://192.168.1.112:8883/gyzz",
  "sampleUrl": "http://192.168.1.112:8883/gyzz",
  "header": {
    "title": "start",
    "content": "<h3>接口返回格式</h3>\n<h2>单条数据:</h2>\n<blockquote>\n<p>异常:</p>\n</blockquote>\n<pre><code class=\"language-javascript\">{ \n    &quot;status&quot;:1,\n    &quot;msg&quot;:&quot;错误原因&quot;,\n    &quot;data&quot;:{}\n}\n</code></pre>\n<blockquote>\n<p>正常:</p>\n</blockquote>\n<pre><code class=\"language-javascript\">{\n    &quot;status&quot;:0,\n    &quot;msg&quot;:&quot;&quot;,\n    &quot;data&quot;:{\n        &quot;id&quot;:&quot;1&quot;,\n        &quot;name&quot;:&quot;wb&quot;\n    }\n}\n</code></pre>\n<h2>多条数据:</h2>\n<blockquote>\n<p>异常:</p>\n</blockquote>\n<pre><code class=\"language-javascript\">{\n    &quot;status&quot;:1,\n    &quot;msg&quot;:&quot;错误原因&quot;,\n    &quot;data&quot;:{}\n}\n</code></pre>\n<blockquote>\n<p>正常:</p>\n</blockquote>\n<pre><code class=\"language-javascript\">{\n    &quot;status&quot;:0,\n    &quot;msg&quot;:&quot;&quot;,\n    &quot;data&quot;:{\n        &quot;page&quot;:{\n            &quot;totalNum&quot;:4,\n            &quot;totalPage&quot;:2,\n            &quot;currentPage&quot;:1\n        },\n        &quot;list&quot;:[\n            {\n                &quot;id&quot;:267,\n                &quot;city&quot;:&quot;Wuhan&quot;\n            },\n            {\n                &quot;id&quot;:266,\n                &quot;city&quot;:&quot;Nanjin&quot;\n            }\n        ]\n    }\n}\n</code></pre>\n"
  },
  "template": {
    "forceLanguage": "zh",
    "withCompare": true,
    "withGenerator": true
  },
  "apidoc": "0.2.0",
  "generator": {
    "name": "apidoc",
    "time": "2017-03-10T06:15:24.203Z",
    "url": "http://apidocjs.com",
    "version": "0.16.1"
  }
});
