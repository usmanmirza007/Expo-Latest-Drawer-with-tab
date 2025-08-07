export const authService = {
  login: async (email: string, password: string) => {
    console.log('[LOGIN]', email, password);
    return true;
  },
  signup: async (email: string, password: string) => {
    console.log('[SIGNUP]', email, password);
    return true;
  },
};
