import { formatDistanceToNow } from 'date-fns';

export function load() {
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

	const firstDayOfWork = new Date(2014, 2, 1);

	const firstDayOfArrivalInJapan = new Date(2017, 11, 14)

	return {
		career: {
			duration: formatDistanceToNow(firstDayOfWork),
		},
		japan: {
			arrival: firstDayOfArrivalInJapan,
			duration: formatDistanceToNow(firstDayOfArrivalInJapan)
		},
		reposThatImInterestedIn,
		wishlist,
	};
}
