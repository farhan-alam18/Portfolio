import { StarOrbit } from "./StarOrbit";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";

const HeroOrbit = () => {
  const randomValues = [
    { size: 725, rotation: -142, smallSize: 8 },
    { size: 560, rotation: 87, smallSize: 6 },
    { size: 680, rotation: -23, smallSize: 7 },
    { size: 490, rotation: 153, smallSize: 9 },
    { size: 760, rotation: -88, smallSize: 5 },
    { size: 620, rotation: 45, smallSize: 10 },
    { size: 550, rotation: -64, smallSize: 6 },
    { size: 715, rotation: 37, smallSize: 8 },
    { size: 480, rotation: -101, smallSize: 7 },
    { size: 790, rotation: 92, smallSize: 5 },
  ];
  return (
    <>
      <StarOrbit size={800} rotation={-70}>
        <StarIcon className="size-28 text-emerald-300" />
      </StarOrbit>
      <StarOrbit size={550} rotation={20}>
        <StarIcon className="size-12 text-emerald-300" />
      </StarOrbit>
      <StarOrbit size={590} rotation={98}>
        <StarIcon className="size-8 text-emerald-300" />
      </StarOrbit>
      <StarOrbit size={430} rotation={-14}>
        <SparkleIcon className="size-8 text-emerald-300/20" />
      </StarOrbit>
      <StarOrbit size={440} rotation={79}>
        <SparkleIcon className="size-5 text-emerald-300/20" />
      </StarOrbit>

      {/* Mapped Values  */}
      {randomValues.map((val, index) => (
        <StarOrbit key={index} size={val.size} rotation={val.rotation}>
          <SparkleIcon
            className={`size-${val.smallSize} text-emerald-300/20`}
          />
        </StarOrbit>
      ))}

      <StarOrbit size={530} rotation={178}>
        <SparkleIcon className="size-10 text-emerald-300/20" />
      </StarOrbit>
      <StarOrbit size={710} rotation={143}>
        <SparkleIcon className="size-14 text-emerald-300/20" />
      </StarOrbit>
      <StarOrbit size={730} rotation={105}>
        <div className="size-3 rounded-full bg-emerald-300/20"></div>
      </StarOrbit>
      <StarOrbit size={570} rotation={-35}>
        <div className="size-3 rounded-full bg-emerald-300/20"></div>
      </StarOrbit>
      <StarOrbit size={570} rotation={-35}>
        <div className="size-3 rounded-full bg-emerald-300/20"></div>
      </StarOrbit>
    </>
  );
};

export default HeroOrbit;
