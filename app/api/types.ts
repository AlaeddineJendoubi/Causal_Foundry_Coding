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

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string; // Consider using Date type for actual date handling
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  ip: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    country: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      country: string;
    };
  };
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
  role: string;
};

export interface GetUserResponse {
  data: User;
}

export type Reaction = {
  likes: number;
  dislikes: number;
};

export type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reaction;
  views: number;
  userId: number;
};

export type PostsDataResponse = {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
};

export type UserNameResponse = {
  firstName: string;
  lastName: string;
};
