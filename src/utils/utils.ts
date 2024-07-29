import jwt_decode from "jwt-decode";

interface UserInfo {
    userId: string;
    username: string;
    email: string;
    password: string;
}

export const getLoginInfo = (): UserInfo | null => {
    let token = localStorage.getItem("token");
    if (token) {
        try {
            const userInfo: UserInfo = jwt_decode(token);
            return userInfo;
        } catch (error) {
            console.error("Failed to decode token:", error);
            return null;
        }
    } else {
        return null;
    }
};
