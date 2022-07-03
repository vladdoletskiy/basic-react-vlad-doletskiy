import { Routes, Route } from 'react-router-dom';
import { toProfile, toEditProfile } from 'shared';
import { ProfilePage } from './profile';
import { HomePage } from './home';
import { UpdateUserPage } from './update-profile';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path={toProfile} element={<ProfilePage />} />
      <Route path={toEditProfile} element={<UpdateUserPage />} />
    </Routes>
  );
};
