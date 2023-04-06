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
        <FileCard name={"Aviz epidemiologic"} date={"07.04.2023"} description={"Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Eget mauris pharetra et ultrices neque ornare aenean. Pellentesque id nibh tortor id aliquet. "}></FileCard>
        <FileCard name={"Adeverinta medicala"} date={"01.04.2023"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et pharetra pharetra massa massa ultricies mi quis. "}></FileCard>
        <FileCard name={"Reta boala cronica"} date={"22.03.2023"} description={"Vitae tortor condimentum lacinia quis vel eros donec ac odio. Ut pharetra sit amet aliquam id."}></FileCard>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Welcome;
