import Link from 'next/link';

import * as Styles from './Button.css.ts';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ href, onClick, children }: ButtonProps) => {
  // 링크가 제공되었을 경우
  if (href) {
    return (
      <Link href={href} className={Styles.Button}>
        {children}
      </Link>
    );
  }
  // 이벤트 핸들러가 제공되었을 경우
  return (
    <button className={Styles.Button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
