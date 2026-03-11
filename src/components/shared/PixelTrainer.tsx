import trainerImg from "../../assets/trainer5.gif";

export default function PixelTrainer() {
  return (
    <img
      src={trainerImg}
      alt="Trainer"
      className="w-44 h-35 mx-auto pixelated object-cover object-bottom scale-110"
      style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))" }}
    />
  );
}
