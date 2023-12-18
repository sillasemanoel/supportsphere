// Styles
import { PresentationStyle } from "./style";
// Images
import wallpaper from "../../../../public/wallpaper.png";

export default function PresentationComponent() {
  const presentationStyle = {
    backgroundImage: `url(${wallpaper})`,
  };

  return (
    <PresentationStyle style={presentationStyle}>
      <div className="ghostPresentation">
        <ul>
          <li>
            <span className="arrowPresentation">▶</span>
          </li>
          <li>
            <span>Plataforma</span>
          </li>
          <li>
            <span>digital para</span>
          </li>
          <li>
            <span>se manter</span>
          </li>
          <li>
            <span>organizado.</span>
          </li>
        </ul>
        <div>
          <span>Torne seu trabalho mais eficiente.</span>
          <span>Chega de ficar vacilando na desorganização.</span>
        </div>
      </div>
    </PresentationStyle>
  );
}
