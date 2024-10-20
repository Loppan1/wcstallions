import { forwardRef } from "react";
import './PageCover.css'
import logo from '../../assets/logo.png'

interface PageCoverProps {
    title: string,
    text: string
}

const PageCover = forwardRef<HTMLDivElement, PageCoverProps>((props, ref) => {

  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <img src={logo} className="logo" />
        <h2>{props.title}</h2>
        <h3>{props.text}</h3>
      </div>
    </div>
  );
});

export default PageCover;