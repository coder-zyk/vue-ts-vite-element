import { request } from "..";
/**注册用户 */
function RegisterUser(data: any) {
  return request.post('/api/reguser', data)
}
/**登录 */
function Login(data: any) {
  return request.post('/api/login', data)
}

export { RegisterUser, Login }