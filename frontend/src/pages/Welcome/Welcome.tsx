import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import muiLogo from './logos/mui.svg';
import pwaLogo from './logos/pwa.svg';
import reactLogo from './logos/react_ed.svg';
import recoilLogo from './logos/recoil.svg';
import rrLogo from './logos/rr.svg';
import tsLogo from './logos/ts.svg';
import viteLogo from './logos/vite.svg';
import { Image } from './styled';
import FileCard from '@/components/PdfCard';

function Welcome() {
  const isPortrait = useOrientation();

  const width = isPortrait ? '40%' : '30%';
  const height = isPortrait ? '30%' : '40%';

  return (
    <>
      <Meta title="DocQT" />
      <FullSizeCenteredFlexBox flexDirection={isPortrait ? 'column' : 'row'}>
        <FileCard name={"Aviz epidemiologic"} date={"07.04.2023"} description={"Aliquam ut porttitor leo a diam sollicitudin tempor id eu"}></FileCard>
        <FileCard name={"Adeverinta medicala"} date={"01.04.2023"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing eli. "}></FileCard>
        <FileCard name={"Reta boala cronica"} date={"22.03.2023"} description={"Vitae tortor condimentum lacinia quis vel eros donec ac odio. "}></FileCard>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Welcome;
