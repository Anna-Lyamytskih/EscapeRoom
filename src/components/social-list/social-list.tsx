import SocialItem from '../social-item/socila-item';
import { socialItemList } from './constants';

const SocialList = () => (
  <div className="socials">
    <ul className="socials__list">
      {socialItemList.map((item) => (<SocialItem label={item.title} icon={item.value} key={item.value} />))}

    </ul>
  </div>
);

export default SocialList;
