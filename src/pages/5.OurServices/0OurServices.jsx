import React from 'react';
import OurServicesHero from './1OurServicesHero';
import Implementation from './2Implementation';
import MigrationServices from './3MigrationServices';
import SupportServices from './4SupportServices';
import AdvisoryServices from './5AdvisoryServices';
import SecurityServices from './6SecurityServices';
import PostMigrationServices from './7PostMigrationServices';

const OurServices = () => {
  return (
    <>
      <OurServicesHero />
      <Implementation />
      <MigrationServices />
      <SupportServices />
      <AdvisoryServices />
      <SecurityServices />
      <PostMigrationServices />
    </>
  );
};

export default OurServices;