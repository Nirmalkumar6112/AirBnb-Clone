"use client";

import { TbBeach, TbMountain, TbPoo, TbPool } from "react-icons/tb";
import Container from "../Container";
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the Beach'
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property has windmills'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'Modern and up to the trend'
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is the Country Side!'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This property has a Pool!'
    },
    {
        label: 'Islands',
        icon: GiIsland,
        description: 'This property is on a Island'
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This property is close to a Lake!'
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This property has a Skiing Activity!'
    },
    {
        label: 'Castles',
        icon: GiCastle,
        description: 'This property is in a Castle'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'This property has Camping Facilities'
    },
    {
        label: 'Artic',
        icon: BsSnow,
        description: 'This property is in a Artic. Stay cooled and Freezed'
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'This property is in a Cave'
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'This property is in a Desert. Hydrate as much as u u can'
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description: 'This property is in a Barn. Enjoy with Animals'
    },
    {
        label: 'Luxe',
        icon: IoDiamond,
        description: 'Enjoy this Luxurious property'
    },
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if(!isMainPage)
        return null;

    return (
        <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
                {categories.map((item) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        icon={item.icon}
                        selected={category === item.label}
                    />
                ))}
            </div>
        </Container>
    );
}

export default Categories;