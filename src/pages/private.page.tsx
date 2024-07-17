import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useAppSelector } from "@/hooks"
import { selectUser } from "@/modules/auth/auth.selectors"

export const PrivatePage = () => {
  const user = useAppSelector(selectUser)
  const handleLogOut = () => {
    return;
  }
  return (
    <div className="mx-auto flex h-screen min-h-full justify-center bg-white align-middle">
      <Button onClick={handleLogOut} className="dark:focus:ring-[#4285F4]/55 mb-2 mr-2 inline-flex items-center self-center rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50">Sign Out</Button>
    <span
      className="dark:focus:ring-[#4285F4]/55 mb-2 mr-2 inline-flex items-center self-center rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50"
    >
      {user?.displayName}
      <Avatar className="ml-3">
      <AvatarImage src={user?.photoURL} />

      </Avatar>
    </span>

  </div>
  )
}
