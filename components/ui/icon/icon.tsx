import AudioIcon from "./audio";
import HomeIcon from "./home";

export default function Icon({ icon }: { icon: string }): any {

  switch (icon) {
    case "home":
      return <HomeIcon />;
    case "tts":
      return <AudioIcon />;
  }

}
