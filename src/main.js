let html = document.querySelector("#html"); //通过css选择器找到某个元素
let style = document.querySelector("#style");
//html就是放HTML的，style就是放CSS的

let string = `/*你好，我叫刘芷言
*接下来我演示一下我的前端功底
*首先我要准备一个div
*/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来我把 div 变成一个八卦图
* 注意看好了
* 首先，把 div 变成一个圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
* 一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个神秘的小球*/
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%); 
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    border-radius: 50%;
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%); 
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
    border-radius: 50%;
}

`; //注意是反引号,同时给文字添加CSS的注释符

let string2 = ""; //为了没有回车的字符串
let n = 0; //因为想要数字不停的跳动，因此要给个变量
//从0开始，因为0是可以作为一个数字的下标的

let step = () => {
  setTimeout(() => {
    n = n;
    //如果是回车，就不搬
    //如果不是，就照搬
    if (string[n] === "\n") {
      //如果是回车，就不搬
      string2 += "<br>";
      //等价于 string2 = string2 + "<br>"
    } else if (string[n] === " ") {
      //如果不是，就照搬
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }
    //相当于把string里面的内容一个一个搬过来，这是为了在搬运途中处理字符
    html.innerHTML = string2; //将内容传递到HTML里面
    style.innerHTML = string.substring(0, n); //将内容传递到CSS里
    window.scrollTo(0, 999999);
    html.scrollTo(0, 99999);
    if (n < string.length - 1) {
      //如果n不是最后一个就继续，把前面的n+1提到这里来
      n += 1;
      step(); //step结束之后再运行step
    }
    //html.innerHTML = string.substring(0, n);
  }, 0);
};

step();
