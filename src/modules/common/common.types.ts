export interface GoogleUser {
    uid: string;
    displayName: string;
    email: string;
    emailVerified: boolean;
    photoURL: string;
    phoneNumber: string | null;
    isAnonymous: boolean;
    metadata: UserMetadata;
    providerData: ProviderData[];
}

interface UserMetadata {
    createdAt: string;
    lastLoginAt: string;
    lastSignInTime: string;
    creationTime: string;
}
  
interface ProviderData {
    providerId: string;
    uid: string;
    displayName: string;
    email: string;
    phoneNumber: string | null;
    photoURL: string;
}