import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "~/utils/consts";
import More from "~/layouts/main/sidebar/menu/more";
import NewTweet from "~/layouts/main/sidebar/menu/new";
import { useAccount } from "~/store/auth/hooks";
export default function Menu() {
    const account = useAccount();
  return (
    <nav className="mt-0.5 mb-1" key={account}>
        {mainMenu.map((menu,index) => (
        
            <NavLink key={index} to={typeof menu.path === 'function' ? menu.path() : menu.path } className="py-[3px] block group">
                {({isActive}) => (
                    <div className={classNames("p-3 rounded-full inline-flex transition-colors items-center gap-5 text-xl group-hover:bg-[#eff3f41a]",{
                        "font-bold" : isActive
                    })}>
                        
                    <div className="w-[26.25px] h-[26.25px]">
                        {!isActive && menu.icon.passive}
                        {isActive && menu.icon.active}
                    </div>
                    <div className="pr-4">{menu.title}</div>
                    </div>
                )}
            </NavLink>

        ))}
        
        <More />

        <NewTweet />
    </nav>
    
  );
}
