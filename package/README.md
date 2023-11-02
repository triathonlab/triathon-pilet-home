# piral-pilet

## 本地调试

npm run start

## 本地打包

npm run build

## 本地发布

pilet publish --url http://localhost:9009/triathonlab/api/v1/pilet --api-key df133a512569cbc85f69788d1b7ff5a909f6bcfe1c9a2794283a2fc35175882c --fresh

```sh
npm run upload
```

### publish 参数

1. --url http://localhost:9009/triathonlab/api/v1/pilet 这是 piral-pilet-sevice 部署之后的地址
2. --api-key df133a512569cbc85f69788d1b7ff5a909f6bcfe1c9a2794283a2fc35175882c 这是 piral-pilet-sevice 部署之后固定生成的 KEY


## 使用步骤

- 1、pilet依赖shell搭建--引入的inherit 需要修改,piral-shell的引入路径也需要修改

```js
"piral-shell": "file:../piral-shell-demo/dist/emulator/piral-shell-1.0.1.tgz",

"importmap": {
    "imports": {},
    "inherit": [
      "piral-shell-demo"
    ]
  },
```

- 2、upload的路径要根据相应的测试环境进行修改 

```js
 "upload": `pilet publish --url ${http://localhost:9090}/triathonlab/api/v1/pilet --api-key ${ff948eba858cbd864e2ec9ba8d5cd293d1235dafc3927b733630fed369856289} --fresh`
```

发布之后在 node 服务中看到的数据格式

```js
{
  "items": [
    {
      "name": "piral-pilet",
      "version": "1.0.0",
      "link": "http://localhost:9009/files/piral-pilet/1.0.0/index.js",
      "requireRef": "webpackChunkpr_piralpilet",
      "integrity": "sha256-HCB3oh2CXrxvrCbpw8nO6WTRzyDRk/aFtwfxJfTYwFk=",
      "dependencies": {},
      "spec": "v2"
    }
  ]
}
```

## 初始化 npm v6 
npm init pilet --target piral-pilet-demo --source ./piral-shell-demo/dist/emulator/piral-shell-1.0.1.tgz --defaults

## 在npm v7、npm v8和更高版本中，您可以编写：
npm init pilet -- --target piral-pilet-demo --source ./piral-shell-demo/dist/emulator/piral-shell-1.0.1.tgz --defaults
