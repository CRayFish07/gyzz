define({ "api": [
  {
    "type": "post",
    "url": "/api/index/checkResultInfo",
    "title": "7、查询检测结果详情",
    "version": "0.0.1",
    "name": "index_checkResultInfo",
    "group": "index",
    "description": "<p>查询检测结果详情</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "checkResultId",
            "description": "<p>检测结果Id            （必填）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.id",
            "description": "<p>检测结果id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.standard",
            "description": "<p>控制标准</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.content",
            "description": "<p>控制内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.conclusion",
            "description": "<p>结论</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.fBfile",
            "description": "<p>拍照图片</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "list.checkResult",
            "description": "<p>检查结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\":0,\n     \"msg\":\"\",\n     \"data\":{\n         \"checkResultInfo\": [\n             {\n                 \"id\" : 263,\n                 \"standard\" : \"控制标准\",\n                 \"content\" : \"控制内容\",\n                 \"remark\" : \"备注\",\n                 \"conclusion\" : \"未检测\",\n                 \"fBfile\" : \"2016/3/14.jpg\",\n                 \"checkResult\" : \"\"\n             }\n         ]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/leoman/controller/api/IndexApi.java",
    "groupTitle": "index",
    "sampleRequest": [
      {
        "url": "http://192.168.1.112:8883/gyzz/api/index/checkResultInfo"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/index/commitCheckResult",
    "title": "9、提交检测结果",
    "version": "0.0.1",
    "name": "index_commitCheckResult",
    "group": "index",
    "description": "<p>提交检测结果</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>产品代码            （必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "flow",
            "description": "<p>工序               （必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>检查人员名称        （必填）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\":0,\n     \"msg\":\"\",\n     \"data\":{}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/leoman/controller/api/IndexApi.java",
    "groupTitle": "index",
    "sampleRequest": [
      {
        "url": "http://192.168.1.112:8883/gyzz/api/index/commitCheckResult"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/index/dataStatistics",
    "title": "2、首页数据统计",
    "version": "0.0.1",
    "name": "index_dataStatistics",
    "group": "index",
    "description": "<p>首页数据统计</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名称            （必填）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "dataInfo",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "dataInfo.allCount",
            "description": "<p>总产品数</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "dataInfo.allScrapCount",
            "description": "<p>总报废数</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "dataInfo.allReWorkCount",
            "description": "<p>总返修数</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "dataInfo.monthCount",
            "description": "<p>本月产品数</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "dataInfo.monthScrapCount",
            "description": "<p>本月报废数</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "dataInfo.monthReWorkCount",
            "description": "<p>本月返修数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\": 0,\n     \"msg\": \"\",\n     \"data\": {\n         \"dataInfo\": {\n             \"allCount\": 140,\n             \"allScrapCount\": 20,\n             \"allReWorkCount\": 50,\n             \"monthCount\": 80,\n             \"monthScrapCount\": 10,\n             \"monthReWorkCount\": 20\n         }\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/leoman/controller/api/IndexApi.java",
    "groupTitle": "index",
    "sampleRequest": [
      {
        "url": "http://192.168.1.112:8883/gyzz/api/index/dataStatistics"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/index/flowInfoList",
    "title": "6、查询工序检测记录列表",
    "version": "0.0.1",
    "name": "index_flowInfoList",
    "group": "index",
    "description": "<p>查询工序检测记录列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>产品代码            （必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "flow",
            "description": "<p>工序               （必填）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result.titleList",
            "description": "<p>标题数组</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result.dataList",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.dataList.num",
            "description": "<p>序号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.dataList.canModify",
            "description": "<p>是否可编辑，0=可编辑，1=不可编辑</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result.dataList.detailList",
            "description": "<p>数据集</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.dataList.detailList.id",
            "description": "<p>模块更新id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.dataList.detailList.passRate",
            "description": "<p>合格率</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result.dataList.detailList.childList",
            "description": "<p>详情list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.dataList.detailList.childList.status",
            "description": "<p>状态（-1=不适用，0=待检测，1=合格，2=返修，3=报废）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.dataList.detailList.childList.checkResultId",
            "description": "<p>检测结果Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\":0,\n     \"msg\":\"\",\n     \"data\":{\n         \"result\" :{\n             \"titleList\":[\"工装-gZ\",\"紧实质量-jSZL\",\"浇道-jD\",\"出气-cQ\"],\n             \"dataList\": [\n                 {\n                     \"num\" : \"No.1\",\n                     \"canModify\" : 0,\n                     \"detailList\" : [\n                         {\n                             \"id\" : 1,\n                             \"passRate\" : 90,\n                             \"childList\" : [\n                                 \"status\" : 1,\n                                 \"checkResultId\" : \"1\"\n                             ]\n                         },\n                         {\n                             \"id\" : 2,\n                             \"passRate\" : 80,\n                             \"childList\" : [\n                                 \"status\" : 0,\n                                 \"checkResultId\" : \"2\"\n                             ]\n                         }\n                     ]\n                 }\n             ]\n         }\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/leoman/controller/api/IndexApi.java",
    "groupTitle": "index",
    "sampleRequest": [
      {
        "url": "http://192.168.1.112:8883/gyzz/api/index/flowInfoList"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/index/login",
    "title": "1、登录",
    "version": "0.0.1",
    "name": "index_login",
    "group": "index",
    "description": "<p>登录</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>账号           (必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码           (必填)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userInfo.id",
            "description": "<p>id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.account",
            "description": "<p>账号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.competence",
            "description": "<p>权限，中间用英文逗号隔开</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.createTime",
            "description": "<p>注册时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.updateTime",
            "description": "<p>修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\": 0,\n     \"msg\": \"\",\n     \"data\": {\n         \"userInfo\": {\n             \"id\": 14,\n             \"account\": \"tu\",\n             \"competence\": \"1,2,4\",\n             \"createTime\": \"1474600084564\",\n             \"updateTime\": \"1474600084564\"\n         }\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/leoman/controller/api/IndexApi.java",
    "groupTitle": "index",
    "sampleRequest": [
      {
        "url": "http://192.168.1.112:8883/gyzz/api/index/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/index/productList",
    "title": "3、产品列表",
    "version": "0.0.1",
    "name": "index_productList",
    "group": "index",
    "description": "<p>产品列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pageNum",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页显示条数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "list.id",
            "description": "<p>产品ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "list.code",
            "description": "<p>产品代码</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "list.name",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.type",
            "description": "<p>产品型号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\":0,\n     \"msg\":\"\",\n     \"data\":{\n         \"list\": [\n             {\n                 \"id\" : 1,\n                 \"code\" : \"21235\",\n                 \"name\" : \"TCL电视机\",\n                 \"type\" : \"5454-wew\"\n             }\n         ]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/leoman/controller/api/IndexApi.java",
    "groupTitle": "index",
    "sampleRequest": [
      {
        "url": "http://192.168.1.112:8883/gyzz/api/index/productList"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/index/productListPlus",
    "title": "4、根据产品型号查询件号列表",
    "version": "0.0.1",
    "name": "index_productListPlus",
    "group": "index",
    "description": "<p>根据产品型号查询件号列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>产品型号            （必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pageNum",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页显示条数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "list.id",
            "description": "<p>产品ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "list.name",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.type",
            "description": "<p>产品型号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.countNum",
            "description": "<p>铸件件号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\":0,\n     \"msg\":\"\",\n     \"data\":{\n         \"list\": [\n             {\n                 \"id\" : 1,\n                 \"name\" : \"TCL电视机\",\n                 \"type\" : \"5454-wew\",\n                 \"countNum\" : \"20161222\"\n             }\n         ]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/leoman/controller/api/IndexApi.java",
    "groupTitle": "index",
    "sampleRequest": [
      {
        "url": "http://192.168.1.112:8883/gyzz/api/index/productListPlus"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/index/stepList",
    "title": "5、查询工步列表",
    "version": "0.0.1",
    "name": "index_stepList",
    "group": "index",
    "description": "<p>查询工步列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>产品代码            （必填）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.content",
            "description": "<p>工步</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "list.status",
            "description": "<p>状态（-1=不适用，0=待检测，1=合格，2=返修，3=报废）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\":0,\n     \"msg\":\"\",\n     \"data\":{\n         \"list\": [\n             {\n                 \"content\" : \"砂处理\",\n                 \"status\" : 1\n             }\n         ]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/leoman/controller/api/IndexApi.java",
    "groupTitle": "index",
    "sampleRequest": [
      {
        "url": "http://192.168.1.112:8883/gyzz/api/index/stepList"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/index/updateCheckResult",
    "title": "8、修改检测结果",
    "version": "0.0.1",
    "name": "index_updateCheckResult",
    "group": "index",
    "description": "<p>修改检测结果</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "checkResultId",
            "description": "<p>检测结果Id                                                              （必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>检测人员姓名                                                            （必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "conclusion",
            "description": "<p>结论                                                                    （必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fBfile",
            "description": "<p>拍照图片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "checkResult",
            "description": "<p>检查结果</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "updateId",
            "description": "<p>更新模块id,（第7个接口返回值list里面的id）                                 （必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "updateFlow",
            "description": "<p>更新模块名称（第7个接口入参的flow）                                        （必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "updateModule",
            "description": "<p>当前更新步骤名称（第7个接口返回值list.detailList里面的content）             （必填）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\":0,\n     \"msg\":\"\",\n     \"data\":{}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/leoman/controller/api/IndexApi.java",
    "groupTitle": "index",
    "sampleRequest": [
      {
        "url": "http://192.168.1.112:8883/gyzz/api/index/updateCheckResult"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/index/uploadFile",
    "title": "10、上传图片",
    "version": "0.0.1",
    "name": "index_uploadFile",
    "group": "index",
    "description": "<p>上传图片</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "FILE",
            "optional": false,
            "field": "file",
            "description": "<p>图片           （必填）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\":0,\n     \"msg\":\"\",\n     \"data\":{}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/leoman/controller/api/IndexApi.java",
    "groupTitle": "index",
    "sampleRequest": [
      {
        "url": "http://192.168.1.112:8883/gyzz/api/index/uploadFile"
      }
    ]
  }
] });
