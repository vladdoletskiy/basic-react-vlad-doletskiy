export type User = {
  name: string;
  email: string;
  username: string;
  user_id: string;
  given_name: string;
  family_name: string;
  picture?: string;
};

export type Token = {
  access_token: string;
  expires_in: number;
  token_type: string;
};
