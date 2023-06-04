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
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';

export const categories = [
  {
    label: 'Здоровье',
    icon: SpaOutlinedIcon,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Пляж',
    icon: TbBeach,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Ветряные горы',
    icon: LandscapeIcon,
    description: 'This property is has windmills!',
  },
  {
    label: 'Модерн',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Сельская местность',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Бассейн',
    icon: PoolOutlinedIcon,
    description: 'This is property has a beautiful pool!'
  },
  {
    label: 'Озеро',
    icon: GiBoatFishing,
    description: 'This property is near a lake!'
  },
  {
    label: 'Катание на лыжах',
    icon: FaSkiing,
    description: 'This property has skiing activies!'
  },
  {
    label: 'Замки',
    icon: GiCastle,
    description: 'This property is an ancient castle!'
  },
  {
    label: 'Ущелья',
    icon: GiCaveEntrance,
    description: 'This property is in a spooky cave!'
  },
  {
    label: 'Кэмпинг',
    icon: GiForestCamp,
    description: 'This property offers camping activities!'
  },
  {
    label: 'Арктический вид',
    icon: BsSnow,
    description: 'This property is in arctic environment!'
  },
  {
    label: 'Высокие горы',
    icon: ForestOutlinedIcon,
    description: 'This property is in the desert!'
  },
  {
    label: 'Коттеджи',
    icon: CottageOutlinedIcon,
    description: 'This property is in a barn!'
  },
  {
    label: 'Люкс',
    icon: IoDiamond,
    description: 'This property is brand new and luxurious!'
  }
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