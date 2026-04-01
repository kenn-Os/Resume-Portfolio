import { Document, Font } from '@react-pdf/renderer';

// Register fonts globally to avoid repeated font loading per render
Font.register({
  family: 'Inter',
  fonts: [
    { src: '/fonts/Inter-Regular.ttf', fontWeight: 400 },
    { src: '/fonts/Inter-Italic.ttf', fontWeight: 400, fontStyle: 'italic' },
    { src: '/fonts/Inter-SemiBold.ttf', fontWeight: 600 },
    { src: '/fonts/Inter-Bold.ttf', fontWeight: 700 },
  ],
});

Font.register({
  family: 'Open Sans',
  fonts: [
    { src: '/fonts/OpenSans-Regular.ttf', fontWeight: 400 },
    { src: '/fonts/OpenSans-SemiBold.ttf', fontWeight: 600 },
    { src: '/fonts/OpenSans-Bold.ttf', fontWeight: 700 },
  ],
});

import RegularTemplate from './RegularTemplate';
import UKTemplate from './UKTemplate';
import EuropassTemplate from './EuropassTemplate';
import { profile, experience, tools, services } from '../../lib/data';

const ResumeDocument = ({ type = 'regular' }) => {

  let Template = RegularTemplate;
  if (type === 'uk') Template = UKTemplate;
  if (type === 'europass') Template = EuropassTemplate;

  return (
    <Document title={`Resume - ${profile.name}`}>
      <Template 
        profile={profile} 
        experience={experience} 
        tools={tools} 
        services={services} 
      />
    </Document>
  );
};

export default ResumeDocument;
