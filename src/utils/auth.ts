export const checkAuthenticated = () => {
  const authToken = localStorage.getItem('accessToken');
  let isAuthenticated = false;
  if (authToken && authToken.length > 0) {
    isAuthenticated = true;
  }

  return isAuthenticated;
}

