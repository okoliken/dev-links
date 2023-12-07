
export const userDetails = () => {
  const user = sessionStorage.getItem('user')
  if(user !== null) {
    return JSON.parse(user)
  } else return null
}