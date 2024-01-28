import { useFetchRecipientUser } from '../../hooks/useFetchRecipientUser';

function UserChat({ chat, user }) {
  const { recipientUser } = useFetchRecipientUser(chat, user);
  return (
    <div className="flex gap-3 items-center justify-between lg:w-96 w-12 p-1 border border-black border-t-0 border-r-0 border-l-0">
      <div className="flex gap-2">
        <div>A</div>
        <div>
          <div className="font-semibold">{recipientUser?.name}</div>
          <div className="opacity-80">text message...</div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="text-sm">12-12-12</div>
        <div className="w-5 h-5 p-1 rounded-full bg-green-500 flex justify-center items-center text-xs">
          2
        </div>
      </div>
    </div>
  );
}

export default UserChat;
