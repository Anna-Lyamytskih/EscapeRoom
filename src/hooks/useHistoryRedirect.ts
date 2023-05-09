import {useNavigate} from 'react-router';
import { AppRoute } from '../router/constants';

const REDIRECT_LS_KEY = 'redirect_url'

export const useHistoryRedirect = () => {
  const navigate = useNavigate();

  const saveUrl = (url: string) => {
    localStorage.setItem(REDIRECT_LS_KEY, url)
  }

  const restoreUrl = () => {
    const redirectUri = localStorage.getItem(REDIRECT_LS_KEY)
    if (redirectUri) {
      navigate(redirectUri);
      localStorage.removeItem(REDIRECT_LS_KEY);
    } else {
      navigate(AppRoute.Root);
    }
  }

  return {saveUrl, restoreUrl}
}
