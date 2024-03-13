interface NavigationItemProps {
  label?: string;
  id: string;
  onClick: (id: string) => void;
  normal?: boolean;
  style?: string;
  text: boolean;
  children?: React.ReactNode;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  label,
  id,
  onClick,
  normal,
  style,
  text,
  children,
}) => {
  const buttonstyle = normal ? "group transition duration-300" : style;
  if (text) {
    return (
      <>
        <button className={buttonstyle} onClick={() => onClick(id)}>
          {label}
          {children}
          {normal && (
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-aquagreen"></span>
          )}
        </button>
      </>
    );
  } else if (!text) {
    return (
      <>
        <button
          onClick={() => onClick(id)}
          className="scale-125 mx-auto self-center py-5 xl:ml-40 xl:mr-10"
        >
          {label}
          {children}
        </button>
      </>
    );
  }
};

export default NavigationItem;
