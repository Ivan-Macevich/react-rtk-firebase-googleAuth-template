export interface IUser {
    uid: string;
    photoURL: string;
    email: string;
    displayName: string;
}

export enum AuthActionTypes {
    SIGNIN_GOOGLE_USER='auth/setUser',
    SIGNOUT_USER= 'auth/clearUser'
}

