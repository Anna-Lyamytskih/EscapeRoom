import { Link } from 'react-router-dom';

const SocialItem = () => (
  <li className="socials__item">
    <Link className="socials__link" to="#" aria-label="Skype" target="_blank" rel="nofollow noopener noreferrer">
      <svg className="socials__icon socials__icon--default" width="28" height="28" aria-hidden="true">
        <use xlinkHref="#icon-skype-default">
        </use>
      </svg>
      <svg className="socials__icon socials__icon--interactive" width="28" height="28" aria-hidden="true">
        <use xlinkHref="#icon-skype-interactive">
        </use>
      </svg>
    </Link>
  </li>
);

export default SocialItem;
