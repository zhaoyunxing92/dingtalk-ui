/**
 * 接口返回
 */
class Res<T> {

  /**
   * msg 消息
   */
  msg?: string

  /**
   * code 码
   */
  code?: number

  /**
   * 是否成功
   */
  succeed?: boolean

  /**
   * 返回数据
   */
  data?: T
}
