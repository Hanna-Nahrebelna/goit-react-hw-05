import css from "./Loader.module.css";
import { DNA } from "react-loader-spinner";


export default function Loader() {
  return (
    <div className={css.box}>
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"        
      />
    </div>
  );
}
