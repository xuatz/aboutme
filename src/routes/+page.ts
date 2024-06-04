import { formatDistanceToNow } from 'date-fns';

export function load() {
	const lengthOfCareerSoFar = formatDistanceToNow(new Date(2014, 2, 1));
	const reposThatImInterestedIn = [
		'https://github.com/pocketbase/pocketbase',
		'https://github.com/nhost/nhost',
	]


	return {
		lengthOfCareerSoFar,
		reposThatImInterestedIn,
	};
}
