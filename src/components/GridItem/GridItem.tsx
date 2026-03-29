import style from "./GridItem.module.css";

interface ChilderProps {
  children: React.ReactNode;
}

export default function GridItem({ children }: ChilderProps) {
  return <li className={style.item}>{children}</li>;
}
