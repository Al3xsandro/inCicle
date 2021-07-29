import { Container } from "./style";

import { Profile } from "../../components/profile";
import { AsideSection } from "../../components/aside";
import { MainSection } from "../../components/section";

export function Dashboard() {
    return (
        <>
            <Container>
              <Profile />
              <MainSection />
              <AsideSection />
            </Container>
        </>
    );
};