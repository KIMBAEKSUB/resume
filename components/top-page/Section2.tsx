import wave8r from "@/public/images/wave/wave-8r.svg"
import Image from "next/image";
import classNamees from "./Section.module.scss"


const Section2 = () => {
    return (
    <section className={classNamees.section2}>
      <h1>Section 2</h1>

      <div className={classNamees.wave_container_top}>
        <Image src={wave8r} alt="wave" className={classNamees.wave_8r} />
      </div>
    </section>
  );
}

export default Section2


