import Premium from "~/layouts/main/rightbar/premium";
import Topics from "~/layouts/main/rightbar/topics";
import WhoFollow from "~/layouts/main/rightbar/who-follow";
import Search from "~/layouts/main/rightbar/search";
export default function RightBar (){ 
    return (
        <aside className="w-[350px] mr-2.5">
            <Search />
            <Premium />
            <Topics />
            <WhoFollow/>
        </aside>
    )
}