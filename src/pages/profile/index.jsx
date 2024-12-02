import store from "~/store";


export default function Profile(){ 
    return (
        <div>Profile component - {store.getState().auth?.currentAccount?.username}</div>
    )
}