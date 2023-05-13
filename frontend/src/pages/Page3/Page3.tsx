import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import usePoints from '@/hooks/usePoints';
import Points from '@/components/Points';

function Page3() {

  return (
    <>
      <Meta title="page 3" />
      <FullSizeCenteredFlexBox>
        <Points />
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Page3;
