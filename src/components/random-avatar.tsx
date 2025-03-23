import { useEffect, useRef, useState } from "react";
import Avatar, { AvatarFullConfig, genConfig } from "react-nice-avatar";
import { Shuffle } from 'lucide-react';

interface RandomAvatarProps {
  onChange: (config: AvatarFullConfig) => void;
}

const RandomAvatar = ({ onChange }: RandomAvatarProps) => {
  const [config, setConfig] = useState(genConfig());
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    onChangeRef.current(config);
  }, [config]);

  const handleClickShuffle = () => {
    setConfig(genConfig());
  };

  return (
    <div className="flex gap-x-2">
      <Avatar style={{ width: 48, height: 48 }} {...config} />
      <button className="w-[48px] h-[48px] flex items-center justify-center" onClick={handleClickShuffle}>
        <Shuffle />
      </button>
    </div>
  )
};

export default RandomAvatar;
