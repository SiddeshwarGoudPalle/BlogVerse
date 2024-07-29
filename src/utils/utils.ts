// import jwtDecode from 'jwt-decode';

// interface UserInfo {
//     userId: string;
//     username: string;
//     email: string;
//     authorName: string;
// }

// export const getUserDetails = (): UserInfo | null => {
//     const token = localStorage.getItem('token');
//     if (token) {
//         try {
//             // Decode the JWT token and cast to UserInfo type
//             const userInfo = jwtDecode<UserInfo>(token);
//             return userInfo;
//         } catch (error) {
//             console.error('Failed to decode token:', error);
//             return null;
//         }
//     }
//     return null;
// };
