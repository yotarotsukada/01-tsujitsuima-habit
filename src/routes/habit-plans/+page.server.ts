import { redirect } from '@sveltejs/kit';
import type { PeriodUnit, HabitPlan } from '../../types/habitPlan';
import { createHabitPlan, getAllHabitPlans } from '../../store/habitPlan';

type Data = {
	habitPlans: HabitPlan[];
};

export function load(): Data {
	const habitPlans = getAllHabitPlans();
	return {
		habitPlans
	};
}

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const activity = String(data.get('activity'));
		const times = Number(data.get('times'));
		const [_count, _unit] = String(data.get('period')).split(' ');
		const startFrom = new Date(String(data.get('start-from')));

		const count = Number(_count);
		const unit = (_unit.charAt(0).toUpperCase() + _unit.slice(1).toLowerCase()) as PeriodUnit;

		const newHabitPlan = createHabitPlan({
			activity,
			times,
			period: {
				count,
				unit
			},
			startFrom
		});
		redirect(302, `/habit-plans/${newHabitPlan.id}`);
	}
};
