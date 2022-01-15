import { CreativeWork } from 'schema-dts';

// TODO: explicit typing
type Work = CreativeWork & {
  title: string;
};

export default Work;
