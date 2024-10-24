import {Access, FieldAccess, AccessResult} from 'payload'
import {User} from '../payload-types'

//Check if current user is admin
export const isAdmin: FieldAccess = ({req: {user}}) => {
    return user?.roles?.includes('admin') ?? false
}

//check if current user is admin or self
export const isAdminOrSelf: FieldAccess = ({req: {user}, id}) => {
    return user?.roles?.includes('admin') || user?.roles?.includes('estate_manager') || user?.id === id
}

//field level access, ensuring only admin can create 
export const isAdminFieldLevel: FieldAccess = ({ req: { user } }) => {
    return user?.roles?.includes('admin') ? true : false;
  };
  
  //checkes if user is logged in
  export const isLoggedIn: Access< User> = ({ req: { user } }) => {
      return Boolean(user);
  };

//checks if current user isEstateManager
export const isEstateManager: FieldAccess = ({req: {user}}) => {
    return user?.roles?.includes('estate_manager') ?? false
}