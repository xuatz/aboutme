import { formatDistanceToNow } from 'date-fns';

export function load() {
	const lengthOfCareerSoFar = formatDistanceToNow(new Date(2014, 2, 1));
	const reposThatImInterestedIn = [
		'https://github.com/pocketbase/pocketbase',
		'https://github.com/nhost/nhost',
	]
	const wishlist = [
		'Samsung Galaxy Z Fold 6',
		'SSD NAS',
		'Corne Keyboard',
		'New backpack',
		'New checked luggage',
		'Insta360',
	]
	return {
		lengthOfCareerSoFar,
		reposThatImInterestedIn,
		wishlist,
	};
}
