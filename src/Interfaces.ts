export interface Token {
  access_token: string;
  scope: string;
  expires_in: number;
  token_type: string;
}
export interface TextPost {
  id: number;
  name: string;
  text: string;
}