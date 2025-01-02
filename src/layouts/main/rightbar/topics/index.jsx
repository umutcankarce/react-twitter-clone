
import SidebarSection from "~/components/sidebar-section";
import Topic from "~/layouts/main/rightbar/topics/topic";
import { topics } from "~/utils/consts";

export default function Topics(){
   return (
    <SidebarSection title="İlgini çekebilecek gündemler" more="/trends">
        {topics.map((topic, index) => <Topic key={index} item={topic} /> )}
    </SidebarSection>
   )
}