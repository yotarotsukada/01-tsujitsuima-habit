import { getHabitPlanById } from '../../../store/habitPlan';
import { addToHabitRecord, getOrCreateHabitRecordByPlanId } from '../../../store/habitRecord';
import type { HabitPlan } from '../../../types/habitPlan';
import type { HabitRecord } from '../../../types/habitRecord';

export const ssr = false;

type Data = {
	habitPlan: HabitPlan | undefined;
	habitRecord: HabitRecord | undefined;
};

type PageProps = {
	params: {
		id: string;
	};
};

export function load({ params }: PageProps): Data {
	const habitPlan = getHabitPlanById(params.id);
	const habitRecord = habitPlan ? getOrCreateHabitRecordByPlanId(habitPlan.id) : undefined;
	return {
		habitPlan,
		habitRecord
	};
}

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const id = String(data.get('id'));
		addToHabitRecord(id);
	}
};
