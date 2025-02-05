import { IconTypes } from "solid-icons";
import { AiFillGithub, AiFillMail, AiOutlinePrinter } from "solid-icons/ai";
import { IoLogoInstagram, IoLogoYoutube } from "solid-icons/io";

export interface BrandIconProps {
  brand?: "instagram" | "youtube" | "printer" | "github" | "mail";
}

export const BrandIcon = (props: BrandIconProps) => {
  const brandIconMap = new Map<string, IconTypes>()
    .set("instagram", IoLogoInstagram)
    .set("youtube", IoLogoYoutube)
    .set("printer", AiOutlinePrinter)
    .set("github", AiFillGithub)
    .set("mail", AiFillMail);

  const IconComponent = props.brand ? brandIconMap.get(props.brand) : null;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
      }}
    >
      {IconComponent ? (
        <IconComponent style={{ width: "100%", height: "100%" }} />
      ) : null}
    </div>
  );
};
