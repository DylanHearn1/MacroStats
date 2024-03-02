interface BurgerMenuProps {
  onclick: () => void;
  open: boolean;
}

const BurgerMenu = ({ onclick, open }: BurgerMenuProps) => {
  const barStyle = 'content-none h-1 bg-black rounded-xl transition-all';

  return (
    <div
      className="flex flex-col justify-between h-5 w-6 cursor-pointer"
      onClick={onclick}
    >
      <div
        className={open ? `${barStyle} rotate-45 translate-y-2` : barStyle}
      ></div>
      <div
        className={open ? 'hidden' : 'content-none w-6 h-1 bg-black rounded-xl'}
      ></div>
      <div
        className={
          open ? `${barStyle} -rotate-45 -translate-y-2` : `${barStyle} w-6`
        }
      ></div>
    </div>
  );
};

export default BurgerMenu;
