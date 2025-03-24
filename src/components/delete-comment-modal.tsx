import { X } from "lucide-react";
import { Portal } from "@/components/portal";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-simple-toasts";

interface DeleteCommentModalProps {
  isShow: boolean;
  onClose?: () => void;
}

export const DeleteCommentModal = ({ isShow, onClose }: DeleteCommentModalProps) => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      console.log('password', password);

      toast('삭제되었습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Portal isShow={isShow}>
      <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full max-h-full flex">
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow-sm">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 rounded-t">
              <h3 className="text-lg font-semibold text-gray-900">
                작성한 글 삭제하기
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                onClick={onClose}
              >
                <X size={20} />
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form className="p-4 md:p-5 text-left" onSubmit={handleSubmit}>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">관리자 및 작성자만 글을 삭제하실 수 있습니다</label>
                  <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="비밀번호를 입력해주세요"
                    onChange={handleChangeInput}
                    value={password}
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-[#afc18b] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                disabled={isLoading}
              >
                {isLoading ? '삭제중...' : '삭제하기'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div style={{ background: 'rgb(0, 0, 0, 0.3)' }} className="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-10" />
    </Portal>
  );
};
