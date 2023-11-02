import * as React from "react";
import {
  MenuSettings,
  MenuType,
  PiletApi,
  EventEmitter,
  DataStoreOptions,
} from "piral-shell";
import { Web3Provider } from "@ethersproject/providers";
import './js/font'
// import './js/test'

const Page = React.lazy(() => import("./Page"));
// const Extensionpage = React.lazy(() => import("./Extensionpage"));
// const BnbPage = React.lazy(() => import("./components/BnbBalance"));

export function setup(app: PiletApi) {
  const result = app.getData("globalData1");
  // setInterval(()=>{
  //   console.log(result,'heiheiheiheihie')
  // },10000)

  /*-------- 接收emit 指令  ------------- */
  app.on("Web3Provider", (e) => {
    console.log("Web3Provider  Emitevent");
    console.log(e);
    console.log("Web3Provider  Emitevent");
  });
  //pilet之间发送emit 接收不到
  app.on("pilet1msg", (e) => {
    console.log('pilet 监听 pilet1 emitEvent')
    console.log(e);
  });

  app.on("web3Data", (e) => {
    console.log("web3Data  Emitevent");
    console.log(e);
    console.log("web3Data  Emitevent");
  });

  
  const options: DataStoreOptions = {
    target: "remote",
  };
  app.setData("foo", 15, {
    expires: 10,
    target: "local",
  });

  // setInterval(() => {
  //   console.log("---getdata(foo)----");
  //   const data = app.getData("foo");
  //   console.log(data);
  // }, 5000);

  // 发送emit指令
  app.emit("piletmsg", {
    msg: "hello piral-pilet-demo",
  });

  app.showNotification("Hello from Piral!", {
    autoClose: 2000,
  });
  /*-------- 注册页面  ------------- */
  app.registerPage("/home", Page);
  app.registerPage("/", Page);
  // app.registerMenu('Page', () => <a href="/home">Home </a>, {
  //   type: "general",
  //   id: 1,
  //   name: "Home",
  //   path:'/home',
  // } as MenuSettings);

  /*-------- 注册插槽  ------------- */
  // app.registerExtension("Extensionpage", Extensionpage);

  /*-------- 注册menu  ------------- */

  // 二级菜单  方法一
  /*
  在pilet 直接添加dom
  */
  //代码
  //   app.registerMenu(() =><>
  //   <a href="/page" style={{position:'relative'}}>Page  </a>
  //   <ul> <li> <a href=""></a></li></ul>
  //   </>

  //  );

  // // 方法二 参数传children
  // app.registerMenu(() => <a href="/page">Document </a>, {
  //   type: "general",
  //   id: 6,
  //   name: "Document",
  //   childrens: [
  //     { name: "BNB Paper", path: "/page/bnbpage" },
  //     { name: "Economic Paper", path: "/page1" },
  //     { name: "Spaceship Map", path: "/page1" },
  //     { name: "Code Book", path: "/page1" },
  //     { name: "Play Book", path: "/page1" },
  //   ],
  // } as MenuSettings);

  // 方法三 可配置

  // app.registerMenu('Page',()=> <a href="/page">Page </a>,{type:'general',id:6,name:'Page',path:'/page',isChild:false} as MenuSettings)
  // app.registerMenu('Page1',()=> <a href="/page1">Page </a>,{type:'general',id:6,name:'Page1',path:'/page1', order:1, isChild:true} as MenuSettings)
  // app.registerMenu('extension',()=> <a href="/extension">Page extension </a>,{type:'general',id:6,name:'Page1',path:'/page/extension', order:2, isChild:true} as MenuSettings)

  // app.registerTile(() => <button onClick={() => {
  //   app.unregisterTile('firstTitle')
  // }}>Remove</button>, {
  //   initialColumns: 2,
  //   initialRows: 2,
  // });
  // app.createConnector(
  //   () =>
  //     new Promise(resolve => setTimeout(() => resolve(result), 1000))
  // );
}
