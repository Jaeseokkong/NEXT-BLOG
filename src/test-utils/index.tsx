import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactElement } from 'react';

const generateQueryClient = () => {
	return new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
			},
		},
	})
};

const customRender = (ui: ReactElement, client?: QueryClient) => {
	const queryClient = client ?? generateQueryClient();

	return render(
		<QueryClientProvider client={queryClient}>
			{ui}
		</QueryClientProvider>
	);
}

export { customRender as render };
