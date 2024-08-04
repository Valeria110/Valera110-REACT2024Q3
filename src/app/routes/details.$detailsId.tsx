import { getPeopleById } from '../../services/services.ts';
import DetailsBlock from '../../components/DetailsBlock/DetailsBlock.tsx';
import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData, useNavigation } from '@remix-run/react';
import Loader from '../../components/Loader/Loader.tsx';

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const detailsId = params.detailsId as string;
  const charData = await getPeopleById(detailsId);
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') ?? '';
  const page = url.searchParams.get('page') ? Number(url.searchParams.get('page')) : 1;
  return json({ charData, searchTerm, page });
};

export default function Details() {
  const { charData, searchTerm, page } = useLoaderData<typeof loader>();
  const navigation = useNavigation();

  return navigation.state === 'loading' ? (
    <Loader />
  ) : (
    <DetailsBlock charData={charData} searchTerm={searchTerm} page={page} />
  );
}
