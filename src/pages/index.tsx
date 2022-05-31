import { Profile } from './profile/index';
import { Home } from './home/index';
import { EditProfileForm } from './edit-profile/index';
import { Routes, Route } from 'react-router-dom';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit" element={<EditProfileForm />} />
    </Routes>
  );
};
