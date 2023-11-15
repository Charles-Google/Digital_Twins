

let config = {};

export function setConfig(newConfig) {
  config = newConfig;
}

export function getConfig() {
  return config;
}

// 从外部加载配置文件
import configData from '../public/json/config.json';
setConfig(configData);

export var mqtt_config = {
  host: "broker.emqx.io",
  port: 8083,
  clientId: "yourClientId",
  topic: "ykkk",
};

// export var http_config = {
//   url: "http://localhost:3000/public", //http服务器上的静态资源目录
// };

export var camera_config = {
  camera_panningSensibility: 30, //摄像机平移灵敏度
  camera_wheelPrecision: 2.5, //摄像机滚轮灵敏度
};

export var page_config = {
  url: "http://www.baidu.com", //跳转页面
};
