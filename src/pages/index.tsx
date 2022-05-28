import Profile from './profile';
import Home from './home';
import EditProfileForm from '../pages/edit-profile';
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
