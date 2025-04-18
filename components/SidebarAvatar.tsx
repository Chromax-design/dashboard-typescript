import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"


const SidebarAvatar = () => {
    return (
        <div>
            <Avatar>
                {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                <AvatarFallback>G</AvatarFallback>
            </Avatar>
        </div>
    )
}

export default SidebarAvatar