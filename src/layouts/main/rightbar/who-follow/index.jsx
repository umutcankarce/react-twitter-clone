import SidebarSection from "~/components/sidebar-section";
import { useAccount } from "~/store/auth/hooks";

export default function WhoFollow(){ 

    const account = useAccount();

    return (
        <SidebarSection title="Kimi takip etmeli"
        more={`/connect_people?user_id=${account.id}`}>

        </SidebarSection>
    )
}