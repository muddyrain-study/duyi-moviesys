import { FC } from 'react';
import { useParams } from 'react-router';

export const EditMovie: FC = props => {
  const params = useParams<{ id: string }>();
  console.log(params.id);
  return <>EditMovie</>;
};
