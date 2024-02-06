import { formatDistanceToNow } from 'date-fns';

export function load() {
	return {
		body: `I've been working as a software developer for ${formatDistanceToNow(
			new Date(2014, 2, 1)
		)} now.`
	};
}
