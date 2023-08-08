import { User } from "../types/User.types"

export interface RootState {
    root: {
        user: {
            currentUser: User;
            loading: boolean;
            error: string | null;
        }
        
    }
}