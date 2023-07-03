import { IconType } from 'react-icons';
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';

import { IPlatform } from '@/services/get-games';

interface IProps {
  platforms: IPlatform[];
}

const PlatformIconList = ({ platforms }: IProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    playstation: FaPlaystation,
    nintendo: SiNintendo,
    android: FaAndroid,
    ios: MdPhoneIphone,
    mac: FaApple,
    linux: FaLinux,
    web: BsGlobe,
  };

  return (
    <div className="flex space-x-2">
      {platforms.map((platform) => {
        const Icon = iconMap[platform.slug];
        if (Icon) {
          return (
            <div key={platform.id}>
              <Icon className="text-gray-500" title={platform.name} />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default PlatformIconList;
