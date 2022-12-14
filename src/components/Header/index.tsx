import { HeaderContainer } from "./styles";

import coverImg from '../../assets/cover.png';

export function Header() {
  return (
    <HeaderContainer>
        <img src={coverImg} alt="Imagem de fundo Header" />
    </HeaderContainer>
  )
}
