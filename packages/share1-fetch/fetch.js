const TEST_URL_ZHIHU = 'https://tenapi.cn/zhihuresou/'
const TEST_URL_TIANQI = 'https://tenapi.cn/wether/'
export default async function run() {

  // function fetch(input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response> 
  //            new(input: RequestInfo | URL, init?: RequestInit): Request;
  // input 可以是 Request / URL / string
  // try {
  //   // const url = new URL(TEST_URL_TIANQI)
  //   // url.searchParams.append('city', '北京')
  //   // console.log(url)

  //   const headers = new Headers({ 'accept': 'application/json' })

  const request = new Request(TEST_URL_ZHIHU, { cache: 'force-cache' })
  // request 包含了请求的全部内容
  const response = await fetch(request)
  const json = await response.json()


  //   console.log(json)

  // } catch (e) {
  //   console.error(e)
  // }

  // 流
  try {
    const dom = document.querySelector('#show');
    // 请求
    const response = await fetch('http://localhost:3001', { mode: 'cors' })
    // ReadableStream 接口的 pipeThrough() 方法提供了一种链式的方式，将当前流通过转换流或者其它任何一对可写/可读的流进行管道传输
    const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();

    while (true) {
      const { done, value } = await reader.read();
      if (done) return;
      // 插入dom节点
      dom.insertAdjacentHTML('beforeend', value)

    }
  } catch (e) {
    console.error(e)
  }
}


/**
 *  new URL()      
 *  new Headers()
 *  
 *  new Request()  
 *  new Response()
 *  
 *  new Blob() new ArrayBuffer(), new ReadableStream()
 */


/**
 * 1. 暴露更多的底层网络能力
 * 2. 能力标准化 , 方便开发者直接调用
 * 3. 能够处理的数据更多 （流式处理），种类更多（处理二进制）
 * 4. 前端的能力边界扩大，未来可期了家人们
 */