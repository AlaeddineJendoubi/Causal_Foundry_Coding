export type SignInDataType = {
  username: string;
  password: string;
};

export interface SignInResponse {
  data: {
    accessToken: string;
    refreshToken: string;
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
  };
}

export type TokenType = 'accessToken' | 'refreshToken';

export interface RefreshTokenRequestType {
  refreshToken: string;
}

export interface RefreshTokenResponseType {
  data: {accessToken: string; refreshToken: string};
}
