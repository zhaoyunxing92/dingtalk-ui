import {CorpInfo} from "./corp.info";

/**
 * 用户信息
 */
export class UserInfo {
  /**
   * 企业信息
   */
  corpInfo?: CorpInfo
  /**
   * 姓名
   */
  name?: string
  /**
   * 用户id
   */
  userId?: string
  /**
   * 用户邮箱
   */
  email?: string
  /**
   * 头像
   */
  avatar?: string
  /**
   * 是否管理员
   */
  admin?: boolean
}
