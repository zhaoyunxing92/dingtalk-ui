/**
 * dd.config中所有的参数必须直接来自服务端
 */
export class DingConfig {

  /**
   * 必填，微应用ID
   */
  agentId?: number

  /**
   * 必填，企业ID
   */
  corpId?: string

  /**
   * 必填，生成签名的时间戳
   */
  timeStamp?: number

  /**
   * 必填，自定义固定字符串。
   */
  nonce?: string

  /**
   * 必填，签名
   */
  signature?: string

  /**
   * 选填。0表示微应用的jsapi,1表示服务窗的jsapi；不填默认为0。该参数从dingtalk.js的0.8.3版本开始支持
   */
  type?: number

  /**
   *  需要使用的jsapi列表
   */
  apis?: []
}
