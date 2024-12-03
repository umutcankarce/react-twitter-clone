import classNames from "classnames";
import { setCurrentAccount } from "~/store/auth/actions";
import {useAccount, useAccounts} from "~/store/auth/hooks";

export default function More ({close}){
    const currentAccount = useAccount()
	const accounts = useAccounts()
    return (
        <>
            {accounts.map(account => (
                <button 
                type="button"
                disabled={currentAccount.id === account.id}
                onClick={() => {
                    setCurrentAccount(account);
                    close()
                }}
                className={classNames("py-3 px-4 flex items-center text-left w-full transition-colors",{
                    "hover:bg-[#eff3f41a]": currentAccount.id !== account.id
                })}>
                    <img src={account.avatar} alt="" className="w-10 h-10 rounded-full" />
                    <div className="mx-3 text-[15px]">
                        <h6 className="font-bold leading-[20px]">{account.fullName}</h6>
                        <div className="text-[#71767b]">
                            @{account.username}
                        </div>
                    </div>
                </button>
            ))}
            <div className="h-px bg-[#2f3336] my-3"/>
            <button className="py-3 px-4 text-left text-[#e7e9ea] hover:bg-[#eff3f41a] text-bold leading-[1.25rem] w-full">
                Var olan bir hesap ekle
            </button>
            <button className="py-3 px-4 text-left text-[#e7e9ea] hover:bg-[#eff3f41a] text-bold leading-[1.25rem] w-full">
                Hesapları yönet
            </button>
            <button className="py-3 px-4 text-left transition-colors text-[#e7e9ea] hover:bg-[#eff3f41a] text-bold leading-[1.25rem] w-full">
                <div className="max-w-[228px]">
                @innovacraft hesabından çıkış yap
                </div>
            </button>
            </>
    );

}