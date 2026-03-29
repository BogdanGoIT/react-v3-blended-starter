import style from "./Grid.module.css";

interface GripProps {
  children: React.ReactNode;
}

export default function Grid({ children }: GripProps) {
  return <ul className={style.list}>{children}</ul>;
}
