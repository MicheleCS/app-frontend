const userService = new UserService();

const ProtectedRoutes = ({children}) => {
  const userAuthenticated = userService.userAuthenticated()
  return userAuthenticated ? children : <Routering/>
}
export default ProtectedRoutes;