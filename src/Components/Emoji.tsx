import bullsEye from "../Assets/bulls-eye.webp";
import thumbsUp from "../Assets/thumbs-up.webp";
import meh from "../Assets/meh.webp";
import { ImageProps } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

interface Props {
  rating: number;
}

export const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsUp, alt: "recommended" },
    5: { src: bullsEye, alt: "exceptional" },
  };

  if (rating < 3) return null;
  return <Image marginTop={1} {...emojiMap[rating]} boxSize={"25px"}></Image>;
};
