const express = require("express");
const request = require("request");
const app = express();
app.use(express.json())

app.get("/send", async function (req, res) {
    const { openid } = req.query // 通过get参数形式指定openid
    // 在这里直接是触发性发送，也可以自己跟业务做绑定，改成事件性发送
    const info = await sendapi(openid)
    res.send(info)
});

app.listen(80,function(){
  console.log('服务启动成功！')
})

async function sendapi(openid) {
  return new Promise((resolve, reject) => {
    request({
      url: "http://api.weixin.qq.com/cgi-bin/message/subscribe/send",
      method: "POST",
      body: JSON.stringify({
        touser: openid,
        template_id: "这里替换成你的模板ID",
        miniprogram_state: "developer",
        data: {
          // 这里替换成自己的模板ID的详细事项，不要擅自添加或更改
          // 按照key前面的类型，对照参数限制填写，否则都会发送不成功
          // 
          thing4: {
            value: "这是一个提醒",
          },
          time5: {
            value: "2022年4月26日 21:48",
          },
        },
      }),
    },function(error,res){
        if(error) reject(error)
        resolve(res.body)
    });
  });
}