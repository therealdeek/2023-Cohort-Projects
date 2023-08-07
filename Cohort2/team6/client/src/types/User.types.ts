export interface User {
  uuid: number;
  username: string;
  isLoggedIn: boolean;
}

export interface UserState {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
}
