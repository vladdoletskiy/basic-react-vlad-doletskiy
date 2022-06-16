import { Routes, Route } from 'react-router-dom';
import { ProfilePage } from './profile';
import { HomePage } from './home';
import { UpdateUserForm } from 'features/updateUser';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/edit" element={<UpdateUserForm />} />
    </Routes>
  );
};
