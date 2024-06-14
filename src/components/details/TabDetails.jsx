import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabDetails() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs   value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Curriculum" {...a11yProps(1)} />
          <Tab label="Reviews" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>

            <Typography sx={{textAlign:"justify"}} variant='body2'>Duis dictum justo sit amet fringilla vestibulum. Fusce ac posuere risus, id fermentum massa. Proin vel ligula diam. Nunc porttitor nulla erat, in egestas ligula maximus eget. Suspendisse a nibh nisi.   Aliquam erat volutpat. Ut sollicitudin aliquet leo, vitae aliquam enim imperdiet ac. Proin eget est sit amet tortor mattis fringilla vitae id nunc. Donec lacinia varius est, fringilla bibendum nunc hendrerit dapibus.   Nullam tristique cursus sapien nec convallis. Vivamus tincidunt turpis erat, vel posuere massa mattis vel. Duis mauris metus, ullamcorper eu nunc varius, dictum pharetra dui. In efficitur viverra auctor. Etiam quam tortor, bibendum quis dolor ac, scelerisque sagittis lectus. Curabitur nec risus eros.Vivamus porta pretium lacus, sed volutpat libero pretium in. Vestibulum sagittis risus ipsum, ac cursus metus maximus ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.   Vivamus ullamcorper eros magna, ac gravida lorem ultrices sed. Donec sit amet nulla convallis, consequat metus non, tristique nisi. Duis ut sapien dignissim, viverra lacus eget, ultricies ex. Donec a tristique ex, ac volutpat augue. Vestibulum et metus malesuada neque commodo lobortis non in sapien. Sed suscipit ante sed rhoncus dignissim.</Typography>

      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      Curriculum

      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      Reviews
      </CustomTabPanel>
    </Box>
  );
}
