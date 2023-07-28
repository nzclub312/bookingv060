'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';
import LandscapeIcon from '@mui/icons-material/Landscape';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';

export const categories = [
  {
    label: 'Гостиницы',
    icon: HotelOutlinedIcon,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Люкс',
    icon: IoDiamond,
    description: 'Люксовые заведения в Кыргызстане - предлагают роскошные места и виды на природу с элегантным интерьером и высоким уровнем комфорта и расслабления'
  },
  {
    label: 'Коттеджи',
    icon: CottageOutlinedIcon,
    description: 'This property is in a barn!'
  },
  {
    label: 'Модерн',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Бассейн',
    icon: PoolOutlinedIcon,
    description: 'This is property has a beautiful pool!'
  },
  {
    label: 'Пляж',
    icon: TbBeach,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Кэмпинг',
    icon: GiForestCamp,
    description: 'This property offers camping activities!'
  },
  {
    label: 'Высокие горы',
    icon: ForestOutlinedIcon,
    description: 'This property is in the desert!'
  },
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;