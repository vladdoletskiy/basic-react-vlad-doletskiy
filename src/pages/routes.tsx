import { Routes, Route } from 'react-router-dom';
import { ProfilePage } from './profile';
import { HomePage } from './home';
import { EditProfilePage } from './edit-profile';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/edit" element={<EditProfilePage />} />
    </Routes>
  );
};
